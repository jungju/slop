import { access, stat } from "node:fs/promises";
import { basename, join } from "node:path";

export async function verifySeries(item, onlyEpisode, errors) {
  const { definition, harness } = item;
  const assert = (condition, message) => {
    if (!condition) errors.push(`${definition.slug}: ${message}`);
  };
  assert(
    harness.series === definition.id,
    "하네스의 series가 일치하지 않습니다.",
  );
  assert(harness.pageCount > 0, "하네스에 pageCount가 없습니다.");
  for (const field of ["about", "audience"])
    assert(definition[field], `${field} 정보가 없습니다.`);
  for (const field of ["format", "basis"])
    assert(
      definition[field]?.label && definition[field]?.detail,
      `${field} 정보가 없습니다.`,
    );
  assert(
    ["label", "time", "timezone", "note"].every(
      (key) => definition.schedule?.[key],
    ),
    "연재 일정 정보가 없습니다.",
  );
  for (const file of harness.requiredSpecFiles || []) {
    try {
      await access(join(item.packageRoot, "spec", file));
    } catch {
      errors.push(`${definition.slug}/spec/${file}이 없습니다.`);
    }
  }
  const episodes = onlyEpisode
    ? item.definition.episodes.filter((episode) => episode.id === onlyEpisode)
    : item.definition.episodes.filter((episode) => episode.status !== "draft");
  if (onlyEpisode && episodes.length !== 1)
    errors.push(`${item.definition.slug}/${onlyEpisode} 회차가 없습니다.`);
  for (let index = 0; index < item.definition.episodes.length; index += 1) {
    const episode = item.definition.episodes[index];
    if (episode.number !== index + 1)
      errors.push(
        `${item.definition.slug} 회차 번호가 연속적이지 않습니다: ${episode.id}`,
      );
  }
  for (const episode of episodes) {
    assert(
      episode.pageCount === harness.pageCount,
      `${episode.id} 페이지 수가 하네스와 다릅니다.`,
    );
    if (episode.pages.length !== episode.pageCount)
      errors.push(
        `${episode.id} 페이지 메타데이터가 ${episode.pageCount}개가 아닙니다.`,
      );
    if (!episode.lead || !episode.closingLine)
      errors.push(`${episode.id} 소개 또는 마지막 문장이 없습니다.`);
    const image = episode.provenance?.image;
    assert(
      image?.status === "not-recorded"
        ? !image.model
        : image?.model && image?.tool,
      `${episode.id} 이미지 모델 기록이 불완전합니다.`,
    );
    if (item.harness.newsSources?.required) {
      const minimum = item.harness.newsSources.minimum || 1;
      if (!episode.news?.summary)
        errors.push(`${episode.id} 공개 뉴스 요약이 없습니다.`);
      if (!Array.isArray(episode.sources) || episode.sources.length < minimum) {
        errors.push(`${episode.id} 공개 출처가 ${minimum}개 이상 필요합니다.`);
      } else {
        for (const source of episode.sources) {
          if (
            !(
              source.label &&
              source.title &&
              source.publisher &&
              source.publishedAt &&
              /^https:\/\//.test(source.url || "")
            )
          ) {
            errors.push(`${episode.id} 공개 출처 메타데이터가 불완전합니다.`);
          }
        }
      }
    }
    const requiredStoryFiles = item.harness.requiredStoryFiles || [
      "outline.md",
      "script.md",
      "storyboard.yaml",
    ];
    for (const storyFile of requiredStoryFiles) {
      try {
        await access(join(item.episodesRoot, episode.id, "story", storyFile));
      } catch {
        errors.push(`${episode.id}/story/${storyFile}이 없습니다.`);
      }
    }
    for (const [index, page] of episode.pages.entries()) {
      assert(
        page.number === index + 1,
        `${episode.id} 페이지 번호가 연속적이지 않습니다.`,
      );
      assert(
        /^page-\d{2}\.webp$/.test(page.file),
        `${episode.id} 독자용 파일명이 올바르지 않습니다: ${page.file}`,
      );
      const path = join(
        item.episodesRoot,
        episode.id,
        "pages",
        basename(page.file),
      );
      try {
        const info = await stat(path);
        if (!info.isFile() || info.size === 0)
          errors.push(`${episode.id}/${page.file}이 비어 있습니다.`);
      } catch {
        errors.push(`${episode.id}/${page.file}이 없습니다.`);
      }
      if (!(page.width > 0 && page.height > 0 && page.caption && page.alt))
        errors.push(`${episode.id}/${page.file} 메타데이터가 불완전합니다.`);
    }
  }
}
