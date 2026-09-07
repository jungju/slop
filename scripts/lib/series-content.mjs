import { cp, readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

export async function loadSeriesContent(root) {
  const base = JSON.parse(
    await readFile(join(root, "content", "site.base.json"), "utf8"),
  );
  const seriesRoot = join(root, "series");
  const entries = await readdir(seriesRoot, { withFileTypes: true });
  const packages = [];

  for (const entry of entries
    .filter((item) => item.isDirectory())
    .sort(byName)) {
    const packageRoot = join(seriesRoot, entry.name);
    const definition = JSON.parse(
      await readFile(join(packageRoot, "series.json"), "utf8"),
    );
    const harness = JSON.parse(
      await readFile(join(packageRoot, "harness.json"), "utf8"),
    );
    const episodesRoot = join(packageRoot, "episodes");
    const episodeEntries = await readdir(episodesRoot, { withFileTypes: true });
    const episodes = [];

    for (const episodeEntry of episodeEntries
      .filter((item) => item.isDirectory())
      .sort(byName)) {
      const episodeRoot = join(episodesRoot, episodeEntry.name);
      const episode = JSON.parse(
        await readFile(join(episodeRoot, "episode.json"), "utf8"),
      );
      episodes.push({
        ...episode,
        seriesId: definition.id,
        seriesSlug: definition.slug,
        pages: episode.pages.map((page) => ({
          ...page,
          src: `/media/comics/${definition.slug}/${episode.id}/${page.file}`,
        })),
      });
    }

    episodes.sort((a, b) => a.number - b.number);
    packages.push({
      definition: { ...definition, episodes },
      harness,
      packageRoot,
      episodesRoot,
    });
  }

  const publishedSeries = packages
    .map(({ definition }) => ({
      ...definition,
      episodes: definition.episodes.filter(
        (episode) => episode.status !== "draft",
      ),
    }))
    .filter((definition) => definition.episodes.length > 0);
  const content = {
    ...base,
    models: updateModelRanges(base.models || [], publishedSeries),
    series: publishedSeries,
  };
  return { content, packages };
}

export async function copySeriesAssets(outDir, packages) {
  for (const item of packages) {
    for (const episode of item.definition.episodes) {
      if (episode.status === "draft") continue;
      for (const page of episode.pages) {
        const target = join(
          outDir,
          "media",
          "comics",
          item.definition.slug,
          episode.id,
          page.file,
        );
        await cp(
          join(item.episodesRoot, episode.id, "pages", page.file),
          target,
        );
      }
    }
  }
}

function updateModelRanges(models, series) {
  return models.map((model) => {
    const matches = series.flatMap((item) =>
      item.episodes.filter(
        (episode) => episode.provenance?.image?.model === model.name,
      ),
    );
    if (matches.length === 0)
      return { ...model, episodeRange: "공개 회차 없음" };
    return { ...model, episodeRange: `${matches.length}개 회차` };
  });
}

function byName(a, b) {
  return a.name.localeCompare(b.name, "en");
}
