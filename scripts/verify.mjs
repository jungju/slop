import { readFile, readdir, stat } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { escapeHtml } from "./templates/html.mjs";

const outDir = fileURLToPath(new URL("../_site/", import.meta.url));

async function main() {
  const content = JSON.parse(
    await readFile(join(outDir, "content.json"), "utf8"),
  );
  const episodes = content.series.flatMap((series) => series.episodes);
  const files = await readdir(outDir, { recursive: true });
  const htmlFiles = files.filter((file) => extname(file) === ".html");
  const webpFiles = files.filter((file) => extname(file) === ".webp");
  const errors = [];
  const assert = (condition, message) => {
    if (!condition) errors.push(message);
  };
  const read = (path) => readFile(join(outDir, path), "utf8");
  const htmlByPath = new Map();
  for (const file of htmlFiles) {
    const path = "/" + file.replaceAll("\\", "/").replace(/index\.html$/, "");
    htmlByPath.set(path, await read(file));
  }
  assert(content.series.length > 0, "게시된 연재가 없습니다.");
  assert(
    episodes.every((episode) => episode.status !== "draft"),
    "공개 데이터에 초안이 포함되었습니다.",
  );
  for (const series of content.series) {
    const html = htmlByPath.get(`/series/${series.slug}/`) || "";
    assert(
      html.includes('id="series-guide-title"'),
      `${series.slug} 작품 안내가 없습니다.`,
    );
    assert(
      html.includes(escapeHtml(series.schedule.label)) &&
        html.includes(escapeHtml(series.format.label)),
      `${series.slug} 일정 또는 형식이 공개되지 않았습니다.`,
    );
    for (const episode of series.episodes) {
      const path = `/comics/${series.slug}/${episode.id}/`;
      const reader = htmlByPath.get(path) || "";
      assert(
        reader.includes('href="#comic-reader"') &&
          reader.includes('id="comic-reader"'),
        `${path} 만화 본문 이동이 없습니다.`,
      );
      assert(
        ["fit", "width"].every((view) =>
          reader.includes(`data-reader-view="${view}"`),
        ),
        `${path} 보기 방식 전환이 없습니다.`,
      );
      assert(
        (reader.match(/data-reader-page="\d+"/g) || []).length ===
          episode.pageCount,
        `${path} 페이지 수가 맞지 않습니다.`,
      );
      assert(
        reader.includes(`aria-valuemax="${episode.pageCount}"`) &&
          reader.includes("data-reader-current"),
        `${path} 진행 정보가 없습니다.`,
      );
      const expectedCaptions =
        episode.presentation?.mode === "site-native-caption"
          ? episode.pageCount
          : 0;
      assert(
        (reader.match(/class="comic-reader__caption"/g) || []).length ===
          expectedCaptions,
        `${path} 캡션 수가 맞지 않습니다.`,
      );
      assert(
        reader.indexOf('class="reader-production"') >
          reader.indexOf('id="comic-reader"'),
        `${path} 제작 정보가 본문보다 먼저 노출됩니다.`,
      );
      for (const source of episode.sources || [])
        assert(
          reader.includes(escapeHtml(source.url)),
          `${path} 출처 링크가 없습니다: ${source.url}`,
        );
    }
  }
  const expectedImages = new Set(
    episodes.flatMap((episode) => episode.pages.map((page) => page.src)),
  );
  assert(
    webpFiles.length === expectedImages.size,
    `독자용 WebP 수가 맞지 않습니다: ${webpFiles.length}/${expectedImages.size}`,
  );
  const sizes = await Promise.all(
    webpFiles.map(async (file) => {
      assert(
        expectedImages.has("/" + file.replaceAll("\\", "/")),
        `사용하지 않는 이미지가 빌드에 포함되었습니다: ${file}`,
      );
      return (await stat(join(outDir, file))).size;
    }),
  );
  const totalBytes = sizes.reduce((sum, size) => sum + size, 0);
  assert(totalBytes < 250 * 1024 * 1024, "WebP 총용량이 250MiB를 넘습니다.");
  assert(
    sizes.every((size) => size > 0 && size < 5 * 1024 * 1024),
    "비어 있거나 5MiB를 넘는 WebP 이미지가 있습니다.",
  );
  assert(
    (await read("CNAME")).trim() === new URL(content.site.url).hostname,
    "CNAME과 사이트 주소가 다릅니다.",
  );

  const home = htmlByPath.get("/") || "";
  for (const [name, extension, attribute] of [
    ["styles", "css", "href"],
    ["app", "js", "src"],
  ]) {
    const asset = files.find((file) =>
      new RegExp(`^assets[/\\\\]${name}\\.[0-9a-f]{12}\\.${extension}$`).test(
        file,
      ),
    );
    assert(
      asset && home.includes(`${attribute}="/${asset.replaceAll("\\", "/")}"`),
      `${name} 해시 자산을 찾을 수 없습니다.`,
    );
  }
  const posthogAsset = files.find((file) =>
    /[/\\]posthog\.[0-9a-f]{12}\.js$/.test(file),
  );
  if (process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN?.trim()) {
    const posthog = posthogAsset ? await read(posthogAsset) : "";
    assert(
      posthogAsset && home.includes(posthogAsset.replaceAll("\\", "/")),
      "PostHog 자산 참조가 없습니다.",
    );
    for (const required of [
      "posthog.init(",
      "capture_pageleave: true",
      "disable_session_recording: true",
    ])
      assert(
        posthog.includes(required),
        `PostHog 설정이 없습니다: ${required}`,
      );
    assert(
      !posthog.includes("__POSTHOG_"),
      "PostHog 설정 자리표시자가 남아 있습니다.",
    );
  } else {
    assert(!posthogAsset, "토큰 없이 PostHog가 생성되었습니다.");
  }
  const models = htmlByPath.get("/models/") || "";
  assert(
    models.includes("model-card--unknown") ===
      episodes.some(
        (episode) => episode.provenance.image.status !== "known-provider",
      ),
    "모델 기록 없음 표시가 실제 기록과 다릅니다.",
  );

  const checkedFiles = new Set();
  for (const [path, html] of htmlByPath) {
    assert(
      html.includes('<html lang="ko">') && html.includes('<main id="main">'),
      `${path} 문서 언어 또는 본문 랜드마크가 없습니다.`,
    );
    assert(
      (html.match(/<h1\b/g) || []).length === 1,
      `${path} h1은 하나여야 합니다.`,
    );
    assert(
      !/<img(?![^>]*\balt=)[^>]*>/i.test(html),
      `${path} alt가 없는 이미지가 있습니다.`,
    );
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert(new Set(ids).size === ids.length, `${path} 중복 id가 있습니다.`);
    for (const match of html.matchAll(
      /<script type="application\/ld\+json">(.*?)<\/script>/gs,
    )) {
      try {
        JSON.parse(match[1]);
      } catch {
        errors.push(`${path} 구조화 데이터가 올바른 JSON이 아닙니다.`);
      }
    }
    for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
      const url = new URL(
        match[1].replaceAll("&amp;", "&"),
        content.site.url + path,
      );
      if (url.origin !== content.site.url) continue;
      const targetPath = decodeURIComponent(url.pathname);
      if (url.hash) {
        const targetHtml = htmlByPath.get(targetPath) || "";
        assert(
          targetHtml.includes(
            `id="${escapeHtml(decodeURIComponent(url.hash.slice(1)))}"`,
          ),
          `${path} 앵커 대상이 없습니다: ${url.pathname}${url.hash}`,
        );
      }
      if (checkedFiles.has(targetPath)) continue;
      checkedFiles.add(targetPath);
      const target = join(
        outDir,
        targetPath,
        targetPath.endsWith("/") ? "index.html" : "",
      );
      assert(
        !relative(outDir, target).startsWith(".."),
        `${path} 빌드 밖을 참조합니다: ${targetPath}`,
      );
      try {
        assert(
          (await stat(target)).isFile(),
          `${path} 파일이 아닌 참조입니다: ${targetPath}`,
        );
      } catch {
        errors.push(`${path} 내부 참조가 없습니다: ${targetPath}`);
      }
    }
  }
  if (errors.length)
    throw new Error(`검증 실패 (${errors.length})\n- ${errors.join("\n- ")}`);
  process.stdout.write(
    `검증 통과: ${htmlFiles.length} HTML, ${content.series.length} Series, ${episodes.length} Episodes, ${webpFiles.length} WebP, ${(totalBytes / 1024 / 1024).toFixed(2)} MiB\n`,
  );
}

main().catch((error) => {
  process.stderr.write(error.message + "\n");
  process.exitCode = 1;
});
