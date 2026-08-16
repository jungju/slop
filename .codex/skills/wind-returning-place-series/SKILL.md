---
name: wind-returning-place-series
description: Continue, revise, audit, or publish the Korean AI comic series "바람이 돌아오는 곳" inside the AI Slop monorepo. Use for new episodes, story canon, continuity, visual style, episode packages, reader assets, GitHub Pages publication, or the authorized daily serial automation. Treat this repository as the canonical series and publishing home; do not update the retired JHub web app.
---

# Wind Returning Place Series

Keep the complete serialized work in this repository. Use one episode folder,
one shared series harness, and one site build. Do not create a separate app for
the series.

## Required reading

Before story or production work, read:

1. `series/wind-returning-place/series.json`
2. `series/wind-returning-place/harness.json`
3. `series/wind-returning-place/spec/series-canon.md`
4. `series/wind-returning-place/spec/episode-ledger.md`
5. `series/wind-returning-place/spec/continuity-registry.yaml`
6. `series/wind-returning-place/spec/story-clarity-contract.yaml`
7. The latest episode's `episode.json`, `story/outline.md`, `story/script.md`,
   and `story/storyboard.yaml`
8. `references/production.md` when creating or revising art
9. `references/publish.md` when publishing or when the daily automation runs

## Repository contract

- Treat `series/wind-returning-place` as the source of truth.
- Keep story, specifications, prompts, harness configuration, episode metadata,
  and final reader WebP pages in the episode package.
- Do not read or update `web_app.wind-returning-place`.
- Do not create `comic.wind-returning-place-N` packages or another public site.
- Do not add work-specific code. Improve the shared `scripts/series.mjs` harness
  only when a series cannot fit the common contract.
- Keep accepted final reader assets. Do not commit rejected image candidates,
  temporary renders, caches, or generated build output.

## Continue the series

1. Run `npm run series -- verify wind-returning-place`.
2. Run `npm run series -- next wind-returning-place` and use that exact ID.
3. Run `npm run series -- scaffold wind-returning-place --title "<subtitle>"`.
4. Continue the emotional state and continuity from the current canon and
   ledger. Do not repeat the latest episode's motif or payoff.
5. Write a concrete 20-beat `story/outline.md` and 20 numbered lines in
   `story/script.md`.
6. Record prompts and page bindings in `story/storyboard.yaml`. Lead every
   image prompt with the Wind visual-style lock from `references/production.md`.
7. Generate exactly 20 text-free source images. Reject generated text, logos,
   watermarks, empty speech bubbles, photorealism, identity drift, or repeated
   compositions.
8. Complete `episode.json`: `lead`, `closingLine`, story/image provenance, and
   the confirmed model/tool information.
9. Run `npm run series -- finalize wind-returning-place ep-NNN --source <dir>`.
   The shared harness converts the accepted art to repository WebP pages and
   uses the numbered script lines as site-native Korean captions.
10. Run `npm run series -- verify wind-returning-place ep-NNN` and
    `npm run check`.
11. Append the episode and next-episode carry-forward to
    `spec/episode-ledger.md`. Update `spec/series-canon.md` only for durable
    canon changes.

## Publish

Publish only after every local gate passes. The current user request and the
`wind-returning-place-daily-publish` automation authorize committing and
publishing this series through `jungju/slop` only. Follow
`references/publish.md`; verify the exact Live route and all page assets before
claiming success.

If any generation, validation, GitHub, Pages, or Live gate fails, stop without
claiming publication. Preserve the episode draft and record the exact failing
command and evidence in the automation memory.
