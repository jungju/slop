import { cp, mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { copySeriesAssets, loadSeriesContent } from "./lib/series-content.mjs";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");
const outDir = resolve(root, "_site");

if (dirname(outDir) !== root || basename(outDir) !== "_site") {
  throw new Error("안전하지 않은 빌드 출력 경로입니다: " + outDir);
}

const { content, packages } = await loadSeriesContent(root);
const stylesSource = await readFile(join(root, "src", "styles.css"), "utf8");
const appSource = await readFile(join(root, "src", "app.js"), "utf8");
const stylesAsset = "styles." + fingerprint(stylesSource) + ".css";
const appAsset = "app." + fingerprint(appSource) + ".js";
const site = content.site;
const allSeries = content.series;
const primarySeries = allSeries[0];
const primaryEpisodes = primarySeries.episodes;
const latestEpisode = primaryEpisodes.at(-1);
const allEpisodes = allSeries.flatMap((item) => item.episodes);
const routes = [];

await rm(outDir, { recursive: true, force: true });
await mkdir(join(outDir, "assets"), { recursive: true });
await cp(join(root, "public"), outDir, { recursive: true });
await copySeriesAssets(outDir, packages);
await writeFile(join(outDir, "assets", stylesAsset), stylesSource, "utf8");
await writeFile(join(outDir, "assets", appAsset), appSource, "utf8");
await cp(join(root, "CNAME"), join(outDir, "CNAME"));
await writeFile(join(outDir, ".nojekyll"), "", "utf8");
await writeFile(
  join(outDir, "content.json"),
  JSON.stringify(content, null, 2) + "\n",
  "utf8",
);

await route(
  "/",
  layout({
    path: "/",
    title: site.name,
    description: site.description,
    page: "home",
    ogImage: latestEpisode.pages[0].src,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.url,
      description: site.description,
      inLanguage: "ko",
    },
    body: homePage(),
  }),
);

await route(
  "/works/",
  layout({
    path: "/works/",
    title: "작품",
    description: "AI가 제작하고 자동으로 게시한 만화와 영상을 봅니다.",
    page: "works",
    ogImage: latestEpisode.pages[0].src,
    body: worksPage(),
  }),
);

await route(
  "/models/",
  layout({
    path: "/models/",
    title: "AI 모델",
    description: "AI Slop 작품 제작에 사용된 AI 모델과 기록 범위를 공개합니다.",
    page: "models",
    body: modelsPage(),
  }),
);

for (const model of content.models) {
  await route(
    "/models/" + model.id + "/",
    layout({
      path: "/models/" + model.id + "/",
      title: model.name,
      description: model.name + "을 사용한 작품과 제작 기록입니다.",
      page: "model-detail",
      body: modelDetailPage(model),
    }),
  );
}

await route(
  "/process/",
  layout({
    path: "/process/",
    title: "제작 방식",
    description: "AI Slop의 100% AI 제작과 자동 게시 방식을 설명합니다.",
    page: "process",
    body: processPage(),
  }),
);

for (const currentSeries of allSeries) {
  const currentEpisodes = currentSeries.episodes;
  const currentLatest = currentEpisodes.at(-1);
  await route(
    "/series/" + currentSeries.slug + "/",
    layout({
      path: "/series/" + currentSeries.slug + "/",
      title: currentSeries.title,
      description: currentSeries.summary,
      page: "series",
      ogImage: currentLatest.pages[0].src,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "CreativeWorkSeries",
        name: currentSeries.title,
        description: currentSeries.summary,
        url: site.url + "/series/" + currentSeries.slug + "/",
        numberOfEpisodes: currentEpisodes.length,
        inLanguage: "ko",
        isFamilyFriendly: true,
      },
      body: seriesPage(currentSeries),
    }),
  );

  for (const [index, episode] of currentEpisodes.entries()) {
    const path = "/comics/" + currentSeries.slug + "/" + episode.id + "/";
    await route(
      path,
      layout({
        path,
        title: episode.title + " — " + currentSeries.title,
        description: episode.lead,
        page: "reader",
        ogImage: episode.pages[0].src,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "ComicStory",
          name: episode.title,
          description: episode.lead,
          url: site.url + path,
          position: episode.number,
          image: site.url + episode.pages[0].src,
          inLanguage: "ko",
          isPartOf: {
            "@type": "CreativeWorkSeries",
            name: currentSeries.title,
            url: site.url + "/series/" + currentSeries.slug + "/",
          },
        },
        body: readerPage(currentSeries, episode, index),
      }),
    );
  }
}

const notFound = layout({
  path: "/404.html",
  title: "페이지를 찾을 수 없습니다",
  description: "요청한 AI Slop 페이지를 찾을 수 없습니다.",
  page: "not-found",
  noIndex: true,
  body: `
    <section class="simple-page error-page">
      <p class="eyebrow">404 · LOST OUTPUT</p>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>주소가 바뀌었거나 아직 게시되지 않은 작품입니다.</p>
      <a class="button button--dark" href="/works/">작품으로 돌아가기</a>
    </section>
  `,
});
await writeFile(join(outDir, "404.html"), notFound, "utf8");

await writeFile(
  join(outDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((path) => "  <url><loc>" + escapeXml(site.url + path) + "</loc></url>").join("\n")}
</urlset>
`,
  "utf8",
);

await writeFile(
  join(outDir, "robots.txt"),
  "User-agent: *\nAllow: /\nSitemap: " + site.url + "/sitemap.xml\n",
  "utf8",
);

await writeFile(
  join(outDir, "site.webmanifest"),
  JSON.stringify(
    {
      name: site.name,
      short_name: site.name,
      description: site.description,
      start_url: "/",
      display: "standalone",
      background_color: "#f3f0e8",
      theme_color: "#111111",
    },
    null,
    2,
  ) + "\n",
  "utf8",
);

const assetStats = await stat(
  join(
    outDir,
    latestEpisode.pages[0].src.replace(/^\//, ""),
  ),
);
process.stdout.write(
  "빌드 완료: " +
    routes.length +
    "개 경로, " +
    allSeries.length +
    "개 연재, " +
    allEpisodes.length +
    "화, 최신 표지 " +
    assetStats.size +
    " bytes\n",
);

async function route(path, html) {
  const clean = path.replace(/^\/|\/$/g, "");
  const target = clean ? join(outDir, ...clean.split("/")) : outDir;
  await mkdir(target, { recursive: true });
  await writeFile(join(target, "index.html"), html, "utf8");
  routes.push(path);
}

function layout({
  path,
  title,
  description,
  body,
  page,
  ogImage = latestEpisode?.pages?.[0]?.src || "",
  structuredData,
  noIndex = false,
}) {
  const fullTitle = title === site.name ? site.name : title + " | " + site.name;
  const canonical = site.url + path;
  const image = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : site.url + ogImage
    : "";
  const jsonLd = structuredData
    ? `<script type="application/ld+json">${safeJson(structuredData)}</script>`
    : "";
  return `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(fullTitle)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="theme-color" content="#111111">
    ${noIndex ? '<meta name="robots" content="noindex">' : ""}
    <link rel="canonical" href="${escapeHtml(canonical)}">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="stylesheet" href="/assets/${stylesAsset}">
    <meta property="og:type" content="${page === "reader" ? "article" : "website"}">
    <meta property="og:site_name" content="${escapeHtml(site.name)}">
    <meta property="og:title" content="${escapeHtml(fullTitle)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${escapeHtml(canonical)}">
    ${image ? '<meta property="og:image" content="' + escapeHtml(image) + '">' : ""}
    <meta name="twitter:card" content="summary_large_image">
    ${jsonLd}
    <script src="/assets/${appAsset}" defer></script>
  </head>
  <body data-page="${escapeHtml(page)}">
    <a class="skip-link" href="#main">본문으로 바로가기</a>
    ${header(path)}
    <main id="main">${body}</main>
    ${footer()}
  </body>
</html>
`;
}

function header(path) {
  const links = [
    ["/works/", "작품"],
    ["/models/", "AI 모델"],
    ["/process/", "제작 방식"],
  ];
  return `
    <header class="site-header">
      <a class="brand" href="/" aria-label="AI Slop 홈">
        <span>AI</span><strong>SLOP</strong><i aria-hidden="true"></i>
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav">
        <span class="sr-only">메뉴 열기</span>
        <span aria-hidden="true"></span><span aria-hidden="true"></span>
      </button>
      <nav class="site-nav" id="site-nav" aria-label="주요 메뉴">
        ${links
          .map(([href, label]) => {
            const active = path.startsWith(href);
            return (
              '<a href="' +
              href +
              '"' +
              (active ? ' aria-current="page"' : "") +
              ">" +
              label +
              "</a>"
            );
          })
          .join("")}
      </nav>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div>
        <a class="brand brand--footer" href="/"><span>AI</span><strong>SLOP</strong></a>
        <p>100% AI가 만들고 자동으로 연재하는 만화와 영상.</p>
      </div>
      <div class="footer-links">
        <a href="/works/">작품</a>
        <a href="/models/">AI 모델</a>
        <a href="/process/">제작 방식</a>
        <a href="${escapeHtml(site.github)}">GitHub</a>
      </div>
    </footer>
  `;
}

function homePage() {
  const latestThree = allSeries
    .flatMap((item) => item.episodes.map((episode) => ({ series: item, episode })))
    .sort((a, b) => {
      const publishedA = a.episode.publishedAt ? Date.parse(a.episode.publishedAt) : 0;
      const publishedB = b.episode.publishedAt ? Date.parse(b.episode.publishedAt) : 0;
      const dateDifference = publishedB - publishedA;
      return dateDifference || b.episode.number - a.episode.number;
    })
    .slice(0, 3);
  return `
    <section class="hero">
      <div class="hero__copy">
        <p class="eyebrow">AUTONOMOUS AI PUBLISHING · 001</p>
        <h1 class="hero__headline">
          <span class="hero__headline-visual" aria-hidden="true">
            <span class="hero__headline-fixed">AI가</span>
            <span class="hero__headline-rotator">
              <span class="hero__headline-word" data-hero-word>만듭니다.</span>
            </span>
          </span>
          <span class="sr-only">AI가 만듭니다. AI가 생각합니다. AI가 운영합니다.</span>
        </h1>
        <p class="hero__statement">${escapeHtml(site.statement)} 사람은 시스템을 관리하고, 작품은 AI가 만듭니다.</p>
        <div class="hero__actions">
          <a class="button button--dark" href="/works/">작품 보기 <span aria-hidden="true">↗</span></a>
          <a class="button button--line" href="/process/">제작 방식</a>
        </div>
      </div>
      <a class="hero__visual" href="/comics/${primarySeries.slug}/${latestEpisode.id}/" aria-label="${escapeHtml(latestEpisode.title)} 읽기">
        <img src="${latestEpisode.pages[0].src}" width="${latestEpisode.pages[0].width}" height="${latestEpisode.pages[0].height}" alt="">
        <span class="hero__visual-index">COMIC · SERIAL ${String(latestEpisode.number).padStart(3, "0")}</span>
        <span class="hero__visual-title">${escapeHtml(primarySeries.title)}<br><strong>${escapeHtml(latestEpisode.title)}</strong></span>
      </a>
    </section>

    <section class="principles" aria-labelledby="principles-title">
      <div class="section-heading">
        <p class="eyebrow">HOW IT WORKS</p>
        <h2 id="principles-title">만들어진 과정까지<br>작품의 일부입니다.</h2>
      </div>
      <ol class="principle-list">
        <li><span>01</span><div><h3>AI가 제작합니다.</h3><p>이야기, 이미지와 영상 제작을 AI 파이프라인이 수행합니다.</p></div></li>
        <li><span>02</span><div><h3>자동으로 게시합니다.</h3><p>만화는 이곳에 저장하고 영상은 YouTube에 게시해 연결합니다.</p></div></li>
        <li><span>03</span><div><h3>사용 모델을 공개합니다.</h3><p>확인된 모델과 버전, 기록이 없는 부분을 구분해 표시합니다.</p></div></li>
      </ol>
    </section>

    <section class="current-work" aria-labelledby="current-work-title">
      <div class="section-heading section-heading--row">
        <div>
          <p class="eyebrow">CONNECTED SERIAL</p>
          <h2 id="current-work-title">현재 연결된 연재</h2>
        </div>
        <a class="text-link" href="/works/">전체 ${allSeries.length}개 연재 보기 <span aria-hidden="true">→</span></a>
      </div>
      <div class="work-grid">
        ${allSeries.map((item) => seriesFeature(item)).join("")}
      </div>
    </section>

    <section class="latest" aria-labelledby="latest-title">
      <div class="section-heading section-heading--row">
        <div>
          <p class="eyebrow">LATEST OUTPUTS</p>
          <h2 id="latest-title">최근 게시</h2>
        </div>
      </div>
      <div class="episode-grid episode-grid--three">
        ${latestThree.map((item) => episodeCard(item.series, item.episode)).join("")}
      </div>
    </section>
  `;
}

function worksPage() {
  return `
    <section class="page-intro">
      <p class="eyebrow">ALL OUTPUTS</p>
      <h1>작품</h1>
      <p>AI가 제작하고 자동으로 게시한 결과물을 등록 순서대로 보여줍니다.</p>
    </section>
    <section class="works-list" aria-labelledby="works-filter-title">
      <h2 class="sr-only" id="works-filter-title">작품 필터</h2>
      <div class="filter-tabs" role="group" aria-label="작품 종류">
        <button type="button" data-filter="all" aria-pressed="true">전체 <span>${allSeries.length}</span></button>
        <button type="button" data-filter="comic" aria-pressed="false">만화 <span>${allSeries.filter((item) => item.type === "comic").length}</span></button>
        <button type="button" data-filter="video" aria-pressed="false">영상 <span>0</span></button>
      </div>
      <div class="work-grid">
        ${allSeries.map((item) => `<article class="work-card" data-work-card data-type="${escapeHtml(item.type)}">${seriesFeature(item)}</article>`).join("")}
      </div>
      <div class="empty-state" data-filter-empty hidden>
        <p class="eyebrow">NO OUTPUT YET</p>
        <h2>아직 게시된 영상이 없습니다.</h2>
        <p>새 영상은 YouTube에 게시된 뒤 이곳에 연결됩니다.</p>
      </div>
    </section>
  `;
}

function seriesFeature(currentSeries) {
  const currentEpisodes = currentSeries.episodes;
  const currentLatest = currentEpisodes.at(-1);
  return `
    <a class="series-feature" href="/series/${currentSeries.slug}/">
      <div class="series-feature__image">
        <img src="${currentLatest.pages[0].src}" width="${currentLatest.pages[0].width}" height="${currentLatest.pages[0].height}" alt="${escapeHtml(currentSeries.title)} ${currentLatest.title} 표지" loading="lazy">
        <span>${currentEpisodes.length} EPISODES</span>
      </div>
      <div class="series-feature__body">
        <div class="meta-row"><span>만화</span><span>연재 중</span><span>AI 제작</span></div>
        <h3>${escapeHtml(currentSeries.title)}</h3>
        <p>${escapeHtml(currentSeries.summary)}</p>
        <strong>연재 보기 <span aria-hidden="true">↗</span></strong>
      </div>
    </a>
  `;
}

function modelsPage() {
  return `
    <section class="page-intro">
      <p class="eyebrow">MODEL DISCLOSURE</p>
      <h1>AI 모델</h1>
      <p>작품에 사용된 것으로 확인된 모델만 표시합니다. 기록이 없는 정보는 추측하지 않습니다.</p>
    </section>
    <section class="model-list" aria-label="사용 모델">
      ${content.models.map((model) => modelCard(model)).join("")}
      <article class="model-card model-card--unknown">
        <div class="model-card__index">?</div>
        <div>
          <p class="eyebrow">RECORD NOT AVAILABLE</p>
          <h2>일부 초기 회차 모델 기록 없음</h2>
          <p>AI 이미지 생성물임은 확인되지만 제공사와 정확한 모델을 확인할 제작 기록이 없습니다.</p>
        </div>
      </article>
    </section>
    <aside class="disclosure-note">
      <strong>표시 원칙</strong>
      <p>모델 버전이 확인되지 않으면 서비스명이나 생성 도구까지만 공개하고, 작품 품질을 모델 자체의 점수로 환산하지 않습니다.</p>
    </aside>
  `;
}

function modelCard(model) {
  return `
    <article class="model-card">
      <div class="model-card__index">AI</div>
      <div>
        <p class="eyebrow">${escapeHtml(model.provider)} · ${escapeHtml(model.roles.join(" · "))}</p>
        <h2><a href="/models/${model.id}/">${escapeHtml(model.name)}</a></h2>
        <dl>
          <div><dt>도구</dt><dd>${escapeHtml(model.tool)}</dd></div>
          <div><dt>버전</dt><dd>기록 없음</dd></div>
          <div><dt>사용 범위</dt><dd>${escapeHtml(model.episodeRange)}</dd></div>
        </dl>
      </div>
    </article>
  `;
}

function modelDetailPage(model) {
  const knownEpisodes = allSeries.flatMap((item) =>
    item.episodes
      .filter((episode) => episode.provenance?.image?.model === model.name)
      .map((episode) => ({ series: item, episode })),
  );
  return `
    <section class="page-intro page-intro--model">
      <a class="back-link" href="/models/">← AI 모델</a>
      <p class="eyebrow">${escapeHtml(model.provider)} · IMAGE GENERATION</p>
      <h1>${escapeHtml(model.name)}</h1>
      <p>${escapeHtml(model.versionNote)}</p>
    </section>
    <section class="fact-grid" aria-label="모델 정보">
      <div><span>제공사</span><strong>${escapeHtml(model.provider)}</strong></div>
      <div><span>제작 단계</span><strong>${escapeHtml(model.roles.join(", "))}</strong></div>
      <div><span>도구</span><strong>${escapeHtml(model.tool)}</strong></div>
      <div><span>확인된 범위</span><strong>${escapeHtml(model.episodeRange)}</strong></div>
    </section>
    <section class="model-works" aria-labelledby="model-works-title">
      <div class="section-heading section-heading--row">
        <div><p class="eyebrow">RECORDED OUTPUTS</p><h2 id="model-works-title">이 모델 기록이 있는 작품</h2></div>
        <span>${knownEpisodes.length}화</span>
      </div>
      <div class="episode-grid">
        ${knownEpisodes.slice().reverse().map((item) => episodeCard(item.series, item.episode)).join("")}
      </div>
    </section>
  `;
}

function processPage() {
  return `
    <section class="page-intro page-intro--process">
      <p class="eyebrow">AUTONOMOUS PIPELINE</p>
      <h1>100% AI 제작,<br>자동 게시.</h1>
      <p>AI Slop의 작품은 AI와 자동화 도구가 기획, 생성, 조립과 게시를 이어서 수행합니다.</p>
    </section>
    <section class="process-flow" aria-label="제작 과정">
      <article><span>01</span><div><p class="eyebrow">PLAN</p><h2>AI가 기획합니다.</h2><p>주제, 이야기 구조와 회차 구성을 AI 제작 파이프라인이 만듭니다.</p></div></article>
      <article><span>02</span><div><p class="eyebrow">GENERATE</p><h2>AI가 제작합니다.</h2><p>만화 이미지, 영상, 음성과 필요한 구성 요소를 생성합니다.</p></div></article>
      <article><span>03</span><div><p class="eyebrow">ASSEMBLE</p><h2>자동으로 조립합니다.</h2><p>페이지 순서, 한국어 레터링, 영상 편집과 출력 형식을 자동화 도구가 완성합니다.</p></div></article>
      <article><span>04</span><div><p class="eyebrow">PUBLISH</p><h2>자동으로 게시합니다.</h2><p>만화는 사이트 내부에 저장하고, 영상은 YouTube에 게시한 뒤 사이트에 연결합니다.</p></div></article>
    </section>
    <section class="format-split">
      <article><p class="eyebrow">COMICS</p><h2>만화</h2><p>독자용 이미지와 제작 정보를 AI Slop 내부에 저장합니다.</p></article>
      <article><p class="eyebrow">VIDEO</p><h2>영상</h2><p>영상 파일은 YouTube에 게시하고 AI Slop에는 플레이어와 제작 정보를 연결합니다.</p></article>
    </section>
    <aside class="disclosure-note">
      <strong>100% AI의 의미</strong>
      <p>작품 내용은 AI와 자동화 도구로 제작합니다. 사람은 시스템과 공개 상태를 관리하며, 확인 가능한 모델 정보와 기록의 공백을 함께 표시합니다.</p>
    </aside>
  `;
}

function seriesPage(currentSeries) {
  const currentEpisodes = currentSeries.episodes;
  const currentLatest = currentEpisodes.at(-1);
  const known = currentEpisodes.filter((episode) => episode.provenance?.image?.status === "known-provider");
  const knownRange = known.length ? `${known[0].number}–${known.at(-1).number}화` : "기록 없음";
  return `
    <section class="series-hero">
      <div class="series-hero__copy">
        <p class="eyebrow">AI COMIC · SERIAL</p>
        <h1>${escapeHtml(currentSeries.title)}</h1>
        <p>${escapeHtml(currentSeries.summary)}</p>
        <div class="meta-row meta-row--large"><span>만화</span><span>연재 중</span><span>${currentEpisodes.length}화</span></div>
        <a class="button button--dark" href="/comics/${currentSeries.slug}/${currentLatest.id}/">최신화 읽기 <span aria-hidden="true">→</span></a>
      </div>
      <div class="series-hero__image">
        <img src="${currentLatest.pages[0].src}" width="${currentLatest.pages[0].width}" height="${currentLatest.pages[0].height}" alt="${escapeHtml(currentLatest.title)} 표지">
        <span>LATEST · ${String(currentLatest.number).padStart(3, "0")}</span>
      </div>
    </section>
    <section class="series-model">
      <div><p class="eyebrow">MODEL DISCLOSURE</p><h2>제작 모델</h2></div>
      <dl>
        <div><dt>${knownRange} 이미지</dt><dd><a href="/models/openai-image-generation/">OpenAI Image Generation</a></dd></div>
        <div><dt>정확한 버전</dt><dd>기록 없음</dd></div>
        <div><dt>1–3화 이미지</dt><dd>모델 기록 없음</dd></div>
      </dl>
    </section>
    <section class="episodes" aria-labelledby="episodes-title">
      <div class="section-heading section-heading--row">
        <div><p class="eyebrow">ALL EPISODES</p><h2 id="episodes-title">전체 회차</h2></div>
        <span>최신순 · ${currentEpisodes.length}</span>
      </div>
      <div class="episode-grid">
        ${currentEpisodes.slice().reverse().map((episode) => episodeCard(currentSeries, episode)).join("")}
      </div>
    </section>
  `;
}

function episodeCard(currentSeries, episode) {
  const cover = episode.pages[0];
  const modelLabel =
    episode.provenance.image.status === "known-provider"
      ? "OpenAI Image Generation"
      : "모델 기록 없음";
  return `
    <article class="episode-card">
      <a href="/comics/${currentSeries.slug}/${episode.id}/">
        <div class="episode-card__image">
          <img src="${cover.src}" width="${cover.width}" height="${cover.height}" alt="${escapeHtml(episode.title)} 표지" loading="lazy">
          <span>EP. ${String(episode.number).padStart(3, "0")}</span>
        </div>
        <div class="episode-card__body">
          <h3>${escapeHtml(episode.shortTitle)}</h3>
          <p>${escapeHtml(episode.lead)}</p>
          <small>${escapeHtml(modelLabel)}</small>
        </div>
      </a>
    </article>
  `;
}

function readerPage(currentSeries, episode, index) {
  const currentEpisodes = currentSeries.episodes;
  const previous = currentEpisodes[index - 1];
  const next = currentEpisodes[index + 1];
  const imageDisclosure =
    episode.provenance.image.status === "known-provider"
      ? `
          <div><dt>이미지 생성</dt><dd><a href="/models/openai-image-generation/">OpenAI Image Generation</a><small>built-in image_gen · 정확한 버전 기록 없음</small></dd></div>
        `
      : `
          <div><dt>이미지 생성</dt><dd>AI 이미지 생성<small>제공사와 정확한 모델 기록 없음</small></dd></div>
        `;
  return `
    <div class="reader-progress" aria-hidden="true"><span></span></div>
    <section class="reader-intro">
      <nav class="breadcrumbs" aria-label="현재 위치">
        <a href="/works/">작품</a><span>/</span><a href="/series/${currentSeries.slug}/">${escapeHtml(currentSeries.title)}</a><span>/</span><strong>${episode.number}화</strong>
      </nav>
      <div class="reader-intro__title">
        <div>
          <p class="eyebrow">EPISODE ${String(episode.number).padStart(3, "0")} · ${episode.pageCount} PAGES</p>
          <h1>${escapeHtml(episode.shortTitle)}</h1>
          <p>${escapeHtml(episode.lead)}</p>
        </div>
        <a class="text-link" href="/series/${currentSeries.slug}/">회차 목록 <span aria-hidden="true">↗</span></a>
      </div>
      <details class="provenance">
        <summary>이 작품의 제작 정보 <span aria-hidden="true">＋</span></summary>
        <dl>
          <div><dt>기획·대본</dt><dd>AI 제작 파이프라인<small>정확한 모델 기록 없음</small></dd></div>
          ${imageDisclosure}
          <div><dt>레터링·내보내기</dt><dd>자동화된 로컬 도구<small>한국어 텍스트와 페이지 정보를 자동 합성</small></dd></div>
        </dl>
      </details>
    </section>
    <section class="comic-reader" aria-label="${escapeHtml(episode.title)} 만화 본문">
      ${episode.pages
        .map(
          (page, pageIndex) => `
            <figure>
              <img
                src="${page.src}"
                width="${page.width}"
                height="${page.height}"
                alt="${escapeHtml(page.alt)}"
                ${pageIndex < 2 ? 'loading="eager"' : 'loading="lazy"'}
                decoding="async"
                ${pageIndex === 0 ? 'fetchpriority="high"' : ""}
              >
              ${episode.presentation?.mode === "site-native-caption" ? `<figcaption class="comic-reader__caption"><span>${escapeHtml(page.caption)}</span><small>${String(page.number).padStart(2, "0")}/${String(episode.pageCount).padStart(2, "0")}</small></figcaption>` : `<figcaption class="sr-only">${episode.number}화 ${page.number}/${episode.pageCount}페이지</figcaption>`}
            </figure>
          `,
        )
        .join("")}
    </section>
    <section class="reader-end">
      <p class="eyebrow">END OF EPISODE ${String(episode.number).padStart(3, "0")}</p>
      <blockquote>“${escapeHtml(episode.closingLine)}”</blockquote>
      <nav class="reader-nav" aria-label="회차 이동">
        ${previous ? '<a href="/comics/' + currentSeries.slug + "/" + previous.id + '/"><span>이전 화</span><strong>← ' + escapeHtml(previous.shortTitle) + "</strong></a>" : "<span></span>"}
        ${next ? '<a href="/comics/' + currentSeries.slug + "/" + next.id + '/"><span>다음 화</span><strong>' + escapeHtml(next.shortTitle) + " →</strong></a>" : '<a href="/series/' + currentSeries.slug + '/"><span>최신화입니다</span><strong>전체 회차 →</strong></a>'}
      </nav>
    </section>
  `;
}

function safeJson(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeXml(value) {
  return escapeHtml(value);
}

function fingerprint(value) {
  return createHash("sha256").update(value).digest("hex").slice(0, 12);
}
