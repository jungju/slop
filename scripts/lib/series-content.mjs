import { cp, readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

export async function loadSeriesContent(root) {
  const base = JSON.parse(await readFile(join(root, "content", "site.base.json"), "utf8"));
  const seriesRoot = join(root, "series");
  const entries = await readdir(seriesRoot, { withFileTypes: true });
  const packages = [];

  for (const entry of entries.filter((item) => item.isDirectory()).sort(byName)) {
    const packageRoot = join(seriesRoot, entry.name);
    const definition = JSON.parse(await readFile(join(packageRoot, "series.json"), "utf8"));
    const harness = JSON.parse(await readFile(join(packageRoot, "harness.json"), "utf8"));
    const episodesRoot = join(packageRoot, "episodes");
    const episodeEntries = await readdir(episodesRoot, { withFileTypes: true });
    const episodes = [];

    for (const episodeEntry of episodeEntries.filter((item) => item.isDirectory()).sort(byName)) {
      const episodeRoot = join(episodesRoot, episodeEntry.name);
      const episode = JSON.parse(await readFile(join(episodeRoot, "episode.json"), "utf8"));
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

  const content = {
    ...base,
    models: updateModelRanges(base.models || [], packages),
    series: packages.map((item) => item.definition),
  };
  return { content, packages };
}

export async function copySeriesAssets(outDir, packages) {
  for (const item of packages) {
    for (const episode of item.definition.episodes) {
      await cp(
        join(item.episodesRoot, episode.id, "pages"),
        join(outDir, "media", "comics", item.definition.slug, episode.id),
        { recursive: true },
      );
    }
  }
}

function updateModelRanges(models, packages) {
  return models.map((model) => {
    const matches = packages.flatMap((item) =>
      item.definition.episodes
        .filter((episode) => episode.provenance?.image?.model === model.name)
        .map((episode) => ({ series: item.definition, episode })),
    );
    if (matches.length === 0) return model;
    const seriesIds = new Set(matches.map((item) => item.series.id));
    if (seriesIds.size === 1) {
      const numbers = matches.map((item) => item.episode.number).sort((a, b) => a - b);
      return { ...model, episodeRange: `${numbers[0]}–${numbers.at(-1)}화` };
    }
    return { ...model, episodeRange: `${matches.length}개 회차` };
  });
}

function byName(a, b) {
  return a.name.localeCompare(b.name, "en");
}
