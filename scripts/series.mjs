import { execFile } from "node:child_process";
import {
  access,
  mkdir,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, promisify } from "node:util";
import { loadSeriesContent } from "./lib/series-content.mjs";

import { verifySeries } from "./lib/validate-series.mjs";

const execFileAsync = promisify(execFile);
const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptDir, "..");
async function main() {
  const {
    positionals: [command = "list", slug, episodeId],
    values: options,
  } = parseArgs({
    allowPositionals: true,
    options: {
      title: { type: "string" },
      lead: { type: "string" },
      source: { type: "string" },
      force: { type: "boolean" },
    },
  });
  const { packages } = await loadSeriesContent(root);

  if (command === "list") {
    for (const item of packages) {
      process.stdout.write(
        `${item.definition.slug}\t${item.definition.episodes.length}화\t${item.definition.title}\n`,
      );
    }
  } else if (command === "next") {
    const item = findSeries(slug);
    process.stdout.write(nextEpisodeId(item) + "\n");
  } else if (command === "verify") {
    const selected = slug ? [findSeries(slug)] : packages;
    const errors = [];
    for (const item of selected) await verifySeries(item, episodeId, errors);
    if (errors.length)
      throw new Error("연재 검증 실패\n- " + errors.join("\n- "));
    const checked = selected
      .flatMap((item) => item.definition.episodes)
      .filter((episode) =>
        episodeId ? episode.id === episodeId : episode.status !== "draft",
      );
    process.stdout.write(
      `연재 검증 통과: ${selected.length}개 작품, ${checked.length}화\n`,
    );
  } else if (command === "scaffold") {
    const item = findSeries(slug);
    const title = options.title;
    if (!title) throw new Error("scaffold에는 --title이 필요합니다.");
    const id = nextEpisodeId(item);
    const number = Number.parseInt(id.slice(3), 10);
    const episodeRoot = join(item.episodesRoot, id);
    await mkdir(join(episodeRoot, "story"), { recursive: true });
    await writeJson(join(episodeRoot, "episode.json"), {
      schemaVersion: 1,
      id,
      number,
      title: `${number}화: ${title}`,
      shortTitle: title,
      lead: options.lead || "",
      closingLine: "",
      publishedAt: null,
      status: "draft",
      pageCount: item.harness.pageCount,
      presentation: { mode: item.harness.presentation.newEpisodes },
      pages: [],
      provenance: {
        story: { stage: "기획·대본", model: null, status: "not-recorded" },
        image: {
          stage: "이미지 생성",
          model: item.harness.sourceArt.model,
          tool: item.harness.sourceArt.tool,
          version: null,
          status: "known-provider",
        },
        lettering: letteringProvenance(item.harness),
      },
    });
    await writeFile(
      join(episodeRoot, "story", "outline.md"),
      `# ${item.definition.title} ${number}: ${title}\n\n`,
      "utf8",
    );
    await writeFile(
      join(episodeRoot, "story", "script.md"),
      `# ${item.definition.title} ${number}: ${title}\n\n`,
      "utf8",
    );
    await writeFile(
      join(episodeRoot, "story", "storyboard.yaml"),
      `version: 1\nepisode: ${id}\npages: []\n`,
      "utf8",
    );
    process.stdout.write(`${id} 초안 생성 완료\n`);
  } else if (command === "finalize") {
    const item = findSeries(slug);
    if (!episodeId || !/^ep-\d{3}$/.test(episodeId))
      throw new Error("finalize에는 ep-NNN이 필요합니다.");
    const source = options.source ? resolve(options.source) : "";
    if (!source)
      throw new Error("finalize에는 --source <원본 이미지 폴더>가 필요합니다.");
    await finalizeEpisode(item, episodeId, source, options.force === true);
  } else {
    throw new Error(`알 수 없는 명령: ${command}`);
  }

  function findSeries(value) {
    const item = packages.find(
      (candidate) => candidate.definition.slug === value,
    );
    if (!item) throw new Error(`연재를 찾을 수 없습니다: ${value || "(없음)"}`);
    return item;
  }
}

main().catch((error) => {
  process.stderr.write(error.message + "\n");
  process.exitCode = 1;
});

function nextEpisodeId(item) {
  const latest = item.definition.episodes.at(-1)?.number || 0;
  return `ep-${String(latest + 1).padStart(3, "0")}`;
}

async function finalizeEpisode(item, id, sourceRoot, force) {
  const episodeRoot = join(item.episodesRoot, id);
  const episodePath = join(episodeRoot, "episode.json");
  const episode = JSON.parse(await readFile(episodePath, "utf8"));
  if (episode.status === "published" && !force)
    throw new Error(
      `${id}은 이미 게시 상태입니다. 다시 만들려면 --force를 사용하세요.`,
    );
  const captions = parseNumberedLines(
    await readFile(join(episodeRoot, "story", "script.md"), "utf8"),
  );
  const storyLineCount = item.harness.storyLineCount || item.harness.pageCount;
  if (captions.length !== storyLineCount)
    throw new Error(
      `script.md는 정확히 ${storyLineCount}개의 번호 문장이 필요합니다.`,
    );
  if (
    storyLineCount !== item.harness.pageCount &&
    item.harness.pageCount !== 1
  ) {
    throw new Error(
      "storyLineCount가 pageCount와 다를 때는 한 페이지 합성 형식만 지원합니다.",
    );
  }
  if (!episode.lead || !episode.closingLine)
    throw new Error("episode.json의 lead와 closingLine을 먼저 작성하세요.");
  const targetRoot = join(episodeRoot, "pages");
  await mkdir(targetRoot, { recursive: true });
  const pages = [];
  for (let number = 1; number <= item.harness.pageCount; number += 1) {
    const idPart = String(number).padStart(2, "0");
    const source = await firstExisting([
      join(sourceRoot, `page-${idPart}-source.png`),
      join(sourceRoot, `page-${idPart}.png`),
      join(sourceRoot, `page-${idPart}.webp`),
    ]);
    if (!source) throw new Error(`${number}페이지 원본을 찾을 수 없습니다.`);
    const file = `page-${idPart}.webp`;
    const target = join(targetRoot, file);
    await execFileAsync(
      "magick",
      [
        source,
        "-auto-orient",
        "-resize",
        `${item.harness.readerAsset.maxWidth}x>`,
        "-strip",
        "-define",
        "webp:method=6",
        "-quality",
        String(item.harness.readerAsset.quality),
        target,
      ],
      { windowsHide: true },
    );
    const { stdout } = await execFileAsync(
      "magick",
      ["identify", "-format", "%w|%h", target],
      { windowsHide: true },
    );
    const [width, height] = stdout.trim().split("|").map(Number);
    const caption =
      item.harness.pageCount === storyLineCount
        ? captions[number - 1]
        : captions.join(" ");
    pages.push({
      number,
      file,
      width,
      height,
      caption,
      alt: `${episode.title} ${number}페이지. ${caption}`,
    });
  }
  await cleanupExtraReaderPages(targetRoot, item.harness.pageCount);
  episode.pages = pages;
  episode.pageCount = pages.length;
  episode.status = "published";
  episode.publishedAt ||= new Date().toISOString();
  episode.presentation = { mode: item.harness.presentation.newEpisodes };
  episode.provenance.lettering = letteringProvenance(item.harness);
  await writeJson(episodePath, episode);
  process.stdout.write(
    `${item.definition.slug}/${id} 최종화 완료: ${pages.length}페이지\n`,
  );
}

function parseNumberedLines(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.match(/^\s*\d+\.\s+(.+?)\s*$/)?.[1] || "")
    .filter(Boolean);
}

function letteringProvenance(harness) {
  if (harness.lettering) return { ...harness.lettering };
  if (harness.presentation.newEpisodes === "baked-lettered") {
    return {
      stage: "이미지 내 레터링",
      model: null,
      tool: "deterministic local compositor",
      status: "automated-tool",
    };
  }
  return {
    stage: "웹 레터링",
    model: null,
    tool: "AI Slop site-native captions",
    status: "automated-tool",
  };
}

async function firstExisting(paths) {
  for (const path of paths) {
    try {
      await access(path);
      return path;
    } catch {}
  }
  return null;
}

async function cleanupExtraReaderPages(targetRoot, pageCount) {
  for (const file of await readdir(targetRoot)) {
    const match = file.match(/^page-(\d{2})\.webp$/);
    if (match && Number.parseInt(match[1], 10) > pageCount) {
      await rm(join(targetRoot, file));
    }
  }
}

async function writeJson(path, value) {
  await writeFile(path, JSON.stringify(value, null, 2) + "\n", "utf8");
}
