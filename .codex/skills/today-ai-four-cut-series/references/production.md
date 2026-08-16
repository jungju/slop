# Production contract

## Visual style lock

Start every image prompt with:

> Original Korean educational webtoon illustration, warm cream paper ground,
> strong deep-navy ink contours, mustard-yellow highlights, restrained cobalt
> accents, soft cel shading, clean friendly expressions, polished editorial
> infographic mood, repeatable original character design, no reader-facing
> text.

This is a visual-language adaptation of the supplied reference, not a replica.
Do not copy its title treatment, logo, characters, dialogue, math theme, brand,
or exact four-cell poster layout.

## Page requirements

- Generate four separate portrait illustrations, one for each panel role.
- Keep Nuri and Pik on-model from `spec/continuity-registry.yaml`.
- Show the news concept through concrete props and actions. Use generic,
  non-functional interface shapes when a product UI is relevant.
- Leave comfortable visual breathing room; the exact Korean explanation is
  rendered by the site caption below the image.
- Vary framing across the four pages: establishing, explanatory medium shot,
  consequence or comparison, and closing reaction or object payoff.

## Hard rejects

Reject readable text of any language, fake Korean, letters, numbers, logos,
trademarks used decoratively, watermarks, captions, speech bubbles, empty
bubbles, photorealism, live-action appearance, deceptive screenshots,
celebrity likenesses, extra fingers that affect the action, character identity
drift, and a scene that overstates the sourced claim.

## Story and metadata

- `outline.md`: exactly four concrete beats and a one-sentence uncertainty
  lock.
- `script.md`: exactly four numbered Korean caption lines, preferably no more
  than 85 Korean characters each.
- `storyboard.yaml`: four pages with panel role, visual action, source claim
  IDs, continuity references, caption, and generation prompt.
- `episode.json`: accurate `lead`, `closingLine`, `publishedAt`, status, and
  known tool/provider provenance. Never guess an unrecorded model version.

Finalize through the shared harness. Keep only the four final WebP reader
assets under the episode `pages/` directory.
