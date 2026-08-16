import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { copySeriesAssets, loadSeriesContent } from "./lib/series-content.mjs";

test("loads and copies multiple self-contained series packages", async () => {
  const root = await mkdtemp(join(tmpdir(), "ai-slop-series-"));
  try {
    await mkdir(join(root, "content"), { recursive: true });
    await writeJson(join(root, "content", "site.base.json"), {
      site: { name: "Test" },
      models: [{ id: "model", name: "Model" }],
      videos: [],
    });
    await makeSeries(root, "alpha", "ep-001", 1);
    await makeSeries(root, "beta", "ep-001", 1);

    const { content, packages } = await loadSeriesContent(root);
    assert.equal(content.series.length, 2);
    assert.equal(content.series[0].episodes[0].src, undefined);
    assert.equal(content.series[0].episodes[0].pages[0].src, "/media/comics/alpha/ep-001/page-01.webp");
    assert.equal(content.models[0].episodeRange, "2개 회차");

    const out = join(root, "out");
    await copySeriesAssets(out, packages);
    assert.equal(await readFile(join(out, "media", "comics", "beta", "ep-001", "page-01.webp"), "utf8"), "beta");
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

async function makeSeries(root, slug, episodeId, number) {
  const packageRoot = join(root, "series", slug);
  const episodeRoot = join(packageRoot, "episodes", episodeId);
  await mkdir(join(episodeRoot, "pages"), { recursive: true });
  await writeJson(join(packageRoot, "series.json"), {
    schemaVersion: 1,
    id: slug,
    slug,
    type: "comic",
    kind: "series",
    status: "ongoing",
    title: slug,
    summary: slug,
  });
  await writeJson(join(packageRoot, "harness.json"), {
    schemaVersion: 1,
    series: slug,
    pageCount: 1,
  });
  await writeJson(join(episodeRoot, "episode.json"), {
    schemaVersion: 1,
    id: episodeId,
    number,
    title: episodeId,
    shortTitle: episodeId,
    lead: episodeId,
    closingLine: episodeId,
    pageCount: 1,
    pages: [{ number: 1, file: "page-01.webp", width: 1, height: 1, caption: episodeId, alt: episodeId }],
    provenance: { image: { model: "Model", status: "known-provider" } },
  });
  await writeFile(join(episodeRoot, "pages", "page-01.webp"), slug, "utf8");
}

async function writeJson(path, value) {
  await writeFile(path, JSON.stringify(value) + "\n", "utf8");
}
