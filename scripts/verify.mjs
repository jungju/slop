import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");
const outDir = join(root, "_site");
const content = JSON.parse(
  await readFile(join(root, "content", "site.json"), "utf8"),
);
const series = content.series.find(
  (item) => item.id === "wind-returning-place",
);
const errors = [];

assert(series, "wind-returning-place 시리즈가 없습니다.");
assert(series?.episodes.length === 29, "에피소드 수가 29화가 아닙니다.");

for (const episode of series?.episodes || []) {
  assert(episode.pageCount === 20, episode.id + " pageCount가 20이 아닙니다.");
  assert(episode.pages.length === 20, episode.id + " 페이지가 20장이 아닙니다.");
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

  if (episode.number <= 3) {
    assert(
      episode.provenance.image.status === "not-recorded",
      episode.id + "은 모델 기록 없음으로 표시해야 합니다.",
    );
  } else {
    assert(
      episode.provenance.image.model === "OpenAI Image Generation",
      episode.id + "의 확인된 이미지 모델 정보가 없습니다.",
    );
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

assert(webpFiles.length === 580, "독자용 WebP 이미지가 580장이 아닙니다.");
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
assert(home.includes("100% AI 제작"), "홈에 100% AI 제작 설명이 없습니다.");
assert(home.includes("자동 게시"), "홈에 자동 게시 설명이 없습니다.");
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
