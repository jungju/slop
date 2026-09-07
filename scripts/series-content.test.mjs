import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { copySeriesAssets, loadSeriesContent } from "./lib/series-content.mjs";
import { verifySeries } from "./lib/validate-series.mjs";

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
    const draftRoot = join(root, "series", "alpha", "episodes", "ep-002");
    await mkdir(draftRoot);
    await writeJson(join(draftRoot, "episode.json"), {
      id: "ep-002",
      number: 2,
      status: "draft",
      pages: [],
      provenance: { image: { model: "Model" } },
    });
    await writeFile(
      join(
        root,
        "series",
        "beta",
        "episodes",
        "ep-001",
        "pages",
        "unused.webp",
      ),
      "unused",
    );

    const { content, packages } = await loadSeriesContent(root);
    assert.equal(content.series.length, 2);
    assert.equal(
      content.series[0].episodes.length,
      1,
      "drafts stay out of public content",
    );
    assert.equal(
      packages[0].definition.episodes.length,
      2,
      "the harness can still find drafts",
    );
    assert.equal(content.series[0].episodes[0].src, undefined);
    assert.equal(
      content.series[0].episodes[0].pages[0].src,
      "/media/comics/alpha/ep-001/page-01.webp",
    );
    assert.equal(content.models[0].episodeRange, "2개 회차");

    const out = join(root, "out");
    await copySeriesAssets(out, packages);
    assert.equal(
      await readFile(
        join(out, "media", "comics", "beta", "ep-001", "page-01.webp"),
        "utf8",
      ),
      "beta",
    );
    await assert.rejects(
      readFile(join(out, "media", "comics", "beta", "ep-001", "unused.webp")),
      { code: "ENOENT" },
    );
    const errors = [];
    await verifySeries(packages[0], undefined, errors);
    assert.deepEqual(
      errors,
      [],
      "default verification excludes unfinished drafts",
    );
    await verifySeries(packages[0], "ep-002", errors);
    assert.ok(
      errors.some((error) => error.includes("페이지")),
      "an explicitly selected draft must pass full validation",
    );

    await rm(
      join(
        root,
        "series",
        "beta",
        "episodes",
        "ep-001",
        "pages",
        "page-01.webp",
      ),
    );
    const missing = [];
    await verifySeries(packages[1], undefined, missing);
    assert.ok(missing.some((error) => error.includes("page-01.webp")));
    await assert.rejects(copySeriesAssets(out, packages), { code: "ENOENT" });
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
    about: slug,
    audience: "Readers",
    format: { label: "Comic", detail: "One page" },
    basis: { label: "Original", detail: "Fiction" },
    schedule: {
      label: "Daily",
      time: "05:00",
      timezone: "Asia/Seoul",
      note: "After verification",
    },
  });
  await writeJson(join(packageRoot, "harness.json"), {
    schemaVersion: 1,
    series: slug,
    pageCount: 1,
    requiredStoryFiles: [],
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
    pages: [
      {
        number: 1,
        file: "page-01.webp",
        width: 1,
        height: 1,
        caption: episodeId,
        alt: episodeId,
      },
    ],
    provenance: {
      image: { model: "Model", tool: "Test tool", status: "known-provider" },
    },
  });
  await writeFile(join(episodeRoot, "pages", "page-01.webp"), slug, "utf8");
}

test("draft-only series stay editable without creating public routes or assets", async () => {
  const root = await mkdtemp(join(tmpdir(), "ai-slop-draft-"));
  try {
    await mkdir(join(root, "content"));
    await writeJson(join(root, "content", "site.base.json"), {
      models: [{ name: "Model" }],
    });
    await makeSeries(root, "draft", "ep-001", 1);
    const path = join(
      root,
      "series",
      "draft",
      "episodes",
      "ep-001",
      "episode.json",
    );
    const episode = JSON.parse(await readFile(path, "utf8"));
    await writeJson(path, { ...episode, status: "draft", pages: [] });
    const { content, packages } = await loadSeriesContent(root);
    assert.deepEqual(content.series, []);
    assert.equal(content.models[0].episodeRange, "공개 회차 없음");
    assert.equal(packages.length, 1);
    await copySeriesAssets(join(root, "out"), packages);
    await assert.rejects(
      readFile(
        join(root, "out", "media", "comics", "draft", "ep-001", "page-01.webp"),
      ),
      { code: "ENOENT" },
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

async function writeJson(path, value) {
  await writeFile(path, JSON.stringify(value) + "\n", "utf8");
}
