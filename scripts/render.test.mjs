import assert from "node:assert/strict";
import test from "node:test";
import { layout } from "./templates/layout.mjs";
import { readerPage } from "./templates/reader.mjs";
import { worksPage, seriesPage } from "./templates/catalog.mjs";

const model = {
  id: "test-model",
  name: 'Test & "Model"',
  tool: "Test tool",
  version: "v2",
};
const episode = {
  id: "ep-001",
  number: 1,
  shortTitle: 'A < B "title"',
  title: "1화: A < B",
  lead: "Read & enjoy",
  closingLine: "The end",
  pageCount: 1,
  presentation: { mode: "site-native-caption" },
  provenance: {
    story: {},
    image: { ...model, model: model.name, status: "known-provider" },
  },
  pages: [
    {
      number: 1,
      src: "/page.webp",
      width: 600,
      height: 900,
      caption: "A & B",
      alt: 'A "quote"',
    },
  ],
};
const series = {
  slug: "test",
  title: "Test series",
  summary: "Summary",
  episodes: [episode],
};

test("layout escapes metadata and JSON-LD, with active works navigation on readers", () => {
  const html = layout({
    site: { name: "Test", url: "https://example.com" },
    assets: {},
    path: "/comics/test/ep-001/",
    title: 'A "title"',
    description: "<text>",
    page: "reader",
    body: "",
    structuredData: { name: "</script><img>" },
  });
  assert.ok(html.includes("A &quot;title&quot;"));
  assert.ok(html.includes("\\u003c/script>"));
  assert.match(html, /href="\/works\/" aria-current="page"/);
});

test("reader preserves captions, escaping, and actual model metadata", () => {
  const html = readerPage(series, episode, 0, [model]);
  assert.ok(html.includes("A &amp; B"));
  assert.ok(html.includes("A &quot;quote&quot;"));
  assert.ok(html.includes("Test &amp; &quot;Model&quot;"));
  assert.ok(html.includes('href="/models/test-model/"'));
  assert.ok(html.includes("Test tool"));
  assert.ok(html.includes("v2"));
  assert.ok(!html.includes("OpenAI Image Generation"));
});

test("lettered readers do not duplicate captions and unknown provenance stays unknown", () => {
  const html = readerPage(
    series,
    {
      ...episode,
      presentation: { mode: "baked-lettered" },
      provenance: { story: {}, image: { status: "not-recorded" } },
    },
    0,
    [model],
  );
  assert.ok(!html.includes('class="comic-reader__caption"'));
  assert.ok(html.includes("제공사와 정확한 모델 기록 없음"));
  assert.ok(!html.includes("/models/test-model/"));
});

test("reader links remain in the current series with first and last episode boundaries", () => {
  const second = { ...episode, id: "ep-002", number: 2 };
  const current = { ...series, episodes: [episode, second] };
  const firstHtml = readerPage(current, episode, 0, []);
  const lastHtml = readerPage(current, second, 1, []);
  assert.ok(firstHtml.includes("/comics/test/ep-002/"));
  assert.ok(!firstHtml.includes("이전 화"));
  assert.ok(lastHtml.includes("/comics/test/ep-001/"));
  assert.ok(lastHtml.includes("최신화입니다"));
});

test("series disclosure uses actual models and catalog has an accessible empty state", () => {
  assert.ok(
    seriesPage(series, [model]).includes("Test &amp; &quot;Model&quot;"),
  );
  assert.ok(worksPage({ series: [] }).includes('role="status"'));
});
