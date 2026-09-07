import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { layout as renderLayout } from "./templates/layout.mjs";
import {
  homePage,
  worksPage,
  modelsPage,
  modelDetailPage,
  processPage,
  seriesPage,
} from "./templates/catalog.mjs";
import { readerPage } from "./templates/reader.mjs";
import { escapeHtml } from "./templates/html.mjs";
import { copySeriesAssets, loadSeriesContent } from "./lib/series-content.mjs";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");
const outDir = resolve(root, "_site");

if (dirname(outDir) !== root || basename(outDir) !== "_site") {
  throw new Error("안전하지 않은 빌드 출력 경로입니다: " + outDir);
}

async function main() {
  const { content, packages } = await loadSeriesContent(root);
  const stylesSource = (
    await Promise.all(
      ["base", "catalog", "reader"].map((name) =>
        readFile(join(root, "src", "styles", name + ".css"), "utf8"),
      ),
    )
  ).join("\n");
  const appSource = (
    await Promise.all(
      ["app", "reader"].map((name) =>
        readFile(join(root, "src", name + ".js"), "utf8"),
      ),
    )
  ).join("\n");
  const posthogProjectToken =
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN?.trim() || "";
  const posthogHost =
    process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim() || "https://us.i.posthog.com";
  const posthogSource = posthogProjectToken
    ? (await readFile(join(root, "src", "posthog.js"), "utf8"))
        .replace(
          '"__POSTHOG_PROJECT_TOKEN__"',
          JSON.stringify(posthogProjectToken),
        )
        .replace('"__POSTHOG_HOST__"', JSON.stringify(posthogHost))
    : "";
  const stylesAsset = "styles." + fingerprint(stylesSource) + ".css";
  const appAsset = "app." + fingerprint(appSource) + ".js";
  const posthogAsset = posthogSource
    ? "posthog." + fingerprint(posthogSource) + ".js"
    : "";
  const site = content.site;
  const allSeries = content.series;
  const primarySeries = allSeries[0];
  if (!primarySeries) throw new Error("게시된 회차가 있는 연재가 없습니다.");
  const latestEpisode = primarySeries.episodes.at(-1);
  const allEpisodes = allSeries.flatMap((item) => item.episodes);
  const routes = [];
  const layoutOptions = {
    site,
    assets: { stylesAsset, appAsset, posthogAsset },
    ogImage: latestEpisode.pages[0].src,
  };

  await rm(outDir, { recursive: true, force: true });
  await mkdir(join(outDir, "assets"), { recursive: true });
  await cp(join(root, "public"), outDir, { recursive: true });
  await copySeriesAssets(outDir, packages);
  await writeFile(join(outDir, "assets", stylesAsset), stylesSource, "utf8");
  await writeFile(join(outDir, "assets", appAsset), appSource, "utf8");
  if (posthogAsset) {
    await writeFile(
      join(outDir, "assets", posthogAsset),
      posthogSource,
      "utf8",
    );
  }
  await cp(join(root, "CNAME"), join(outDir, "CNAME"));
  await writeFile(join(outDir, ".nojekyll"), "", "utf8");
  await writeFile(
    join(outDir, "content.json"),
    JSON.stringify(content, null, 2) + "\n",
    "utf8",
  );

  await route({
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
    body: homePage(content),
  });

  await route({
    path: "/works/",
    title: "작품",
    description: "AI가 제작하고 자동으로 게시한 만화와 영상을 봅니다.",
    page: "works",
    ogImage: latestEpisode.pages[0].src,
    body: worksPage(content),
  });

  await route({
    path: "/models/",
    title: "AI 모델",
    description: "AI Slop 작품 제작에 사용된 AI 모델과 기록 범위를 공개합니다.",
    page: "models",
    body: modelsPage(content),
  });

  for (const model of content.models) {
    await route({
      path: "/models/" + model.id + "/",
      title: model.name,
      description: model.name + "을 사용한 작품과 제작 기록입니다.",
      page: "model-detail",
      body: modelDetailPage(model, content),
    });
  }

  await route({
    path: "/process/",
    title: "제작 방식",
    description: "AI Slop의 100% AI 제작과 자동 게시 방식을 설명합니다.",
    page: "process",
    body: processPage(),
  });

  for (const currentSeries of allSeries) {
    const currentEpisodes = currentSeries.episodes;
    const currentLatest = currentEpisodes.at(-1);
    await route({
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
      body: seriesPage(currentSeries, content.models),
    });

    for (const [index, episode] of currentEpisodes.entries()) {
      const path = "/comics/" + currentSeries.slug + "/" + episode.id + "/";
      await route({
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
        body: readerPage(currentSeries, episode, index, content.models),
      });
    }
  }

  await route({
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

  await writeFile(
    join(outDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((path) => "  <url><loc>" + escapeHtml(site.url + path) + "</loc></url>").join("\n")}
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

  process.stdout.write(
    `빌드 완료: ${routes.length}개 경로, ${allSeries.length}개 연재, ${allEpisodes.length}화\n`,
  );

  async function route(options) {
    const { path, noIndex } = options;
    const target = join(outDir, path, path.endsWith("/") ? "index.html" : "");
    await mkdir(dirname(target), { recursive: true });
    await writeFile(
      target,
      renderLayout({ ...layoutOptions, ...options }),
      "utf8",
    );
    if (!noIndex) routes.push(path);
  }
}

main().catch((error) => {
  process.stderr.write(error.message + "\n");
  process.exitCode = 1;
});

function fingerprint(value) {
  return createHash("sha256").update(value).digest("hex").slice(0, 12);
}
