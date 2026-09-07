import { escapeHtml, safeJson } from "./html.mjs";

export function layout({
  site,
  assets,
  path,
  title,
  description,
  body,
  page,
  ogImage = "",
  structuredData,
  noIndex = false,
}) {
  const { stylesAsset, appAsset, posthogAsset } = assets;
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
    ${posthogAsset ? `<script src="/assets/${posthogAsset}" defer></script>` : ""}
    <script src="/assets/${appAsset}" defer></script>
  </head>
  <body data-page="${escapeHtml(page)}"${page === "reader" ? ' data-reader-view="fit"' : ""}>
    <a class="skip-link" href="#main">본문으로 바로가기</a>
    ${header(path)}
    <main id="main">${body}</main>
    ${footer(site)}
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
        <span class="sr-only">주요 메뉴</span>
        <span aria-hidden="true"></span><span aria-hidden="true"></span>
      </button>
      <nav class="site-nav" id="site-nav" aria-label="주요 메뉴">
        ${links
          .map(([href, label]) => {
            const active =
              path.startsWith(href) ||
              (href === "/works/" && /^\/(series|comics)\//.test(path));
            return `<a href="${href}"${active ? ' aria-current="page"' : ""}>${label}</a>`;
          })
          .join("")}
      </nav>
    </header>
  `;
}

function footer(site) {
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
