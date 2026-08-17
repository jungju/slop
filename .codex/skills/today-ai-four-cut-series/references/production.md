# Production contract

## Visual style lock

Start every image prompt with:

> Original Korean educational webtoon illustration, warm cream paper ground,
> strong deep-navy ink contours, mustard-yellow highlights, restrained cobalt
> accents, soft cel shading, clean friendly expressions, polished editorial
> infographic mood, repeatable original character design, no generated text.

This is a visual-language adaptation of the supplied reference, not a replica.
Do not copy its title treatment, logo, characters, dialogue, math theme, brand,
or exact four-cell poster layout.

Use `assets/reference-layout.png` as the layout reference. Match its core
reading experience: one tall poster, strong title area, four numbered cells in
a 2×2 grid, and visible dialogue balloons. Do not copy its branding, characters,
math theme, or exact wording.

## Source-panel requirements

- Generate four separate text-free illustrations, one for each panel role.
- Keep Nuri and Pik on-model from `spec/continuity-registry.yaml`.
- Show the news concept through concrete props and actions. Use generic,
  non-functional interface shapes when a product UI is relevant.
- Leave room in the upper area of each panel for one speech balloon.
- Vary framing across the four pages: establishing, explanatory medium shot,
  consequence or comparison, and closing reaction or object payoff.

## Deterministic assembly

Record exact speaker/text bindings in `story/dialogue.json`, then run:

```powershell
node .codex/skills/today-ai-four-cut-series/scripts/compose-four-cut.mjs --episode <episode-dir> --input-dir <four-panel-source-dir> --out-dir <composite-dir>
```

The composer must produce one `page-01-source.png` with:

- a cream portrait poster and deep-navy outer border
- a title header and series kicker
- exactly four bordered panels in a 2×2 grid
- exactly four white speech balloons with navy outlines and visible tails
- exact Korean text typeset locally with Noto Sans KR
- panel number badges and a short source-awareness footer

Use the generated illustrations only as panel art. Never ask the image model to
spell Korean or draw the final speech balloons.

## Hard rejects

Reject source art with readable text, fake Korean, logos, trademarks used
decoratively, watermarks, or generated speech bubbles. Reject final art with
missing or illegible Korean, fewer or more than four panels, fewer or more than
four balloons, missing balloon tails, four separate reader images, or text
rendered only below the image. Also reject photorealism, live-action appearance,
deceptive screenshots, celebrity likenesses, identity drift, and any scene that
overstates the sourced claim.

## Story and metadata

- `outline.md`: exactly four concrete beats and a one-sentence uncertainty
  lock.
- `script.md`: exactly four numbered Korean balloon lines, preferably no more
  than 58 Korean characters each.
- `dialogue.json`: exact title, kicker, footer, and four speaker/text/bubble
  side/crop bindings used by the composer.
- `storyboard.yaml`: one reader page with four panel roles, visual actions,
  source claim IDs, continuity references, balloon text, and generation prompts.
- `episode.json`: accurate `lead`, `closingLine`, `publishedAt`, status, and
  known tool/provider provenance. Never guess an unrecorded model version.

Finalize the one composed source through the shared harness. Keep only
`pages/page-01.webp` as the reader asset.
