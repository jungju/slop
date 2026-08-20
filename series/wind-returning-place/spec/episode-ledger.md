# Wind Returning Place Episode Ledger

Update this ledger after each completed installment so future episodes can keep
continuity without rereading every panel unless needed.

## Numbering Pattern

- Canonical comic package: `comic.wind-returning-place`.
- Unified workspace:
  `data/services/comic.wind-returning-place/source`.
- Episodes now live inside that package as `episodes/ep-001`,
  `episodes/ep-002`, and so on.
- Next default episode after episode 22: `ep-023`.
- Next default Work track: `comic:wind-returning-place:episode:ep-023:production`.
- Next default plan key: `comic:wind-returning-place:episode:ep-023`.
- Next default title pattern: `바람이 돌아오는 곳 23: <subtitle>`.
- Do not create new numbered packages such as `comic.wind-returning-place-6`
  for future installments.
- Update `source/workspace.yaml`, `source/episode-index.yaml`, and
  `jhub_comic_episodes` for every new episode.
- Site episode ids use the series order: `ep-001`, `ep-002`, `ep-003`,
  `ep-004`, and so on inside `web_app.wind-returning-place`.
- Live site target: `https://wind-returning-place.jjgo.io`.

## Episode 1

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-001`
- Title: `바람이 돌아오는 곳`
- Setting rhythm: Seoul night -> Jeju house/village/workshop -> Seoul project.
- Core object: father's film camera and unfinished film.
- Main characters: Doyun, Minjae through traces, Soondeok, Doyun's mother by
  phone.
- Story function: Doyun stops treating Jeju only as abandonment and begins to
  recover his own gaze.
- Key beats:
  - Seoul contract ends and Doyun receives his father's box.
  - Jeju begins as resentment, not nostalgia.
  - Soondeok reveals that Minjae waited and left records.
  - Doyun learns about illness and silence through his mother and recordings.
  - The last empty film frames become space for Doyun's own photos.
- Closing line: `돌아간다는 건 과거로 가는 게 아니라, 나를 다시 데려오는 일이었다.`
- Continuity status: final QA passed; no actionable findings.

## Episode 2

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-002`
- Migrated from legacy entity: `comic.wind-returning-place-2`
- Title: `바람이 돌아오는 곳 2: 귤빛 엽서`
- Subtitle: `귤빛 엽서`
- Setting rhythm: Seoul exhibition -> autumn Jeju tangerine road/storage places
  -> Seoul gallery.
- Core object: orange postcard, old tangerine-field photo, empty postcards.
- Main characters: Doyun, Yunseo, Soondeok, Minjae through photos, Yunseo's
  mother through memory.
- Story function: Doyun shifts from sorting his own past to passing memory
  forward for someone else.
- Key beats:
  - A tangerine-colored postcard arrives at Doyun's exhibition.
  - Yunseo challenges Doyun's tendency to collect Jeju as memory.
  - Yunseo's mother is revealed through the old photo and letter.
  - Yunseo names departure as choice rather than betrayal.
  - Doyun changes how he displays memory at the gallery.
- Closing line: `기억은 사람을 붙잡기 위해서가 아니라, 다시 걸어가게 하려고 남는지도 몰랐다.`
- Continuity status: final QA passed; no actionable findings.

## Episode 3

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-003`
- Migrated from legacy entity: `comic.wind-returning-place-3`
- Title: `바람이 돌아오는 곳 3: 겨울의 필름`
- Subtitle: `겨울의 필름`
- Setting rhythm: Seoul winter gallery/darkroom -> winter Jeju coast/lighthouse
  -> Seoul exhibition wall.
- Core object: old undeveloped film, blurred photos, film strips, flashlight,
  lighthouse light.
- Main characters: Doyun, Yunseo, Soondeok, child viewer, Minjae through
  unfinished film.
- Story function: Doyun accepts unclear memory as still meaningful and chooses
  to exhibit blurred light rather than only successful images.
- Key beats:
  - Doyun receives film from inside Minjae's old camera bag.
  - Most developed images are blurred light and wind.
  - Doyun and Yunseo follow the absence in the photos toward a lighthouse.
  - Doyun decides to hang failed light, not hide it.
  - A child viewer asks what is in the picture; Doyun illuminates the film
    instead of overexplaining.
- Final idea: `선명하지 않아도, 어떤 기억은 사람을 다시 앞으로 비춘다.`
- Continuity status: final QA passed; no actionable findings.

## Carry Forward After Episode 3

- Doyun has already moved from wounded son to listener and exhibitor of partial
  memory. Episode 4 should not simply make him discover another father secret
  unless the story transforms that pattern.
- Yunseo is in her Seoul life and can re-enter as collaborator, witness, or
  someone with her own work, not as someone waiting for Doyun.
- Soondeok remains a grounded Jeju witness; she can point toward places or
  memories but should not explain the whole theme.
- Minjae's record is still partial. New traces may complicate or soften him, but
  should not fully absolve him.
- The series can widen toward other people touched by images, exhibitions,
  repair, weather, labor, and place.
- At that point the web app listed episodes 1-3; episode 4 was appended to the
  same `episodes` array and asset layout rather than introduced as a separate
  site.

## Episode 4

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-004`
- Migrated from legacy entity: `comic.wind-returning-place-4`
- Title: `바람이 돌아오는 곳 4: 수선한 끈`
- Subtitle: `수선한 끈`
- Setting rhythm: Seoul gallery workroom -> Seoul camera repair counter -> Jeju repair shop/road -> Seoul gallery wall.
- Core object: worn and repaired camera strap, stitch marks, needle/thread, partial old photo.
- Main characters: Doyun, Yunseo, Soondeok, Jeju repair-shop owner, Minjae only through object/photo trace.
- Story function: Doyun accepts repair and maintenance as a living form of care instead of preserving memory untouched or solving another father secret.
- Key beats:
  - Doyun's camera strap breaks while preparing a new Seoul exhibition wall.
  - Hidden stitch marks send him from a Seoul repair counter to an old Jeju repair shop.
  - Soondeok and the repairer reveal Minjae as someone who kept things usable through quiet maintenance.
  - Yunseo leaves a deliberate gap in the Seoul gallery wall for Doyun's own choice.
  - Doyun repairs the old strap and hangs its shadow among photographs.
- Closing line or final idea: `끊어진 자리에서, 바람은 다시 돌아올 길을 배웠다.`
- Continuity status: locally remade again on 2026-07-04 with Comic Factory template 3 after the user said the existing episode 4 comic was broken. Later on 2026-07-04, Work `W260704-002` fully removed the active ep-004 source/assets/releases paths and regenerated a fresh 20-page lyrical narration-card comic from Wind Visual Style Lock text prompts, not from photoreal repair images. Current source has text-free imagegen source art, local Korean narration-card lettering, final scroll PNG, PDF, ZIP, manifest, and QA evidence under `data/services/comic.wind-returning-place/source/episodes/ep-004`.
- Site status: Live published on 2026-07-04 as `web_app.wind-returning-place`
  deployment `v20260703-200857`. The site now uses the 20-page template 3
  remake under `/a/wind-returning-place/episodes/ep-004/`; local evidence:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-webapp-verify-20260704-template3-ep004-ep005\web-app-verify-report.json`
  and
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-live-verify-20260704-template3-ep004-ep005\live-report.json`.
  Local `https://wind-returning-place.l.jjgo.io/episodes/4` was resynced on
  2026-07-04 by Work `W260704-020` from the `W260704-002` regeneration; local
  browser evidence:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-local-domain-verify-20260704\local-domain-report.json`.
- Style repair: on 2026-07-04, Work `W260703-020` repaired the local template 3
  art because the published/local contact sheets read as photorealistic /
  cinematic stills. Work `W260704-002` then replaced that repair-derived local
  source/export state with fresh imagegen comic-style panels generated from the
  Wind Visual Style Lock. Live was republished on 2026-07-05 by Work
  `W260704-618` as `web_app.wind-returning-place` deployment
  `v20260704-200441`; verification confirmed `/episodes/4` selects `ep-004`,
  loads 20 panels, and all 20 Live panel PNG hashes match the repaired local
  web-app assets. Evidence:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-live-verify-20260705-repaired\live-report.json`.

## Carry Forward After Episode 4

- Next default episode at that time was `ep-005` in
  `comic.wind-returning-place`.
- Doyun has widened from accepting incomplete memory to accepting repaired/maintained memory. Episode 5 should avoid another object that simply reveals Minjae; prefer a new outward-facing memory/work/place question.
- Yunseo is now an active Seoul exhibition collaborator with her own agency.
- Ordinary craft and maintenance labor can remain part of the series vocabulary, but episode 5 should choose a fresh motif rather than another strap/repair-shop story.
- Episode 4 is already represented on Live by the 20-page repaired
  comic-style publish `v20260704-200441`. Do not revisit episode 4 during daily
  next-episode production unless the user explicitly requests it or Live
  verification fails in a way that blocks the new episode.

## Episode 5

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-005`
- Migrated from legacy entity: `comic.wind-returning-place-5`
- Title: `바람이 돌아오는 곳 5: 고르지 않은 빛`
- Subtitle: `고르지 않은 빛`
- Setting rhythm: Seoul gallery archive -> Jeju community room/harbor -> Seoul gallery wall.
- Core object: weathered contact sheet, unprinted frame, small compact camera, blank gallery card.
- Main characters: Doyun, child Yunseo, Soondeok; Minjae remains absent in the present and is not used as a new clue.
- Story function: Doyun stops treating unchosen photos as adult failure after child Yunseo asks why a smiling, blurred picture is called bad.
- Key beats:
  - Doyun sets aside a blurred contact-sheet frame while preparing the gallery.
  - In Jeju, child Yunseo points to the rejected frame and asks why a smiling picture is bad.
  - Doyun cannot answer without sounding like an adult hiding uncertainty.
  - Yunseo uses a small camera to photograph wind, hands, and an uneven harbor moment.
  - Doyun returns to Seoul and hangs the blurred frame with one blank card, leaving the answer open.
- Closing line or final idea: `고르지 않은 빛도, 누군가에게는 돌아갈 길이 되었다.`
- Continuity status: remade on 2026-07-02 after user rejected the adult 24-year-old Yunseo direction, corrected again on 2026-07-03 to follow episode 4's 19-page multi-canvas structure, then locally remade again on 2026-07-04 with Comic Factory template 3 after the user said the existing episode 5 comic was broken. Later on 2026-07-04, Work `W260704-002` fully removed the active ep-005 source/assets/releases paths and regenerated a fresh 20-page lyrical narration-card comic from Wind Visual Style Lock text prompts, not from photoreal repair images. Current source has text-free imagegen source art, local Korean narration-card lettering, final scroll PNG, PDF, ZIP, manifest, and QA evidence under `data/services/comic.wind-returning-place/source/episodes/ep-005`.
- Site status: Live published on 2026-07-04 as `web_app.wind-returning-place`
  deployment `v20260703-200857`. The site now uses the 20-page template 3
  remake under `/a/wind-returning-place/episodes/ep-005/`; local evidence:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-webapp-verify-20260704-template3-ep004-ep005\web-app-verify-report.json`
  and
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-live-verify-20260704-template3-ep004-ep005\live-report.json`.
  Local `https://wind-returning-place.l.jjgo.io/episodes/5` was resynced on
  2026-07-04 by Work `W260704-020` from the `W260704-002` regeneration; local
  browser evidence:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-local-domain-verify-20260704\local-domain-report.json`.
- Style repair: on 2026-07-04, Work `W260703-020` repaired the local template 3
  art because the published/local contact sheets read as photorealistic /
  cinematic stills. Work `W260704-002` then replaced that repair-derived local
  source/export state with fresh imagegen comic-style panels generated from the
  Wind Visual Style Lock. Live was republished on 2026-07-05 by Work
  `W260704-618` as `web_app.wind-returning-place` deployment
  `v20260704-200441`; verification confirmed `/episodes/5` selects `ep-005`,
  loads 20 panels, and all 20 Live panel PNG hashes match the repaired local
  web-app assets. Evidence:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-live-verify-20260705-repaired\live-report.json`.

## Carry Forward After Episode 5

- Next default episode at that time was `ep-006` under `comic.wind-returning-place`.
- Doyun is increasingly a listener/facilitator rather than a solver; episode 6 should preserve that outward widening.
- Avoid immediately repeating contact sheets, rejected prints, or a child-question-about-bad-photo structure.
- Yunseo must remain a child if she appears. Do not restore the adult collaborator version.
- Episode 5 is already represented on Live by the 20-page repaired
  comic-style publish `v20260704-200441`. Do not revisit episode 5 during daily
  next-episode production unless the user explicitly requests it or Live
  verification fails in a way that blocks the new episode.

## Episode 6

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-006`
- Title: `바람이 돌아오는 곳 6: 바람의 녹음`
- Subtitle: `바람의 녹음`
- Setting rhythm: Seoul gallery archive -> Jeju community room/harbor ->
  Seoul gallery listening bench.
- Core object: old cassette tape, portable recorder, wind noise, listening bench.
- Main characters: Doyun, child Yunseo, Soondeok; Minjae remains absent in the
  present and is not used as a new clue.
- Story function: Doyun learns not to clean noisy memory into a neat answer,
  and makes a listening space where others can hear what remains through
  interference.
- Key beats:
  - Doyun finds a box of old cassette tapes in the Seoul gallery archive.
  - The recording is mostly wind, rope, water, and broken fragments.
  - Soondeok identifies the tape as village sound rather than a private secret.
  - Yunseo asks whether wind can also be a voice and later contributes a small
    Jeju stone to the listening bench.
  - Doyun returns to Seoul and leaves the tape noise in the gallery experience.
- Closing line or final idea:
  `잡음으로 남은 바람도, 누군가에게는 돌아오는 목소리였다.`
- Continuity status: completed on 2026-07-05 as a 20-page Comic Factory
  template-3 lyrical narration-card episode under the unified
  `comic.wind-returning-place` package. Source and lettered contact sheets were
  visually inspected; generated art reads as drawn Korean webtoon illustration,
  not live-action/DSLR/photoreal. Exports include final webtoon PNG, PDF, ZIP,
  manifests, source/lettered contact sheets, QA reports, and asset-ledger
  provenance.
- Site status: Live published on 2026-07-05 as `web_app.wind-returning-place`
  deployment `v20260705-031016`, deployment id `336`, storage prefix
  `web-apps/wind-returning-place/v20260705-031016`. Local verification passed:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep006-webapp-verify-20260705\web-app-verify-report.json`
  and isolated browser report:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep006-local-browser-verify-20260705\local-browser-report.json`.
  Live verification passed at
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep006-live-verify-20260705\live-report.json`:
  `/episodes/6` selects `ep-006`, the selector includes `6화 · 바람의 녹음`,
  and all 20 Live panel images load at 1055x1491.

## Carry Forward After Episode 6

- Next default episode: `ep-007` under `comic.wind-returning-place`.
- Doyun has now widened from carrying visual memory to making room for noisy,
  shared listening. Future episodes should avoid another cassette, recorder,
  or sound-cleanup structure immediately.
- Yunseo remains a child and can ask small direct questions, but she should not
  become an adult collaborator or emotional solution.
- Soondeok's useful friction should continue: she may withhold tidy
  explanations and keep memory grounded in ordinary labor/place.
- Episode 6 is represented on Live by deployment `v20260705-031016`; do not
  revisit it during daily next-episode production unless the user explicitly
  requests repair or Live verification fails in a way that blocks the site.

## Episode 7

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-007`
- Title: `바람이 돌아오는 곳 7: 빌린 벽`
- Subtitle: `빌린 벽`
- Setting rhythm: Seoul gallery/archive -> Jeju community room and borrowed
  village wall -> Seoul gallery wall.
- Core object: borrowed community wall, child-height photograph, small stone,
  blank card.
- Main characters: Doyun, child Yunseo, Soondeok; Minjae remains absent in the
  present and is not used as a new clue.
- Story function: Doyun learns that showing a place is borrowed trust, not
  ownership, and lets the community decide how memory briefly rests in public.
- Key beats:
  - Doyun prepares a Seoul wall and worries that his Jeju photographs are
    becoming too fixed.
  - In Jeju, Soondeok points him toward an ordinary wall used by neighbors for
    notices and shared memory.
  - Yunseo asks why grown-ups hang pictures too high and chooses one photo at
    child height.
  - Doyun leaves one card blank and lets people place their own small marks
    around the borrowed wall.
  - Back in Seoul, the gallery wall preserves the blank card and lower photo
    instead of translating the village into a tidy exhibition answer.
- Closing line or final idea:
  `빌린 벽은, 누군가의 기억이 잠시 기대어 다시 걸어가는 자리였다.`
- Continuity status: completed on 2026-07-06 as a 20-page Comic Factory
  template-3 lyrical narration-card episode under the unified
  `comic.wind-returning-place` package. Source and lettered contact sheets were
  visually inspected; generated art reads as drawn Korean webtoon illustration,
  not live-action/DSLR/photoreal. Exports include final webtoon PNG, PDF, ZIP,
  manifests, source/lettered contact sheets, QA reports, and asset-ledger
  provenance.
- Site status: Live published on 2026-07-06 as `web_app.wind-returning-place`
  deployment `v20260705-230708`, deployment id `340`, storage prefix
  `web-apps/wind-returning-place/v20260705-230708`. Local verification passed:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep007-webapp-verify-20260706-r2\web-app-verify-report.json`
  and isolated browser report:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep007-local-browser-verify-20260706-direct\local-browser-report.json`.
  Live verification passed at
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep007-live-verify-20260706-r2\live-report.json`:
  `/episodes/7` selects `ep-007`, the selector includes `7화 · 빌린 벽`,
  and all 20 Live panel images load.

## Carry Forward After Episode 7

- Next default episode: `ep-008` under `comic.wind-returning-place`.
- Doyun has now moved from carrying visual memory and shared listening to
  stewarding borrowed public display. Future episodes should avoid another
  borrowed wall, gallery-wall permission, child-height hanging, or blank-card
  community annotation structure immediately.
- Yunseo remains a child and can ask small direct questions, but she should not
  become an adult collaborator or emotional solution.
- Soondeok can continue to ground memory in ordinary place rules and local
  habits, but should not explain the theme directly.
- Episode 7 is represented on Live by deployment `v20260705-230708`; do not
  revisit it during daily next-episode production unless the user explicitly
  requests repair or Live verification fails in a way that blocks the site.

## Episode 8

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-008`
- Title: `바람이 돌아오는 곳 8: 접힌 표`
- Subtitle: `접힌 표`
- Setting rhythm: Seoul gallery doorway/table -> Jeju ferry terminal/harbor road -> Seoul gallery threshold.
- Core object: folded ferry ticket, torn ticket corner, child-folded paper route, doorway threshold.
- Main characters: Doyun, child Yunseo, Soondeok; Minjae remains absent in the present and is not used as a new clue.
- Story function: Doyun learns that returning can be a chosen route rather than retreat, and that creases from earlier movement do not need to be flattened away.
- Key beats:
  - Doyun hesitates at the Seoul gallery threshold with a folded ferry ticket.
  - Soondeok refuses to turn the ticket into a tidy explanation.
  - Yunseo asks why used tickets are folded and opens a paper route.
  - Doyun photographs hands and waiting rather than solving anyone's reason for leaving or returning.
  - Back in Seoul, the gallery doorway and unfolded ticket become a threshold display.
- Closing line or final idea:
  `접힌 표는, 돌아온 길도 자국을 품은 채 앞으로 열릴 수 있다고 말했다.`
- Continuity status: completed on 2026-07-07 as a 20-page Comic Factory template-3 lyrical narration-card episode under the unified `comic.wind-returning-place` package. Source and lettered contact sheets were visually inspected; generated art reads as drawn Korean webtoon illustration, not live-action/DSLR/photoreal. Page 18 was regenerated once to remove text-like ticket marks. Exports include final webtoon PNG, PDF, ZIP, manifests, source/lettered contact sheets, QA reports, and asset-ledger provenance.
- Site status: Live published on 2026-07-07 as `web_app.wind-returning-place`
  deployment `v20260706-210115`, deployment id `341`, storage prefix
  `web-apps/wind-returning-place/v20260706-210115`. Local verification passed:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep008-webapp-verify-20260707\web-app-verify-report.json`
  and isolated browser report:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep008-local-browser-verify-20260707\local-browser-report.json`.
  Live verification passed at
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep008-live-verify-20260707\live-report.json`:
  `/episodes/8` selects `ep-008`, the selector includes `8화 · 접힌 표`,
  and all 20 Live panel images load at 1055x1491.

## Carry Forward After Episode 8

- Next default episode: `ep-009` under `comic.wind-returning-place`.
- Doyun has now moved from stewarding borrowed public display to treating return as a deliberate threshold/route. Future episodes should avoid another folded ticket, ferry-terminal choice, doorway-threshold display, or paper-route structure immediately.
- Yunseo remains a child and can ask small direct questions, but she should not become an adult collaborator or emotional solution.
- Soondeok can continue to create useful friction by refusing tidy explanations, but she should not explain the theme directly.
- Episode 8 is represented on Live by deployment `v20260706-210115`; do not revisit it during daily next-episode production unless the user explicitly requests repair or Live verification fails in a way that blocks the site.

## Episode 9

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-009`
- Title: `바람이 돌아오는 곳 9: 겨울 온실`
- Subtitle: `겨울 온실`
- Setting rhythm: Seoul gallery window/plant -> Jeju winter greenhouse ->
  Seoul gallery water-marked window and low shelf.
- Core object: winter greenhouse window, water marks, small sprouts, watering
  can, paper cup seed.
- Main characters: Doyun, child Yunseo, Soondeok; Minjae remains absent in the
  present and is not used as a new clue.
- Story function: Doyun learns that unseen growth may need patient restraint
  rather than overcare, and returns the motif to the gallery without turning it
  into a tidy explanation.
- Key beats:
  - Doyun notices dry soil and water marks around a small Seoul gallery plant.
  - Soondeok points him toward the ordinary winter breathing of a Jeju
    greenhouse.
  - Yunseo asks whether something can be growing inside when it cannot be seen
    from outside, then plants an unseen seed in a paper cup.
  - Doyun photographs blurred greenhouse light and learns to leave his hands
    off instead of overwatering.
  - Back in Seoul, he leaves one water-marked gallery window and waters the
    dry pot only once.
- Closing line or final idea:
  `겨울 온실은, 보이지 않는 자람도 돌아올 시간을 품고 있다고 말했다.`
- Continuity status: completed on 2026-07-08 as a 20-page Comic Factory
  template-3 lyrical narration-card episode under the unified
  `comic.wind-returning-place` package. Source and lettered contact sheets were
  visually inspected; generated art reads as drawn Korean webtoon illustration,
  not live-action/DSLR/photoreal. Exports include final webtoon PNG, PDF, ZIP,
  manifests, source/lettered contact sheets, QA reports, and asset-ledger
  provenance.
- Site status: Live published on 2026-07-08 as `web_app.wind-returning-place`
  deployment `v20260707-204908`, deployment id `347`, storage prefix
  `web-apps/wind-returning-place/v20260707-204908`. Local verification passed:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep009-webapp-verify-20260708\web-app-verify-report.json`
  and isolated browser report:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep009-local-browser-verify-20260708\local-browser-report.json`.
  Live verification passed at
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep009-live-verify-20260708\live-report.json`:
  `/episodes/9` selects `ep-009`, the selector includes `9화 · 겨울 온실`,
  and all 20 Live panel images load at 1055x1491.

## Carry Forward After Episode 9

- Next default episode: `ep-010` under `comic.wind-returning-place`.
- Doyun has now moved from chosen return as a route/threshold to patient,
  restrained care for unseen growth. Future episodes should avoid another
  winter greenhouse, water-marked gallery window, overwatering/restraint lesson,
  paper-cup seed, or hidden-growth window structure immediately.
- Yunseo remains a child and can ask small direct questions, but she should not
  become an adult collaborator or emotional solution.
- Soondeok can continue practical friction, but she should not explain the
  theme directly or become a purely comforting guide.
- Episode 9 is represented on Live by deployment `v20260707-204908`; do not
  revisit it during daily next-episode production unless the user explicitly
  requests repair or Live verification fails in a way that blocks the site.

## Episode 10

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-010`
- Title: `바람이 돌아오는 곳 10: 남겨진 우산`
- Subtitle: `남겨진 우산`
- Setting rhythm: Seoul rainy gallery entrance -> Jeju rainy bus stop ->
  Seoul gallery threshold and waiting bench.
- Core object: left umbrella, rainy bus stop shelter, low bench, umbrella
  stand, child-height umbrella photo.
- Main characters: Doyun, child Yunseo, Soondeok; Minjae remains absent in the
  present and is not used as a new clue.
- Story function: Doyun learns that waiting can become care when it lets someone
  pass through rain rather than holding them in place.
- Key beats:
  - A plain umbrella waits at the Seoul gallery entrance longer than the rain.
  - Soondeok refuses to turn waiting into a tidy clue or possessive explanation.
  - Yunseo asks whether waiting means someone must come back.
  - A late traveler borrows the umbrella, shifting the motif from ownership to
    practical care.
  - Back in Seoul, Doyun creates a low bench and umbrella stand so visitors can
    pause before looking.
- Closing line or final idea:
  `남겨진 우산은, 기다림도 누군가를 붙드는 대신 비를 건너게 하는 마음이라고 말했다.`
- Continuity status: completed on 2026-07-09 as a 20-page Comic Factory
  template-3 lyrical narration-card episode under the unified
  `comic.wind-returning-place` package. Source and lettered contact sheets were
  visually inspected; generated art reads as drawn Korean webtoon illustration,
  not live-action/DSLR/photoreal. Replacement pages were used before export for
  Soondeok age and Yunseo child-continuity issues. Exports include final
  webtoon PNG, PDF, ZIP, manifests, source/lettered contact sheets, QA reports,
  and asset-ledger provenance.
- Site status: Live published on 2026-07-09 as `web_app.wind-returning-place`
  deployment `v20260708-210749`, deployment id `354`, storage prefix
  `web-apps/wind-returning-place/v20260708-210749`. Local verification passed:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep010-webapp-verify-20260709\web-app-verify-report.json`
  and isolated browser report:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep010-local-browser-verify-20260709\local-browser-report.json`.
  Live verification passed at
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep010-live-verify-20260709\live-report.json`:
  `/episodes/10` selects `ep-010`, the selector includes
  `10화 · 남겨진 우산`, and all 20 Live panel images load at 1055x1491.

## Carry Forward After Episode 10

- Next default episode: `ep-011` under `comic.wind-returning-place`.
- Doyun has now moved from patient care for unseen growth to non-possessive
  waiting as practical shelter. Future episodes should avoid another left
  umbrella, rainy bus stop, borrowed umbrella, low gallery waiting bench,
  umbrella-stand display, or waiting-as-care structure immediately.
- Yunseo remains a child and can ask small direct questions, but she should not
  become an adult collaborator or emotional solution.
- Soondeok can continue practical friction, especially by refusing tidy
  explanations, but should not explain the theme directly.
- Episode 10 is represented on Live by deployment `v20260708-210749`; do not
  revisit it during daily next-episode production unless the user explicitly
  requests repair or Live verification fails in a way that blocks the site.

## Episode 11

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-011`
- Title: `바람이 돌아오는 곳 11: 소금빛 손수건`
- Subtitle: `소금빛 손수건`
- Setting rhythm: Seoul gallery archive -> Jeju harbor laundry line -> Seoul gallery cloth-screen display.
- Core object: salt-stiff handkerchief, laundry line, clothespin, translucent cloth screen.
- Main characters: Doyun, child Yunseo, Soondeok; Minjae remains absent in the
  present and is not used as a new clue.
- Story function: Doyun learns that care does not have to erase every mark; a
  trace can dry honestly and still become part of what is carried forward.
- Key beats:
  - Doyun finds a salt-stiff handkerchief among Seoul gallery archive items.
  - In Jeju, Soondeok lets the cloth keep a faint salt line instead of scrubbing it spotless.
  - Yunseo asks whether being clean means nothing happened.
  - Doyun photographs the remaining line and moving laundry shadow rather than cleaning the trace away.
  - Back in Seoul, he builds a cloth-screen display that keeps the salt mark and Yunseo's clothespin visible.
- Closing line or final idea:
  `소금빛 손수건은, 지워지지 않은 자국도 누군가를 다시 마르게 하는 바람이라고 말했다.`
- Continuity status: completed on 2026-07-10 as a 20-page Comic Factory
  template-3 lyrical narration-card episode under the unified
  `comic.wind-returning-place` package. Source and lettered contact sheets were
  visually inspected; generated art reads as drawn Korean webtoon illustration,
  not live-action/DSLR/photoreal. Exports include final webtoon PNG, PDF, ZIP,
  manifests, source/lettered contact sheets, QA reports, and asset-ledger
  provenance.
- Site status: Live published on 2026-07-10 as `web_app.wind-returning-place`
  deployment `v20260709-205613`, deployment id `358`, storage prefix
  `web-apps/wind-returning-place/v20260709-205613`. Local verification passed:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep011-webapp-verify-20260710\web-app-verify-report.json`
  and isolated browser report:
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep011-local-browser-verify-20260710\local-browser-report.json`.
  Live verification passed at
  `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep011-live-verify-20260710\live-report.json`:
  `/episodes/11` selects `ep-011`, the selector includes
  `11화 · 소금빛 손수건`, and all 20 Live panel images load at 1055x1491.

## Episode 12

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-012`
- Title: `바람이 돌아오는 곳 12: 돌담의 빈틈`
- Subtitle: `돌담의 빈틈`
- Setting rhythm: Seoul gallery worktable -> windy Jeju stone-wall lane -> Seoul gallery stone-line display.
- Core object: one palm-sized gap in a volcanic stone wall and a loose porous stone.
- Main characters: Doyun, child Yunseo, Soondeok, an ordinary Jeju neighbor; Minjae remains absent in the present and provides no new clue.
- Story function: Doyun learns that making room can be an active form of care; not every visible gap needs an immediate repair.
- Key beats:
  - Doyun wants to fill a small gap in a stone display.
  - Soondeok makes him notice the wind and grass passing through the real Jeju wall.
  - Yunseo asks whether it must be blocked, then removes her own pebble when it hides the wind.
  - Doyun photographs the moving light and leaves a deliberate gap in a Seoul gallery stone line.
- Closing line: `돌담의 빈틈은, 막히지 않은 길도 오래 남을 수 있다고 말했다.`
- Continuity status: completed on 2026-07-10 as a 20-page template-3 lyrical narration-card episode under the unified comic package. All accepted source panels are fresh built-in image-generation assets with provenance; four unrelated game/mascot candidates were rejected before package selection. Final PNG, 20-page PDF, ZIP, manifest, source/lettered contact sheets, and QA reports are present.
- Site status: Live published as `web_app.wind-returning-place` deployment `v20260709-235513`. Local focused build/verify and isolated browser evidence passed. Live evidence at `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep012-live-verify-20260710\live-report.json` confirms `/episodes/12` selects `ep-012`, lists `12화 · 돌담의 빈틈`, and loads 20 panel images at `1055x1491`.

## Carry Forward After Episode 12

- Next default episode: `ep-013` under `comic.wind-returning-place`.
- Doyun has now moved from non-possessive waiting as shelter, through visible
  traces of care, into intentionally making room. Future episodes should avoid
  another volcanic stone wall, loose gap, wind-passage question, pebble-blocking
  choice, or incomplete-gallery-wall structure immediately.
- Yunseo remains a child and can ask small direct questions, but she should not
  become an adult collaborator or emotional solution.
- Soondeok can continue practical friction, especially by refusing tidy
  explanations, but should not explain the theme directly.
- Episode 11 is represented on Live by deployment `v20260709-205613`; do not
  revisit it during daily next-episode production unless the user explicitly
  requests repair or Live verification fails in a way that blocks the site.

## Episode 13

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-013`
- Title: `바람이 돌아오는 곳 13: 온기가 남는 자리`
- Subtitle: `온기가 남는 자리`
- Setting rhythm: cold Seoul gallery -> Jeju boat-repair shed -> quiet Seoul gallery return.
- Core object: a shared charcoal stove outside a repair shed, a plain kettle, and a low gallery bench with a small lamp.
- Main characters: Doyun, child Yunseo, Soondeok, anonymous passing hands; Minjae remains absent in the present.
- Story function: Doyun learns that warmth can remain available without becoming a claim on a person or a promise that they must return.
- Key beats:
  - Soondeok's photo draws Doyun to a Jeju stove kept for any cold hands.
  - Yunseo asks who the stove is waiting for, then chooses for herself when dry mittens can go home.
  - Doyun photographs anonymous sleeves and palms rather than collecting faces.
  - He makes a low warm bench in Seoul without a sign directing anyone to use it.
- Closing line: `온기가 남는 자리는, 돌아오라고 부르지 않아도 오래 열려 있었다.`
- Continuity status: completed on 2026-07-11 as a 20-page template-3 lyrical narration-card episode under the unified comic package. All accepted source panels are fresh built-in OpenAI image-generation assets with recorded provenance. The first local lettering attempt was rejected for an unresolved Korean font; final Apple SD Gothic Neo lettering was inspected in the 20-page contact sheet. Final webtoon PNG, PDF, ZIP, manifest, source/lettered contact sheets, QA reports, and asset ledger are present.
- Site status: Live published as `web_app.wind-returning-place` deployment `v20260710-210419`, deployment id `363`, storage prefix `web-apps/wind-returning-place/v20260710-210419`. Focused build/verify passed at `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep013-webapp-verify-20260711\web-app-verify-report.json`; isolated browser evidence passed at `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep013-browser-verify-20260711\browser-report.json`. Live evidence at `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep013-live-verify-20260711\live-report.json` confirms `/episodes/13` selects `ep-013`, lists `13화: 온기가 남는 자리`, and loads all 20 panel images without failures.

## Carry Forward After Episode 13

- Next default episode: `ep-014` under `comic.wind-returning-place`.
- Doyun now understands warmth as an available but non-possessive condition. Avoid immediately repeating shared charcoal stoves, repair-shed doorways, anonymous-hand photo series, drying-mittens departures, low warm benches, or leaving a gallery lamp for a passerby.
- Yunseo remains a child with a short, concrete question and her own small decision; she is not an adult collaborator or Doyun's solution.
- Soondeok should continue to offer practical friction rather than a tidy moral explanation.

## Episode 14

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-014`
- Title: `바람이 돌아오는 곳 14: 열린 서랍`
- Subtitle: `열린 서랍`
- Setting rhythm: cold Seoul archive -> rainy Jeju harbor house -> quiet Seoul gallery return.
- Core object: worn brass key tag, unlocked shared wooden drawer, flashlight, rope, gloves.
- Main characters: Doyun, child Yunseo, Soondeok, an ordinary delivery rider; Minjae remains absent in the present.
- Story function: Doyun moves from keeping a useful object safe to leaving practical access open without counting who uses it.
- Key beats:
  - Doyun tries to close the harbor drawer so nothing will be lost.
  - Yunseo asks who the flashlight belongs to; a rider borrows it without ceremony.
  - Soondeok returns the key tag to shared supplies, while Yunseo retrieves her own dried hood.
  - Doyun creates an unclaimed gallery drawer and photographs a visitor's use from a respectful distance.
- Closing line: `열린 서랍은, 돌아올 사람을 세지 않아도 다음 손을 맞을 수 있었다.`
- Continuity status: completed on 2026-07-12 as a 20-page Comic Factory template-3 lyrical narration-card episode under the unified comic package. All 20 reader-facing source pages are fresh built-in OpenAI image generation with recorded provenance. Local Korean captions use NanumGothic after the Apple SD Gothic Neo binding failed and was rejected. Final PNG, 20-page PDF, ZIP, manifest, source/lettered contact sheets, QA reports, and unified package paths are present.
- Site status: Live published on 2026-07-12 as `web_app.wind-returning-place` deployment `v20260711-210153`, deployment id `364`, storage prefix `web-apps/wind-returning-place/v20260711-210153`. Focused build/verify passed at `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep014-webapp-verify\web-app-verify-report.json`. Isolated and Live browser evidence at `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep014-browser-verify\browser-report.json` confirms `/episodes/14` selects `ep-014`, lists `14화: 열린 서랍`, and loads all 20 panel images at desktop/tablet/mobile without failures or horizontal overflow.

## Carry Forward After Episode 14

- Next default episode: `ep-015` under `comic.wind-returning-place`.
- Doyun now understands care as practical access without possession. Avoid immediately repeating key tags, shared drawers, borrowed flashlights, wet-hood retrieval, open-supply cabinets, or gallery-drawer displays.
- Yunseo remains a child with one short, concrete question and her own small decision; she is not an adult collaborator or Doyun's solution.
- Soondeok should keep her practical friction and avoid becoming a tidy moral voice.

## Episode 15

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-015`
- Title: `바람이 돌아오는 곳 15: 남겨 둔 의자`
- Subtitle: `남겨 둔 의자`
- Setting rhythm: Seoul gallery question -> Jeju harbor waiting room -> Seoul gallery practical return.
- Core object: a simple worn wooden waiting-room chair and a blank explanation card.
- Main characters: Doyun, child Yunseo, Soondeok, a delivery worker, and a Seoul visitor; Minjae remains absent in the present.
- Story function: Doyun learns that an empty place can remain practically available without being labeled for, owned by, or promised to one person.
- Key beats:
  - Doyun tries to attach an explanation card; Soondeok removes it.
  - Yunseo rests, notices the delivery worker, and yields the seat by her own choice.
  - Doyun photographs the chair's use rather than collecting faces.
  - He repairs an unlabeled Seoul chair, where a visitor later rests during rain.
- Closing line: `빈자리는, 다음 사람을 위해 남겨 둘 수 있었다.`
- Continuity status: completed on 2026-07-13 as a 20-page template-3 episode. All source art is built-in OpenAI image generation with provenance; two prop-drift candidates were rejected. A fixed 180px lower caption strip passed 22-node browser fit with zero overflow. Final PNG, PDF, ZIP, manifest, editable lettering evidence, 20 source/lettered pages, and contact sheets are present.
- Core-element migration: `W260713-013` registers `prop.wooden-chair.001@v1` as a series-scoped structural element using the accepted repaired page-12 source as the dedicated canonical baseline. The element-specific contact sheet documents pre-contract ep-015 shape drift as historical migration evidence; no published art changed. Enforcement begins with the next generated or repaired appearance, which must use the canonical asset rather than an earlier panel.
- Site status: initially published as `v20260712-235007`, then repaired and republished on 2026-07-13 as `v20260713-012707`. The repair removes all speech balloons/tails from template-3 caption-strip pages, restores exactly one narration card per page, regenerates page 12 with clearly child-girl Yunseo identity, and archives the rejected prior page. Local verifier: `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep015-repair-webapp-verify\web-app-verify-report.json`. Isolated evidence: `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep015-repair-isolated\browser-report.json`. Live evidence: `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep015-repair-live\live-report.json`; desktop/tablet/mobile select ep-015 and load all 20 panels without failures or horizontal overflow. Live page-12 SHA-256 matches the corrected local asset.

## Carry Forward After Episode 15

- Next default episode: `ep-016` under `comic.wind-returning-place`.
- Avoid immediately repeating public waiting-room chairs, blank chair labels, voluntary seat handoffs, shoe-tying visitors, gallery rest chairs, or empty-seat-as-availability structures.
- Keep Yunseo a child with her own small decision, Soondeok practically resistant, and Minjae absent in the present.

## Append Template

When a new installment is complete, append:

```markdown
## Episode N

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-00N`
- Migrated from legacy entity: blank for new unified episodes, or legacy key
  only when migrating old packages
- Title: `바람이 돌아오는 곳 N: <subtitle>`
- Subtitle: `<subtitle>`
- Setting rhythm: ...
- Core object: ...
- Main characters: ...
- Story function: ...
- Key beats:
  - ...
- Closing line or final idea: ...
- Continuity status: ...
- Site status: local integrated / Live published / blocked, with version or
  reason
```

## Episode 16

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-016`
- Title: `바람이 돌아오는 곳 16: 돌아가는 쟁반`
- Subtitle: `돌아가는 쟁반`
- Setting rhythm: Seoul gallery scratch discovery -> Jeju harbor restaurant circulation -> Seoul gallery return loop.
- Core object: a worn blue enamel harbor serving tray with navy rim, one pale-metal front-left chip, and three center scratches.
- Main characters: Doyun, child Yunseo, Soondeok; Minjae remains absent in the present.
- Story function: Doyun learns that a cared-for object can keep serving people rather than becoming a preserved claim.
- Key beats:
  - Doyun tries to protect a scratched tray as an exhibit object.
  - Soondeok keeps bowls moving through the harbor meal; Yunseo finds where the tray should return and acts on it.
  - Doyun brings the practice back to Seoul as a visible return-tray loop rather than a display.
- Closing line: `돌아가는 쟁반은, 누군가의 것이 되지 않아도 다음 손으로 갈 수 있었다.`
- Continuity status: completed on 2026-07-14 as a 20-page template-3 lyrical narration-card episode. The canonical tray model sheet, five built-in OpenAI image-generation source batches, 20 final lettered pages, final scroll PNG, PDF, ZIP, manifest, contact sheets, QA evidence, and 20/20 layout manifests are recorded in the unified package.
- Site status: Live published as `web_app.wind-returning-place` version `v20260713-232118`, RustFS prefix `web-apps/wind-returning-place/v20260713-232118`. Focused build/verify passed; isolated and Live evidence at `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep016-browser-audit\browser-report.json` and `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-returning-place-ep016-live\live-report.json` confirms `/episodes/16` selects episode 16 and all 20 panels load without failed episode assets or horizontal overflow at desktop/tablet/mobile.

## Carry Forward After Episode 16

- Next default episode: `ep-017` under `comic.wind-returning-place`.
- Avoid immediately repeating scratched blue enamel trays, bowl-carrying loops, return-tray stations, gallery display-versus-use debates, or a child locating a return point.
- Keep Yunseo a child with an independent concrete action, Soondeok practically resistant, Doyun observant rather than rescuing, and Minjae absent in the present.

## Episode 17

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-017`
- Title: `바람이 돌아오는 곳 17: 바람을 거르는 망`
- Subtitle: `바람을 거르는 망`
- Setting rhythm: Seoul worktable discovery -> Jeju harbor garden repair -> Seoul shared-use workroom.
- Core object: a frayed green windbreak mesh that remains useful while filtering wind, light, and debris.
- Main characters: Doyun, child Yunseo, Soondeok, a Seoul visitor; Minjae remains absent in the present.
- Story function: Doyun leaves the working mesh in Jeju and makes a separate useful screen in Seoul instead of turning the original into an exhibit.
- Key beats:
  - Doyun finds the mesh among photographs and asks whether it can still be used.
  - Soondeok and Yunseo redirect his attention from collecting the object to repairing its work.
  - Doyun carries only a spare piece back to Seoul and leaves the screen open for another person's use.
- Closing line: `막지 않아도, 지켜 줄 수 있는 바람이 있었다.`
- Continuity status: completed on 2026-07-15 as a 20-page template-3 lyrical narration-card episode. Story clarity passed with 20 pages and a 0.95 concrete ratio; continuity passed with 20 green-wind-net bindings. Final imagegen source art, lettered pages, PNG/PDF/ZIP, manifest, contact sheets, and provenance are recorded.
- Site status: Live published as `web_app.wind-returning-place` version `v20260715-ep017`, RustFS prefix `web-apps/wind-returning-place/v20260715-ep017`. Isolated and Live browser evidence confirms ep-017 selection and 20/20 panel loads with no errors.
- Work safety: `W260715-074` records the Live gate. `W260715-071` remains an immutable stale-output audit blocker and must not be amended or reused for ep-018.

## Carry Forward After Episode 17

- Next default episode: `ep-018` under `comic.wind-returning-place`.
- Next default Work track: `comic:wind-returning-place:episode:ep-018:production`.
- Next default plan key: `comic:wind-returning-place:episode:ep-018`.
- Avoid immediately repeating windbreak meshes, filtering-as-care language, repair-at-the-garden beats, or open-window screen payoffs.
- Keep Yunseo a child with an independent concrete action, Soondeok practically resistant, Doyun observant rather than rescuing, and Minjae absent in the present.

## Episode 18

- Canonical comic: `comic.wind-returning-place`
- Episode slug: `ep-018`
- Title: `바람이 돌아오는 곳 18: 바람을 맞춘 창`
- Subtitle: `바람을 맞춘 창`
- Setting rhythm: Seoul workroom discovery -> Jeju window adjustment and repair -> Seoul shared-use workroom.
- Core object: a worn brass window stay with three adjustment notches and one dark scratch beside the middle notch.
- Main characters: Doyun, child Yunseo, Soondeok, a Seoul visitor; Minjae remains absent in the present.
- Story function: Doyun learns that useful openness is a shared, revisable setting rather than a fixed position he chooses for everyone.
- Key beats:
  - Doyun considers removing and preserving the worn stay.
  - Soondeok adjusts it to the work and wind of the day.
  - Yunseo independently chooses the notch that keeps her map usable.
  - Doyun repairs the stay, leaves it working, and later accepts a visitor's adjustment in Seoul.
- Closing line: `열린 창과 움직이는 종이 사이에서, 누구도 혼자 바람을 정하지 않는 방이 되었다.`
- Continuity status: completed as a 20-page template-3 episode with imagegen-provenanced source art, local Korean narration cards, story clarity 0.95, 20/20 `prop.window-stay.001@v1` bindings, final PNG/PDF/ZIP/manifest, and a 95/100 final review. Stale ep-001-named source, lettering, and final duplicates were moved to the `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep018-stale-*20260720` archives; the active ep-018 page sets contain only the canonical 20+20 files.
- Site status: Live published on 2026-07-20 as `web_app.wind-returning-place` version `v20260719-235355`, deployment id `371`, storage prefix `web-apps/wind-returning-place/v20260719-235355`. Isolated and Live desktop/tablet/mobile checks select ep-018 and load 20/20 panels with no failed assets, horizontal overflow, console errors, or axe color-contrast violations. Evidence: `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep018-isolated\browser-report.json` and `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep018-live\browser-report.json`.

## Carry Forward After Episode 18

- Next default episode: `ep-019` on `comic:wind-returning-place:episode:ep-019:production` with plan key `comic:wind-returning-place:episode:ep-019`.
- Avoid immediately repeating brass window stays, three-notch adjustment, map-paper wind tests, window repair, or a shared-window Seoul payoff.
- Keep Yunseo a child with an independent concrete action, Soondeok practically resistant, Doyun observant rather than controlling, and Minjae absent in the present.

## Episode 19 — 한 칸을 비운 줄

- Canonical episode: `comic.wind-returning-place` / `ep-019`, 20 template-3 pages.
- Story motif: a shared cream drying line and cobalt-blue boundary clothespin. Doyun moves from filling all available capacity with his own photographs to removing redundant prints and leaving a usable span for another person. Yunseo independently discovers the spacing failure and creates the boundary; Soondeok supplies practical friction; Minjae remains absent in the present.
- Art/provenance: 20 fresh text-free reader-facing pages plus `prop.blue-clothespin-line.001@v1` canonical model sheet were generated through built-in OpenAI imagegen. Final artifact SHA-256: `2be50b2feb20b607e5bff26449b1a6baf045acb3e0f2a4789693a034b18df4a7`.
- QA: story clarity passes at 0.95 concrete ratio; continuity passes 18 bound pages; Comical-JS emits 20 lower caption cards, zero speech balloons, fit score 10, and no overflow/outside-panel failures. Comic-stage and site-stage release preflights pass.
- Site status: Live published 2026-07-21 as `web_app.wind-returning-place` version `v20260721-080236`, deployment `375`, prefix `web-apps/wind-returning-place/v20260721-080236`. Isolated and Live desktop/tablet/mobile checks select ep-019 and load 20/20 panels with no failed assets, browser errors, horizontal overflow, or color-contrast violations. Evidence: `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep019-isolated\browser-report.json` and `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep019-live\browser-report.json`.
- Work: `comic:wind-returning-place:episode:ep-019:production`, plan key `comic:wind-returning-place:episode:ep-019`, 72 done/0 open. Next default target: `ep-020` on `comic:wind-returning-place:episode:ep-020:production`.

## Episode 20 — 낮아진 손잡이

- Canonical episode: `comic.wind-returning-place` / `ep-020`, 20 template-3 pages.
- Story motif: paired high and lower aged-brass door handles. Yunseo measures and marks her own reachable height, Soondeok adds the wet-glove constraint, and Doyun installs and later transfers the access change without claiming the idea or holding the door for the child. Minjae remains absent in the present.
- Art/provenance: one canonical `prop.low-brass-door-handle.001@v1` model sheet and 20 text-free reader-facing source pages were generated through built-in OpenAI imagegen. Final PNG SHA-256: `db4827f6d7316943f251049671dc7c76e77f628b1eb1e671f979b77bdb827d2c`.
- QA: story clarity passes at 0.95 concrete ratio; continuity passes 20/20 bindings; Comical-JS emits 20 fixed lower caption cards, fit score 10, and no overflow/outside-panel failures. Final PNG/PDF/ZIP/manifest, editable lettering evidence, source/lettered contact sheets, and QA are synchronized. Final review: 94/100.
- Site status: Live published 2026-07-22 as `web_app.wind-returning-place` version `v20260722-010535`, deployment `376`, prefix `web-apps/wind-returning-place/v20260722-010535`. Isolated and Live desktop/tablet/mobile checks select ep-020 and load 20/20 panels with no failed assets, browser errors, horizontal overflow, or color-contrast violations. Evidence: `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep020-isolated\browser-report.json` and `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep020-live\browser-report.json`.
- Work: `comic:wind-returning-place:episode:ep-020:production`, plan key `comic:wind-returning-place:episode:ep-020`, 72 done/0 open. Next default target: `ep-021` on `comic:wind-returning-place:episode:ep-021:production`.
- Episode: ep-021 / `바람이 돌아오는 곳 21: 펴 둔 걸이`
- Story/canon: A shared folding raincoat hook turns Doyun's preference for a tidy closed passage into an available-use practice. Yunseo independently opens and positions the hook; Soondeok adds the wet-coat load constraint; Minjae remains absent in the present.
- Artifacts: exactly 20 built-in OpenAI imagegen text-free source pages, 20 fixed lower caption-strip lettered pages, final webtoon PNG, PDF, ZIP, manifest, editable Comical-JS evidence, contact sheets, story clarity (0.95), continuity (20/20), and provenance. Final PNG SHA-256: `0636d69ecfcf79827df295e755402611f8680d0136267e47adc2541c13e793fd`.
- Work: `comic:wind-returning-place:episode:ep-021:production`, plan key `comic:wind-returning-place:episode:ep-021`; all 72 items and track are done.
- Site status: Live published 2026-07-24 as `web_app.wind-returning-place` version `v20260723-202443`, deployment `377`, prefix `web-apps/wind-returning-place/v20260723-202443`. Isolated and Live desktop/tablet/mobile checks select ep-021 and load 20/20 panels with no failed assets, browser errors, horizontal overflow, or contrast violations. Evidence: `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep021-isolated\browser-report.json` and `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep021-live\browser-report.json`.
- Next default: unified `ep-022` on `comic:wind-returning-place:episode:ep-022:production`, plan key `comic:wind-returning-place:episode:ep-022`.

## Episode 22 — 잡을 수 있는 선

- Canonical episode: `comic.wind-returning-place` / `ep-022`, 20 template-3 pages.
- Story motif: a removable blue-and-cream guide rope with a red stitched hand loop. Doyun changes a too-high fixed line after Yunseo chooses her own reachable grip and Soondeok load-tests the anchors; the final line offers support without deciding another person's route. Minjae remains absent in the present.
- Art/provenance: one canonical rope model sheet and 20 text-free reader-facing source pages were generated through built-in OpenAI imagegen. Final PNG SHA-256: `611cd707043a6a1523a120592272d1d7d6bfe633d22520f430c15e7e3a6e7b63`.
- QA: story clarity passes with 20 pages and a 0.95 concrete ratio; continuity passes 20/20 `prop.removable-guide-rope.001@v1` bindings. Exactly 20 source and 20 lettered pages, final PNG/PDF/ZIP/manifest, editable lettering evidence, contact sheets, and provenance pass both comic-stage and site-stage release preflights. The 40 stale ep-001 compatibility duplicates were preserved under `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep022-stale-20260726`.
- Work: `W260724-073` resolved the release preflight blocker. Track `comic:wind-returning-place:episode:ep-022:production` and plan key `comic:wind-returning-place:episode:ep-022` are done with 73/73 items complete.
- Site status: Live published 2026-07-26 as `web_app.wind-returning-place` version `v20260725-200723`, deployment `378`, prefix `web-apps/wind-returning-place/v20260725-200723`. Isolated and Live desktop/tablet/mobile checks select ep-022 and load 20/20 panels with no failed assets, browser errors, horizontal overflow, or color-contrast violations. Evidence: `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep022-isolated\browser-report.json` and `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep022-live\browser-report.json`.
- Next default: unified `ep-023` on `comic:wind-returning-place:episode:ep-023:production`, plan key `comic:wind-returning-place:episode:ep-023`.

## Episode 23 — 뒤집을 수 있는 시간

- Canonical episode: `comic.wind-returning-place` / `ep-023`, 20 template-3 pages.
- Story motif: a reversible aged-brass timer with cobalt-blue sand and a movable one-minute ring. Doyun starts the timer too early, Yunseo stops the rushed process and later chooses and starts her own interval, and Soondeok insists that time serve the worker. Minjae remains absent in the present.
- Art/provenance: one canonical `prop.reversible-sand-timer.001@v1` model sheet and 20 text-free reader-facing source pages were generated through built-in OpenAI imagegen. Final PNG SHA-256: `d84a6c1b63d5b41d4fa5523146b9fc93c6b232e076adb5a55560cd64db1b42c7`.
- QA: story clarity passes at 0.95 concrete ratio; continuity passes 20/20 bindings; Comical-JS emits 20 fixed lower caption cards with fit score 10 and no overflow/outside-panel failures. Comic-stage and site-stage preflights pass. The 40 migration compatibility duplicates are recoverably preserved under `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep023-stale-20260727`.
- Work: `W260726-116` is the terminal completion Work. Track `comic:wind-returning-place:episode:ep-023:production` and plan key `comic:wind-returning-place:episode:ep-023` are done with 72/72 items complete.
- Site status: Live published 2026-07-27 as `web_app.wind-returning-place` version `v20260726-203004`, deployment `379`, prefix `web-apps/wind-returning-place/v20260726-203004`. Isolated and Live desktop/tablet/mobile checks select ep-023 and load 20/20 panels with no failed assets, browser errors, horizontal overflow, or color-contrast violations. Evidence: `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep023-isolated\browser-report.json` and `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep023-live\browser-report.json`.
- Next default: unified `ep-024` on `comic:wind-returning-place:episode:ep-024:production`, plan key `comic:wind-returning-place:episode:ep-024`.

## Episode 24 — 물이 머무는 받침

- Canonical episode: `comic.wind-returning-place` / `ep-024`, 20 template-3 pages.
- Story motif: a shallow ivory crackle-glazed ceramic plant saucer with a cobalt-blue inner waterline and one drainage notch. Doyun tries to clear retained water too early; Yunseo stops him, chooses the safe threshold, checks the plant, and empties the remainder herself; Soondeok distinguishes useful waiting from stagnation; Minjae remains absent.
- Art/provenance: one canonical `prop.ceramic-plant-saucer.001@v1` model sheet and 20 text-free reader-facing source pages were generated through built-in OpenAI imagegen. Final PNG SHA-256: `fa0334872826a68fc971753e53fd3f9235a45bdb2991ddad378eb160d1dd0d7d`.
- QA: story clarity passes at 0.95 concrete ratio; continuity passes 20/20; Comical-JS emits 20 fixed lower narration cards with fit score 10 and no overflow/outside-panel failures. Final PNG/PDF/ZIP/manifest, editable lettering evidence, contact sheets, QA, and provenance pass comic-stage and site-stage preflights. Final review: 95/100.
- Work: track `comic:wind-returning-place:episode:ep-024:production`, plan key `comic:wind-returning-place:episode:ep-024`, 73 done/0 open. Live publication Work: `W260727-111`. The 40 migration compatibility duplicates are preserved under `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep024-stale-20260728`.
- Site status: Live published 2026-07-28 as `web_app.wind-returning-place` version `v20260727-203013`, deployment `380`, prefix `web-apps/wind-returning-place/v20260727-203013`. Isolated and Live desktop/tablet/mobile checks select ep-024 and load 20/20 panels with no failed assets, browser errors, horizontal overflow, or contrast violations. Evidence: `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep024-isolated\browser-report.json` and `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep024-live\browser-report.json`.
- Next default: unified `ep-025` on `comic:wind-returning-place:episode:ep-025:production`, plan key `comic:wind-returning-place:episode:ep-025`.

## Episode 25 — 돌려 맞춘 빛

- Canonical episode: `comic.wind-returning-place` / `ep-025`, 20 template-3 pages.
- Story motif: an adjustable blue clamp lamp with a brass wing nut. Doyun's fixed overhead light hides wet-print detail in glare; Yunseo stops his intervention, moves the clamp, and chooses different angles for different surfaces; Soondeok supplies the practical wet-versus-matte test. In Seoul, two visitors independently choose different lamp angles while Doyun leaves their settings alone. Minjae remains absent in the present.
- Art/provenance: one canonical `prop.adjustable-clamp-lamp.001@v1` model sheet and 20 text-free reader-facing source pages were generated through built-in OpenAI imagegen. Local Comical-JS produced 20 fixed lower Korean narration cards. Final PNG SHA-256: `feee38120da5a18b5f5fdbeb6f5761f7306ae82d85acc1a7e5be233af0480f11`.
- QA: story clarity passes at 0.95; continuity passes 20/20 lamp bindings; exactly 20 unique 845x845 source pages and 20 unique 845x1055 lettered pages are present. Final 845x21100 PNG, 20-page PDF, ZIP, manifest, element/source/lettered contact sheets, replacement regression, phase evidence, and provenance pass comic-stage and site-stage preflights.
- Work safety: `W260811-001` fixes persisted-plan release validation and makes `already_unified` comic migration filesystem-idempotent; `W260811-003` is the durable corrective QA trail. The 55 hash-verified ep-001 migration copies formerly under ep-025 were recoverably preserved at `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep025-migration-duplicates-20260811-0855`. Existing populated tracks can no longer use a successful planner replay to bypass stored contract drift, and all 72 comic planner items, including `episode_family`, are contract-checked.
- Site status: Live published 2026-08-11 as only `web_app.wind-returning-place`, version `v20260811-002410`, deployment `381`, prefix `web-apps/wind-returning-place/v20260811-002410`, artifact SHA-256 `1042828e2dc3d7b564886b2a18e54d47dc62fe62b0b91f5e609ba2662d224013`, 1,040 files. Work: `W260811-002`. Isolated and Live desktop/tablet/mobile checks select ep-025 and load 20/20 panels plus all 40 source/lettered asset probes with no failed requests, console errors, horizontal overflow, or color-contrast violations. Evidence: `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep025-isolated\browser-report.json` and `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep025-live\browser-report.json`. The target web app's Umami integration was disabled after its external script endpoint consistently timed out and violated the zero-browser-error gate; no analytics service or unrelated service was changed.
- Next default: unified `ep-026` on `comic:wind-returning-place:episode:ep-026:production`, plan key `comic:wind-returning-place:episode:ep-026`. Carry forward active series element `prop.wooden-chair.001@v1`; avoid immediately repeating task lamps, glare tests, wet-versus-matte comparisons, adjustable joints, lighting-angle selection, or parallel gallery workstations.

## Episode 27 — 끝나고 쓰는 빗자루

- Canonical episode: `comic.wind-returning-place` / `ep-027`, 20 template-3 pages.
- Story motif: a child-reachable cobalt-handled bench brush and cream enamel dustpan. Doyun learns not to erase work before its maker decides it is finished; Yunseo declares her own chalk task complete and cleans it herself. Minjae remains absent in the present.
- Art/provenance: one canonical `prop.low-bench-brush-set.001@v1` model sheet and 20 text-free reader-facing source pages were generated through built-in OpenAI imagegen. Local Comical-JS produced 20 fixed lower Korean narration-card pages. Final PNG SHA-256: `beadade93688ed0fae481177791c0f247e7bd7c6556e81188e5cb7b1675be224`.
- QA: story clarity passes at 0.95 concrete ratio; continuity passes 24 bindings; final PNG/PDF/ZIP/manifest, editable lettering evidence, contact sheets, QA, provenance, web build/verify, isolated evidence, and site-stage release preflight all pass.
- Work: `W260812-001..W260812-072`; track `comic:wind-returning-place:episode:ep-027:production` and plan key `comic:wind-returning-place:episode:ep-027`, 72 done/0 open.
- Site status: Live published 2026-08-13 as only `web_app.wind-returning-place`, artifact `v20260812-204548`, deployment `383`, prefix `web-apps/wind-returning-place/v20260812-204548`. Live desktop/tablet/mobile checks select ep-027 and load 20/20 panels plus all source/lettered probes with no failed requests, browser errors, horizontal overflow, or contrast violations. Evidence: `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep027-live\browser-report.json`.
- Next default: unified `ep-028` on `comic:wind-returning-place:episode:ep-028:production`, plan key `comic:wind-returning-place:episode:ep-028`. Carry forward Yunseo's authority to finish her own task; avoid immediately repeating premature cleanup, sweeping, low-hook installation, or visitor self-service.

## Episode 28 — 옮겨 놓는 칸

- Canonical episode: `comic.wind-returning-place` / `ep-028`, 20 template-3 pages.
- Story motif: a cream sorting tray with brass grooves and exactly three movable cobalt dividers. Doyun's equal fixed compartments bend a long print; Yunseo chooses and moves the dividers to fit the actual materials, while Soondeok supplies the practical constraint. Minjae remains absent in the present.
- Art/provenance: one canonical `prop.removable-divider-sorting-tray.001@v1` model sheet and exactly 20 text-free reader-facing source pages were generated through built-in OpenAI imagegen. Local Comical-JS produced 20 fixed lower Korean narration-card pages. Final hashes: PNG `6D59D499E96AFC2BA0096BB80EA116572670353B7ADF70B6CE80694E43FD1EFE`; PDF `93C8645369BD8750385A37E4701474442602308EABEBD8FDD3F457B2240438DB`; ZIP `878ECF3D45D435647C693A3CBA20B56437FD89D88B9E29537269AB277ADAE014`.
- QA: story clarity passes at 0.95; continuity passes 19 bindings; exact 20 source, 20 lettered, and 20 site pages; no stale pages; final artifacts, editable lettering evidence, contact sheets, provenance, web build/verify, isolated desktop/tablet/mobile browser evidence, and both release preflight stages pass.
- Work: `W260813-007..W260813-078`; track `comic:wind-returning-place:episode:ep-028:production` and plan key `comic:wind-returning-place:episode:ep-028`, 72 done/0 open.
- Site status: Live published as only `web_app.wind-returning-place`, version `v20260813-204602`, deployment `384`, prefix `web-apps/wind-returning-place/v20260813-204602`, artifact SHA-256 `1be44c5db917b2a8a25f07dd63d792357475bbbdf461daba0b4106d6969ea534`, 1,162 files. The original publish appeared to be a no-op because deployment persistence completed after the first inspection; no retry was issued. Live desktop/tablet/mobile checks on 2026-08-15 select ep-028 and load 20/20 panels plus all source/lettered probes with no failed requests, browser errors, horizontal overflow, or contrast violations. Evidence: `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep028-live-20260815\browser-report.json` (SHA-256 `02D4F8E2563EA4BC1FDBA447255DFFD6E450A99E94FAA4A96FA92A1605597BF9`). Release recovery Work: `W260814-001`.
- Next default: unified `ep-029` on `comic:wind-returning-place:episode:ep-029:production`, plan key `comic:wind-returning-place:episode:ep-029`. Avoid immediately repeating equal-bin sorting, bent long prints, movable dividers, brass grooves, or compartment-transfer payoffs.

## Episode 29 — 멈출 수 있는 부채

- Canonical episode: `comic.wind-returning-place` / `ep-029`, 20 template-3 pages.
- Story motif: a plain cobalt folding fan, `prop.paced-folding-fan.001@v1`. Doyun learns that helping does not authorize him to set another person's pace; Yunseo stops the fan, inspects each wet print, and chooses when to continue, while Soondeok grounds the lesson in curled paper edges. Minjae remains absent in the present.
- Art/provenance: one canonical folding-fan model sheet and exactly 20 text-free reader-facing source pages were generated through built-in OpenAI imagegen. Local Comical-JS produced 20 fixed lower Korean narration-card pages. Final hashes: PNG `c8195da7d1ae100646507bbe3be0740575965d498a52d7112dfd7f3ead94059d`; PDF `1059306bfe4453a7f58fa8d3f84f7b184d4d90e13f70f254e8755ad7ae0a9bea`; ZIP `59996fc9350b5a3d70a3cd3df2ef3f484942f5a33f897c0808a5d8ed2f0b9ea2`.
- QA: story clarity passes at 0.95; continuity passes 18 registered elements and 35 ep-029 bindings; exact 20 source, 20 lettered, and 20 site pages; no stale pages. Final artifacts, editable lettering evidence, contact sheets, imagegen provenance, focused web build/verify, isolated desktop/tablet/mobile evidence, and both release-preflight stages pass.
- Work: `W260815-001..W260815-072`; track `comic:wind-returning-place:episode:ep-029:production` and plan key `comic:wind-returning-place:episode:ep-029`, 72 done/0 open.
- Site status: Live published as only `web_app.wind-returning-place`, version `v20260815-211538`, deployment `385`, prefix `web-apps/wind-returning-place/v20260815-211538`, artifact SHA-256 `11f295e8c4a08ce12f795fb70149e52eee4acaaba5ba7b8dbfd9e04f91239fbe`, 1,202 files. Live desktop/tablet/mobile checks select ep-029 and load 20/20 panels plus all 40 source/lettered probes with no failed requests, browser errors, horizontal overflow, or contrast violations. Evidence: `C:\Users\jeong\my\Projects\jhub_archive\tmp\wind-ep029-live\browser-report.json` (SHA-256 `f0a7836968f1c92b0ff98ada48ab03cbf09366c39af9aec317eb8c160fc65d2c`).
- Next default: unified `ep-030` on `comic:wind-returning-place:episode:ep-030:production`, plan key `comic:wind-returning-place:episode:ep-030`. Carry forward Yunseo's authority to stop help that begins setting another person's pace; avoid immediately repeating hand fans, forced drying, electric fans, staggered stop times, counting beats, or a visitor payoff based on mismatched work speed.

## Episode 30 — 내가 푸는 묶음

- Canonical episode: `wind-returning-place` / `ep-030`, exactly 20 site-native-caption pages.
- Story motif: a muted cobalt-blue washed-canvas photo wrap with a flat cream cord and one broad quick-release pull loop, `prop.quick-release-photo-wrap.001@v1`. Doyun's tight double knot prevents Yunseo from revising her own five-photo sequence; she refuses scissors, loosens the bundle, reorders the photographs, makes and load-tests a knot she can release herself, and opens it alone at home. Soondeok supplies the practical knot, and Minjae remains absent in the present.
- Art/provenance: exactly 20 unique text-free reader-facing pages generated with built-in OpenAI imagegen and finalized by the shared series harness as repository WebP assets. Korean text is rendered only as site-native captions. Story and image provenance are recorded in `episode.json`.
- QA: story clarity is 20/20 concrete pages; continuity binds the three canonical characters and `prop.quick-release-photo-wrap.001@v1`; source and reader page counts, decode checks, captions, metadata, isolated desktop/mobile browser checks, repository check, Pages deployment, and Live verification must pass before publication is claimed.
- Next default: unified `ep-031`. Carry forward Yunseo's authority to reopen and revise her own handed-off work; avoid immediately repeating photo bundles, cut cords, quick-release knots, broad pull loops, scissors, or self-opening handoff payoffs.

## Episode 31 — 남겨 둔 흠집

- Canonical episode: `wind-returning-place` / `ep-031`, exactly 20 site-native-caption pages.
- Story motif: a palm-sized oval cobalt wooden work-pause token with a cream edge and low aged-brass tabletop slot, `prop.work-pause-token.001@v1`. Doyun assumes a handed-off pencil box should be fully refinished, but Yunseo stops the irreversible sanding, chooses only the loose hinge repair, stops an extra oil finish, tests the lid herself, and keeps her own cobalt crescent scuff. Soondeok supplies the practical pause rule, and Minjae remains absent in the present.
- Art/provenance: exactly 20 unique accepted text-free reader pages generated with built-in OpenAI imagegen and finalized by the shared series harness as 20 unique repository WebP assets. Six failed identity, wardrobe, prop-evidence, or composition candidates were replaced before acceptance. Korean text is rendered only as site-native captions, with story, image, and lettering provenance recorded in `episode.json`.
- QA: story clarity is 20/20 concrete pages; continuity binds the three canonical characters and `prop.work-pause-token.001@v1`; source and reader page counts are 20/20 with unique hashes. Repository verification, full `npm run check`, `git diff --check`, and isolated desktop 1440x1000 and mobile 390x844 browser checks pass with 20/20 loaded images, 20 captions, no failed images, no horizontal or figure overflow, no mobile caption overflow, and zero console errors.
- Next default: unified `ep-032`. Carry forward the owner's authority to narrow or revise the scope after handoff; avoid immediately repeating wooden pencil boxes, loose brass hinges, blue crescent scuffs, sandpaper or oil, upright/flat work tokens, tabletop slots, or repair-scope payoffs.
