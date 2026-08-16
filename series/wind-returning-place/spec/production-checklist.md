# Wind Returning Place Production Checklist

Use this checklist when the user asks to actually make, export, inspect, site
integrate, publish, or fix an installment. For daily publish automation and
series-continuation requests, this checklist means the next numbered installment
must be produced and published when gates pass. For concept-only help, the
canon and ledger may be enough.

Do not substitute older-episode maintenance for next-episode production. Older
completed episodes may be repaired or republished only when the user explicitly
names them or when a current verification failure on those older episodes
directly blocks the new episode's site publication.

## Preflight

- Confirm the target episode slug from `source/episode-index.yaml`, defaulting
  to the next `ep-00N` under `comic.wind-returning-place`.
- Read the daily publish automation memory before selecting Work, then treat
  the DB-backed episode track as authoritative over memory or local notes.
- If a DB Work item already exists for that next slug, claim or continue it
  instead of creating a duplicate. A ready next-episode Work item takes priority
  over stale notes about older completed episodes.
- For one episode, require the isolated track
  `comic:wind-returning-place:episode:ep-00N:production` and plan key
  `comic:wind-returning-place:episode:ep-00N`. Run the plan dry-run first and
  stop if it reports any external Work update, completed/closed Work update, or
  identity mismatch.
- Read `series-canon.md` and `episode-ledger.md`.
- Read `site-publish.md` when the episode must appear on
  `web_app.wind-returning-place` or Live.
- Inspect the canonical workspace's `comic-dna.yaml`, `bible/`,
  `episode-index.yaml`, `continuity-registry.yaml`, latest
  `episodes/ep-00N/script.md`,
  `storyboard.yaml`, and episode/global QA evidence.
- Use `jhub-comic-production-feedback-loop` for DB Work, comic factory, final
  inspection, and issue follow-through.

## Suggested Factory Pattern

For episode 6 and later, the canonical comic package remains the entity source,
but the production Work track is episode-scoped and the work/evidence must name
the target episode slug:

```powershell
node scripts/comic-work-plan.mjs --id wind-returning-place --title "바람이 돌아오는 곳 6: <subtitle>" --episode-families ep-006 --profile detailed_webtoon --dry-run --json
node scripts/comic-work-plan.mjs --id wind-returning-place --title "바람이 돌아오는 곳 6: <subtitle>" --episode-families ep-006 --profile detailed_webtoon --ingest --json
go run ./cmd/jhub work drain --track comic:wind-returning-place:episode:ep-006:production --from-capture --json
```

Adjust the number and title for later installments.

## Story Acceptance

- Run `node scripts/verify-wind-story-clarity.mjs --evidence <episode-clarity-evidence.json>` before script lock and again against final captions before export.
- Every page must record a concrete event, action, reason, change, visible image evidence, and allowed caption role. Mood-only or symbol-decoding pages fail.
- Keep at least 80% of pages concrete. Allow at most three non-consecutive metaphor pages, only at an emotional turn or final page, with a visible anchor and prior concrete setup.
- The protagonist goal must be visible by page 3, the concrete problem by page 5, a character choice must change the next action, and the payoff must be visible in the art.

- 20 beats/pages unless the user changes the format or the target episode is
  explicitly matching a recorded prior exception. The 2026-07-04 local template
  3 remakes of episode 4 and episode 5 are both 20-page lyrical narration-card
  comics; the template 3 five-page reference set is style evidence only.
- One new motif that advances the series instead of repeating prior clues.
- The episode must pass the Comic Factory `series_engine_repetition_gate`:
  compare motif, clue carrier, setting rhythm, and emotional question against
  at least the last three ledger entries.
- The episode must pass the `reader_engagement_lap`: record micro-tension,
  curiosity gap, emotional turn strength, scene rhythm variation, quiet
  surprise, and a visible payoff image before script lock.
- Doyun's prior growth is preserved.
- Yunseo keeps agency if present.
- Recurring/supporting characters keep their own stance and useful friction;
  they must not appear only to explain or comfort Doyun.
- Minjae remains absent in present-day scenes.
- Ending is quiet, earned, and forward-moving.
- Korean script uses restrained narration and sparse dialogue.

## Image And Lettering Acceptance

- Runtime visual image assets should be generated through imagegen unless the
  user or DB record explicitly waives it.
- Record generated and derived assets in `asset-ledger.yaml`.
- Inventory every new or returning story-critical visual element. Register its
  stable ID/version, scope, fidelity, immutable traits, and provenance-linked
  canonical references before panel prompts. Bind every affected page and run:

```powershell
node scripts/verify-comic-continuity.mjs --workspace data/services/comic.wind-returning-place/source --episode ep-00N --require-inventory --json
```

- Never use the previous generated episode panel as the next panel's identity
  baseline. Start from the canonical `assets/continuity` package every time.
- For `structural` elements, verify silhouette, part count, proportions,
  palette, and named marks. For `exact` elements, use canonical reuse,
  compositing, or masked editing rather than reference-guided generation alone.
- Every source-art prompt must start from the Wind Visual Style Lock in
  `SKILL.md`: restrained Korean webtoon illustration, soft ink linework,
  simplified contour lines, flatter painterly color blocks, light cel-shaded
  faces and hands, and template-3 lyrical narration-card page grammar.
- Do not generate a live-action, cinematic, photo, or realistic scene first and
  then ask for it to be converted into comics. If a panel comes back
  photorealistic, reject it and regenerate from the script/storyboard text,
  character lock, page layout intent, and Wind Visual Style Lock.
- Do not use a failed photorealistic panel as a reference for the next repair
  pass unless a user/DB-backed waiver explicitly accepts the risk of smear,
  blur, and style drift.
- The series visual style is not live-action, cinematic still, DSLR photo,
  hyperreal render, or realistic portrait photography. Reject outputs that read
  as photographed actors or film production stills even when composition,
  continuity, page count, and lettering pass.
- Required source-art signals are visible soft ink linework, simplified
  webtoon-scale facial and hand detail, flatter painterly color blocks, reduced
  photographic depth/lens artifacts, and a Korean lyrical webtoon illustration
  finish.
- Generated images must not include text, fake Korean, logos, watermarks, or
  speech bubbles.
- Apply Korean captions/dialogue through local lettering only.
- Verify face, hair, clothing, camera, prop, season, and location continuity.

## Final QA

Inspect actual final artifacts, not only manifests:

- `episodes/ep-00N/exports/` and/or `releases/episodes/ep-00N/`
- final webtoon PNG
- final PDF
- final ZIP
- `exports/manifest.yaml`
- source and lettered contact sheets
- element-specific contact sheets and `qa/core-element-continuity-lap.md`
- QA reports for continuity, generated artifacts, lettering collisions,
  story-image alignment, reader comprehension, replacement-panel story
  regression, panel-count exception, post-final revision resync, readability,
  and final review
- The final visual QA must inspect both source and lettered contact sheets for
  photorealism. If the art reads as live-action, cinematic, DSLR, or
  hyperrealistic, block export/site integration/publish and rebuild or repair
  the episode before accepting it.
- After any panel replacement, deletion, insertion, or renumbering, inspect a
  focused flow sheet around the changed pages before accepting the fix.
- Run `node scripts/wind-returning-place-release-preflight.mjs --episode ep-00N
  --stage comic --json` before site asset sync. After sync, app update,
  build/verify, and isolated browser capture, run the `--stage site` gate.
  Do not sync after a failed comic-stage gate or publish after a failed
  site-stage gate.
- If the episode becomes a non-standard page count, record the explicit
  exception and verify script, storyboard, exports, site assets, stale page
  behavior, and Work evidence agree.
- After post-final repairs or republish, resync source files, exports, QA
  sheets, site assets, Work evidence, and completion summaries.
- Record active arc/series element versions and canonical asset IDs in
  `qa/next-episode-continuity-carry-forward.md` before completion.
- Verify `workspace.yaml`, `episode-index.yaml`, and DB `jhub_comic_episodes`
  all list the target episode with matching source/assets/release paths.

Run `go run ./cmd/jhub work check` after DB Work changes or production
completion.

## Site Integration

If site reflection is in scope:

- Run the site asset sync script from `site-publish.md`.
- Append the new episode to
  `data/services/web_app.wind-returning-place/source/src/WindReturningPlaceApp.tsx`.
- Run `pnpm web-app:build:source -- --slug wind-returning-place`.
- Run `pnpm web-app:verify -- --slug wind-returning-place --out C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-webapp-verify`.
- For daily publish automation, Live publication of only
  `web_app.wind-returning-place` is in scope after local gates pass. Publish,
  then verify `https://wind-returning-place.jjgo.io`.
- The publish command is the final action after the release preflight passes;
  the automation must not invoke it as a recovery attempt after a failed
  preflight. Record a DB blocker with the failing code and evidence instead.
- For non-automation requests, publish to Live only when the current user
  request explicitly asks for publication.

## Skill Memory Update

After a completed installment:

- Append an Episode N entry to `episode-ledger.md`.
- Update `series-canon.md` only for durable canon changes, not one-off plot
  details.
- If the site was updated or published, record the web app version, changed app
  files, synced asset folders, and Live verification status in the ledger entry.
- Keep these references concise enough that a future Codex can load them before
  making the next episode.
