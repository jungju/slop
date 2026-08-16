import { execFile } from "node:child_process";
import { access, mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { homedir } from "node:os";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "..");
const defaultSourceRoot = join(
  homedir(),
  "my",
  "Projects",
  "jhub",
  "data",
  "services",
  "web_app.wind-returning-place",
);
const sourceRoot = resolve(process.env.JHUB_WIND_SITE_ROOT || defaultSourceRoot);
const sourceFile = join(sourceRoot, "source", "src", "WindReturningPlaceApp.tsx");
const baseFile = join(repoRoot, "content", "site.base.json");
const contentFile = join(repoRoot, "content", "site.json");
const mediaRoot = join(
  repoRoot,
  "public",
  "media",
  "comics",
  "wind-returning-place",
);
const force = process.argv.includes("--force");
const metadataOnly = process.argv.includes("--metadata-only");
const concurrency = Number.parseInt(process.env.SLOP_IMPORT_CONCURRENCY || "4", 10);

await assertReadable(sourceFile, "기존 공개 사이트의 에피소드 데이터");
await assertReadable(baseFile, "AI Slop 기본 콘텐츠 데이터");

const source = await readFile(sourceFile, "utf8");
const sourceEpisodes = extractEpisodeArray(source);

if (sourceEpisodes.length !== 29) {
  throw new Error(
    "바람이 돌아오는 곳은 29화여야 합니다. 현재 " +
      sourceEpisodes.length +
      "화를 찾았습니다.",
  );
}

const jobs = [];
for (const episode of sourceEpisodes) {
  const episodeNumber = Number.parseInt(episode.number, 10);
  const episodeId = episode.id;
  if (!/^ep-\d{3}$/.test(episodeId) || episodeNumber < 1) {
    throw new Error("잘못된 에피소드 식별자: " + episodeId);
  }

  for (let page = 1; page <= 20; page += 1) {
    const pageId = String(page).padStart(2, "0");
    jobs.push({
      episodeId,
      page,
      source: join(
        sourceRoot,
        "assets",
        "episodes",
        episodeId,
        "panels",
        "page-" + pageId + "-lettered.png",
      ),
      target: join(mediaRoot, episodeId, "page-" + pageId + ".webp"),
    });
  }
}

for (const job of jobs) {
  await assertReadable(job.source, job.episodeId + " " + job.page + "페이지 원본");
}

if (!metadataOnly) {
  let completed = 0;
  await runPool(jobs, concurrency, async (job) => {
    await mkdir(dirname(job.target), { recursive: true });
    if (force || (await needsRefresh(job.source, job.target))) {
      await execFileAsync(
        "magick",
        [
          job.source,
          "-auto-orient",
          "-resize",
          "1080x>",
          "-strip",
          "-define",
          "webp:method=6",
          "-quality",
          "88",
          job.target,
        ],
        { windowsHide: true, maxBuffer: 1024 * 1024 * 4 },
      );
    }
    completed += 1;
    if (completed % 50 === 0 || completed === jobs.length) {
      process.stdout.write(
        "이미지 변환 " + completed + "/" + jobs.length + "\n",
      );
    }
  });
}

const pageDimensions = new Map();
for (const episode of sourceEpisodes) {
  const episodeJobs = jobs.filter((job) => job.episodeId === episode.id);
  for (const job of episodeJobs) {
    await assertReadable(job.target, job.episodeId + " " + job.page + "페이지 WebP");
  }

  const { stdout } = await execFileAsync(
    "magick",
    [
      "identify",
      "-format",
      "%f|%w|%h\n",
      ...episodeJobs.map((job) => job.target),
    ],
    { windowsHide: true, maxBuffer: 1024 * 1024 * 4 },
  );

  const rows = stdout.trim().split(/\r?\n/);
  if (rows.length !== 20) {
    throw new Error(episode.id + " 이미지 크기 확인 결과가 20개가 아닙니다.");
  }
  rows.forEach((row, index) => {
    const [, width, height] = row.split("|");
    pageDimensions.set(episode.id + ":" + (index + 1), {
      width: Number.parseInt(width, 10),
      height: Number.parseInt(height, 10),
    });
  });
}

const base = JSON.parse(await readFile(baseFile, "utf8"));
const series = base.series.find((item) => item.id === "wind-returning-place");
if (!series) {
  throw new Error("site.base.json에 wind-returning-place 시리즈가 없습니다.");
}

series.episodes = sourceEpisodes.map((episode) => {
  const number = Number.parseInt(episode.number, 10);
  const knownImageModel = number >= 4;
  return {
    id: episode.id,
    number,
    title: episode.title,
    shortTitle: episode.shortTitle,
    lead: episode.lead,
    closingLine: episode.closingLine,
    pageCount: 20,
    pages: Array.from({ length: 20 }, (_, index) => {
      const page = index + 1;
      const dimensions = pageDimensions.get(episode.id + ":" + page);
      return {
        number: page,
        src:
          "/media/comics/wind-returning-place/" +
          episode.id +
          "/page-" +
          String(page).padStart(2, "0") +
          ".webp",
        width: dimensions?.width || null,
        height: dimensions?.height || null,
        alt:
          episode.title +
          " " +
          page +
          "페이지. " +
          (episode.captions?.[index] || "AI가 제작한 만화 장면"),
      };
    }),
    provenance: {
      story: {
        stage: "기획·대본",
        model: null,
        status: "not-recorded",
        note: "AI 제작 파이프라인을 사용했으나 정확한 모델 기록은 남아 있지 않습니다.",
      },
      image: knownImageModel
        ? {
            stage: "이미지 생성",
            model: "OpenAI Image Generation",
            tool: "built-in image_gen",
            version: null,
            status: "known-provider",
            note: "제공사와 생성 도구는 확인되며 정확한 모델 버전은 기록되지 않았습니다.",
          }
        : {
            stage: "이미지 생성",
            model: null,
            tool: null,
            version: null,
            status: "not-recorded",
            note: "1–3화의 원본 제작 기록에는 제공사와 정확한 모델이 남아 있지 않습니다.",
          },
      lettering: {
        stage: "레터링·내보내기",
        model: null,
        tool: "자동화된 로컬 레터링 도구",
        status: "automated-tool",
        note: "생성 이미지에 한국어 텍스트와 페이지 정보를 자동 합성했습니다.",
      },
    },
  };
});

await writeFile(contentFile, JSON.stringify(base, null, 2) + "\n", "utf8");

const publicManifest = {
  schemaVersion: 1,
  seriesId: series.id,
  sourceKey: series.sourceKey,
  sourceSite: "https://wind-returning-place.jjgo.io",
  format: "WebP",
  quality: 88,
  maxWidth: 1080,
  episodeCount: series.episodes.length,
  pageCount: jobs.length,
  provenance: {
    episodes1To3: "AI 이미지 생성 · 모델 기록 없음",
    episodes4To29: "OpenAI Image Generation · built-in image_gen · 버전 기록 없음",
    lettering: "자동화된 로컬 레터링 도구",
  },
};
await mkdir(mediaRoot, { recursive: true });
await writeFile(
  join(mediaRoot, "manifest.json"),
  JSON.stringify(publicManifest, null, 2) + "\n",
  "utf8",
);

let totalBytes = 0;
for (const job of jobs) {
  totalBytes += (await stat(job.target)).size;
}

process.stdout.write(
  "완료: " +
    series.episodes.length +
    "화, " +
    jobs.length +
    "페이지, " +
    (totalBytes / 1024 / 1024).toFixed(2) +
    " MiB\n",
);

function extractEpisodeArray(text) {
  const marker = "const episodes: EpisodeDefinition[]";
  const markerIndex = text.indexOf(marker);
  if (markerIndex < 0) {
    throw new Error("기존 사이트 소스에서 episodes 배열을 찾지 못했습니다.");
  }
  const assignment = text.indexOf("=", markerIndex + marker.length);
  if (assignment < 0) {
    throw new Error("episodes 배열 할당을 찾지 못했습니다.");
  }
  const start = text.indexOf("[", assignment);
  if (start < 0) {
    throw new Error("episodes 배열 시작을 찾지 못했습니다.");
  }

  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let index = start; index < text.length; index += 1) {
    const character = text[index];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (character === "\\") {
        escaped = true;
      } else if (character === quote) {
        quote = null;
      }
      continue;
    }
    if (character === "'" || character === '"' || character === "`") {
      quote = character;
      continue;
    }
    if (character === "[") depth += 1;
    if (character === "]") {
      depth -= 1;
      if (depth === 0) {
        const literal = text.slice(start, index + 1);
        const value = vm.runInNewContext(
          "(" + literal + ")",
          Object.create(null),
          { timeout: 1000 },
        );
        if (!Array.isArray(value)) {
          throw new Error("episodes 데이터가 배열이 아닙니다.");
        }
        return value;
      }
    }
  }
  throw new Error("episodes 배열 끝을 찾지 못했습니다.");
}

async function assertReadable(path, label) {
  try {
    await access(path, constants.R_OK);
  } catch {
    throw new Error(label + "을(를) 읽을 수 없습니다: " + path);
  }
}

async function needsRefresh(sourcePath, targetPath) {
  try {
    const [sourceInfo, targetInfo] = await Promise.all([
      stat(sourcePath),
      stat(targetPath),
    ]);
    return sourceInfo.mtimeMs > targetInfo.mtimeMs || targetInfo.size === 0;
  } catch {
    return true;
  }
}

async function runPool(items, limit, worker) {
  let cursor = 0;
  const safeLimit = Math.max(1, Math.min(limit, 8));
  await Promise.all(
    Array.from({ length: safeLimit }, async () => {
      while (cursor < items.length) {
        const index = cursor;
        cursor += 1;
        await worker(items[index]);
      }
    }),
  );
}
