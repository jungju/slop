import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { loadSeriesContent } from "./lib/series-content.mjs";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");
const outDir = join(root, "_site");
const { content, packages } = await loadSeriesContent(root);
const series = content.series.find((item) => item.id === "wind-returning-place");
const allEpisodes = content.series.flatMap((item) => item.episodes);
const expectedWebpCount = allEpisodes.reduce((sum, episode) => sum + episode.pageCount, 0);
const packageById = new Map(packages.map((item) => [item.definition.id, item]));
const errors = [];

assert(series, "wind-returning-place 시리즈가 없습니다.");
assert(content.series.length > 0, "등록된 연재가 없습니다.");

for (const item of packages) {
  assert(item.harness.series === item.definition.id, `${item.definition.slug} 하네스의 series가 일치하지 않습니다.`);
  assert(item.harness.pageCount > 0, `${item.definition.slug} 하네스에 pageCount가 없습니다.`);
  assert(item.definition.about, `${item.definition.slug} 작품 소개가 없습니다.`);
  assert(item.definition.audience, `${item.definition.slug} 대상 독자 정보가 없습니다.`);
  assert(item.definition.format?.label && item.definition.format?.detail, `${item.definition.slug} 형식 정보가 없습니다.`);
  assert(
    item.definition.schedule?.label &&
      item.definition.schedule?.time &&
      item.definition.schedule?.timezone &&
      item.definition.schedule?.note,
    `${item.definition.slug} 연재 일정 정보가 없습니다.`,
  );
  assert(item.definition.basis?.label && item.definition.basis?.detail, `${item.definition.slug} 내용 기반 정보가 없습니다.`);
  for (let index = 0; index < item.definition.episodes.length; index += 1) {
    assert(item.definition.episodes[index].number === index + 1, `${item.definition.slug} 회차 번호가 연속적이지 않습니다.`);
  }
  const seriesHtml = await readFile(
    join(outDir, "series", item.definition.slug, "index.html"),
    "utf8",
  );
  assert(seriesHtml.includes('id="series-guide-title"'), `${item.definition.slug} 작품 안내가 공개되지 않았습니다.`);
  assert(seriesHtml.includes(item.definition.schedule.label), `${item.definition.slug} 연재 일정이 공개되지 않았습니다.`);
  assert(seriesHtml.includes(item.definition.format.label), `${item.definition.slug} 작품 형식이 공개되지 않았습니다.`);
}

for (const episode of allEpisodes) {
  const expectedPages = packageById.get(episode.seriesId)?.harness.pageCount;
  assert(episode.pageCount === expectedPages, `${episode.seriesSlug}/${episode.id} pageCount가 하네스와 다릅니다.`);
  assert(episode.pages.length === expectedPages, `${episode.seriesSlug}/${episode.id} 페이지 수가 하네스와 다릅니다.`);
  assert(
    episode.pages.every(
      (page) =>
        page.width > 0 &&
        page.height > 0 &&
        page.alt &&
        page.src.endsWith(".webp"),
    ),
    episode.id + " 페이지 메타데이터가 불완전합니다.",
  );

  if (episode.provenance.image.status === "not-recorded") {
    assert(
      !episode.provenance.image.model,
      episode.id + "의 모델 기록 없음 상태에 모델명이 포함되어 있습니다.",
    );
  } else {
    assert(
      episode.provenance.image.model,
      episode.id + "의 확인된 이미지 모델 정보가 없습니다.",
    );
  }
  if (Array.isArray(episode.sources) && episode.sources.length > 0) {
    const readerHtml = await readFile(
      join(outDir, "comics", episode.seriesSlug, episode.id, "index.html"),
      "utf8",
    );
    assert(readerHtml.includes('id="episode-sources-title"'), `${episode.seriesSlug}/${episode.id} 출처 영역이 공개되지 않았습니다.`);
    for (const source of episode.sources) {
      assert(readerHtml.includes(source.url), `${episode.seriesSlug}/${episode.id} 출처 링크가 공개되지 않았습니다: ${source.url}`);
    }
  }
}
const files = await walk(outDir);
const htmlFiles = files.filter((path) => extname(path) === ".html");
const webpFiles = files.filter((path) => extname(path) === ".webp");
const stylesPath = files.find((path) =>
  /[\\/]assets[\\/]styles\.[0-9a-f]{12}\.css$/.test(path),
);
const appPath = files.find((path) =>
  /[\\/]assets[\\/]app\.[0-9a-f]{12}\.js$/.test(path),
);
const webpStats = await Promise.all(webpFiles.map((path) => stat(path)));
const totalWebpBytes = webpStats.reduce((sum, info) => sum + info.size, 0);
const largestWebpBytes = Math.max(...webpStats.map((info) => info.size), 0);

assert(webpFiles.length === expectedWebpCount, `독자용 WebP 이미지가 ${expectedWebpCount}장이 아닙니다.`);
assert(
  totalWebpBytes < 250 * 1024 * 1024,
  "WebP 총용량이 250MiB를 넘습니다.",
);
assert(
  largestWebpBytes < 5 * 1024 * 1024,
  "5MiB를 넘는 WebP 이미지가 있습니다.",
);

const cname = (await readFile(join(outDir, "CNAME"), "utf8")).trim();
assert(cname === "slop.jjgo.io", "CNAME이 slop.jjgo.io가 아닙니다.");

const home = await readFile(join(outDir, "index.html"), "utf8");
assert(stylesPath, "내용 해시가 포함된 CSS 빌드 자산이 없습니다.");
assert(appPath, "내용 해시가 포함된 JavaScript 빌드 자산이 없습니다.");
const styles = stylesPath ? await readFile(stylesPath, "utf8") : "";
const app = appPath ? await readFile(appPath, "utf8") : "";
const stylesUrl = stylesPath
  ? "/" + relative(outDir, stylesPath).replaceAll("\\", "/")
  : "";
const appUrl = appPath
  ? "/" + relative(outDir, appPath).replaceAll("\\", "/")
  : "";
assert(
  home.includes('href="' + stylesUrl + '"'),
  "홈이 내용 해시 CSS 자산을 참조하지 않습니다.",
);
assert(
  home.includes('src="' + appUrl + '"'),
  "홈이 내용 해시 JavaScript 자산을 참조하지 않습니다.",
);
assert(!home.includes('class="signal-list"'), "홈 히어로의 원칙 태그가 제거되지 않았습니다.");
assert(!home.includes("<li>100% AI 제작</li>"), "홈에 100% AI 제작 태그가 남아 있습니다.");
assert(!home.includes("<li>자동 게시</li>"), "홈에 자동 게시 태그가 남아 있습니다.");
assert(!home.includes("<li>모델 정보 공개</li>"), "홈에 모델 정보 공개 태그가 남아 있습니다.");
assert(
  home.includes("hero__headline-fixed\">AI가</span>"),
  "홈 히어로에 고정 문구 ‘AI가’가 없습니다.",
);
assert(
  home.includes('class="hero__headline-word" data-hero-word>만듭니다.</span>'),
  "홈 히어로의 단일 전환 문구가 없습니다.",
);
assert(
  (home.match(/class="hero__headline-word"/g) || []).length === 1,
  "홈 히어로의 전환 문구 레이어는 하나여야 합니다.",
);
for (const message of ["만듭니다.", "생각합니다.", "운영합니다."]) {
  assert(
    app.includes('"' + message + '"'),
    "홈 히어로 순환 스크립트에 문구가 없습니다: " + message,
  );
}
assert(
  home.includes("AI가 만듭니다. AI가 생각합니다. AI가 운영합니다."),
  "홈 히어로의 접근 가능한 전체 문구가 없습니다.",
);
assert(
  app.includes("rotatingWord.animate"),
  "홈 히어로 단일 레이어 전환 애니메이션이 없습니다.",
);
assert(
  app.includes("prefers-reduced-motion: reduce"),
  "홈 히어로에 모션 감소 처리가 없습니다.",
);
assert(
  !home.includes("hero__headline-track") &&
    !styles.includes("@keyframes hero-copy-cycle"),
  "홈 히어로에 이전 다중 레이어 트랙이 남아 있습니다.",
);
assert(
  !home.includes("AI가 만들고,<br>AI가 연재합니다."),
  "홈 히어로에 이전 문구가 남아 있습니다.",
);
assert(!home.includes("인기"), "초기 홈에 인기 영역이 포함되어 있습니다.");
assert(!home.includes("추천"), "초기 홈에 추천 영역이 포함되어 있습니다.");

const windPackage = packages.find((item) => item.definition.id === "wind-returning-place");
for (const required of [
  "series-canon.md",
  "episode-ledger.md",
  "comic-dna.yaml",
  "comic-profile.yaml",
  "continuity-registry.yaml",
  "story-clarity-contract.yaml",
  "page-layout-contract.yaml",
]) {
  try {
    await stat(join(windPackage.packageRoot, "spec", required));
  } catch {
    errors.push(`바람이 돌아오는 곳 스펙이 없습니다: ${required}`);
  }
}

for (const htmlPath of htmlFiles) {
  const html = await readFile(htmlPath, "utf8");
  const publicPath =
    "/" +
    htmlPath
      .slice(outDir.length + 1)
      .replaceAll("\\", "/")
      .replace(/index\.html$/, "");
  assert(
    /<html lang="ko">/.test(html),
    publicPath + "에 한국어 문서 언어가 없습니다.",
  );
  assert(
    /<main id="main">/.test(html),
    publicPath + "에 main 랜드마크가 없습니다.",
  );
  assert(
    !/<img(?![^>]*\balt=)[^>]*>/i.test(html),
    publicPath + "에 alt가 없는 이미지가 있습니다.",
  );

  for (const url of extractLocalReferences(html)) {
    const target = resolveReference(url);
    try {
      const info = await stat(target);
      if (url.endsWith("/")) {
        assert(
          info.isFile() && target.endsWith("index.html"),
          publicPath + "의 링크 대상이 페이지가 아닙니다: " + url,
        );
      }
    } catch {
      errors.push(publicPath + "의 내부 참조가 없습니다: " + url);
    }
  }
}

if (errors.length > 0) {
  process.stderr.write(
    "검증 실패 (" + errors.length + ")\n- " + errors.join("\n- ") + "\n",
  );
  process.exit(1);
}

process.stdout.write(
  "검증 통과: " +
    htmlFiles.length +
    " HTML, " +
    content.series.length +
    " Series, " +
    allEpisodes.length +
    " Episodes, " +
    webpFiles.length +
    " WebP, " +
    (totalWebpBytes / 1024 / 1024).toFixed(2) +
    " MiB\n",
);

function assert(condition, message) {
  if (!condition) errors.push(message);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? walk(path) : [path];
    }),
  );
  return nested.flat();
}

function extractLocalReferences(html) {
  const urls = [];
  const pattern = /\b(?:href|src)="([^"]+)"/g;
  for (const match of html.matchAll(pattern)) {
    const url = match[1];
    if (
      !url ||
      url.startsWith("#") ||
      url.startsWith("http://") ||
      url.startsWith("https://") ||
      url.startsWith("mailto:") ||
      url.startsWith("data:")
    ) {
      continue;
    }
    urls.push(url.split(/[?#]/)[0]);
  }
  return [...new Set(urls)];
}

function resolveReference(url) {
  const clean = url.replace(/^\//, "");
  if (url === "/") return join(outDir, "index.html");
  if (url.endsWith("/")) return join(outDir, clean, "index.html");
  return join(outDir, clean);
}
