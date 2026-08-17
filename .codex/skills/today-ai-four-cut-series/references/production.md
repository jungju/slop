# Production contract

## Visual style lock

Start every image prompt with:

> Original Korean educational webtoon illustration, warm cream paper ground,
> strong deep-navy ink contours, mustard-yellow highlights, restrained cobalt
> accents, soft cel shading, clean friendly expressions, polished editorial
> infographic mood, repeatable original character design, exact Korean title
> and dialogue integrated cleanly inside the generated illustration.

This is a visual-language adaptation of the supplied reference, not a replica.
Do not copy its title treatment, logo, characters, dialogue, math theme, brand,
or exact four-cell poster layout.

Use `assets/reference-layout.png` as the layout reference. Match its core
reading experience: one tall poster, strong title area, four numbered cells in
a 2×2 grid, and visible dialogue balloons. Do not copy its branding, characters,
math theme, or exact wording.

## Complete poster generation

- Generate one complete portrait poster in a single built-in ImageGen call.
- Keep Nuri and Pik on-model from `spec/continuity-registry.yaml`.
- Show the news concept through concrete props and actions. Use generic,
  non-functional interface shapes when a product UI is relevant.
- Make the image model draw the outer frame, header ribbon, exact Korean title,
  2×2 panel borders, four numbered badges, exact Korean footer, and exactly four
  large white speech balloons with deep-navy outlines, visible tails, and exact
  Korean dialogue.
- Point each generated tail toward the intended speaker: Nuri, Pik, Nuri, Pik.
- Vary framing across the four cells: establishing, explanatory medium shot,
  consequence or comparison, and closing reaction or object payoff.
- Put the exact verbatim strings from `story/dialogue.json` in the generation
  prompt. Do not shorten, paraphrase, translate, or improvise copy.
- Generate no extra text, fake Korean, pseudo-text, labels, logos, or
  watermarks anywhere in the poster.
- Inspect the result at full resolution. Compare the header, title, four digits,
  four balloon strings, and footer character by character. Retry the built-in
  image-generation edit until every string is exact.
- Keep only the fully correct generated source at
  `episodes/ep-NNN/source-art/page-01-source.png`.

## Hard rejects

Reject source art with any typo, omitted character, paraphrased dialogue, fake
Korean, extra text, logos, trademarks used decoratively, watermarks, fewer or
more than four panels, fewer or more than four image-generated balloons, or
missing balloon tails. Reject any workflow that draws or repairs text or
balloon geometry in Pillow, ImageMagick, SVG, CSS, canvas, or site markup.
Reject final art with four separate reader images or text rendered only below
the image. Also reject photorealism, live-action appearance, deceptive
screenshots, celebrity likenesses, identity drift, and any scene that overstates
the sourced claim.

## Story and metadata

- `outline.md`: exactly four concrete beats and a one-sentence uncertainty
  lock.
- `script.md`: exactly four numbered Korean balloon lines, preferably no more
  than 58 Korean characters each.
- `dialogue.json`: exact kicker, title, footer, panel digits, speakers, and
  four verbatim Korean dialogue strings used in the image-generation prompt and
  character-by-character QA.
- `storyboard.yaml`: one reader page with four panel roles, visual actions,
  source claim IDs, continuity references, balloon text, and generation prompts.
- `episode.json`: accurate `lead`, `closingLine`, `publishedAt`, status, and
  known tool/provider provenance. Never guess an unrecorded model version.

Finalize `source-art/page-01-source.png` directly through the shared harness
without adding lettering. Keep that PNG as the accepted image-generation
source and `pages/page-01.webp` as the reader asset.
