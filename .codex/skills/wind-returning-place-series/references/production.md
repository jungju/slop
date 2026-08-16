# Production contract

## Story

- Produce exactly 20 concrete beats and 20 numbered Korean script lines.
- Keep at least 80% of pages concrete. Use at most three non-consecutive
  metaphor pages at an emotional turn or the ending.
- Keep Doyun a listener, witness, carrier, and collaborator. Do not make him
  solve another person's life.
- Preserve Yunseo's agency. Keep Doyun and Yunseo non-romantic unless the user
  explicitly changes canon.
- Keep Han Minjae absent from the present. Use only photos, recordings,
  memories, documents, or realistic traces.

## Visual style lock

Start every prompt with these constraints:

> Restrained Korean webtoon illustration, soft ink linework, simplified visible
> contours, calm flat painterly color blocks, light cel-shaded faces and hands,
> gentle paper finish, quiet Seoul/Jeju composition, repeatable drawn character
> design, no reader-facing text.

Prohibit live-action, cinematic stills, DSLR photography, hyperreal rendering,
skin pores, lens bokeh, photographic depth of field, fake Korean, signs, logos,
watermarks, captions, and speech bubbles.

Use stable character and object references from `spec/continuity-registry.yaml`.
Never use the preceding generated panel as the next panel's identity baseline.
Regenerate failed panels from the textual prompt and canonical references.

## Reader presentation

Use `site-native-caption` for new episodes. The final WebP contains clean art;
the site renders the Korean script as an accessible fixed caption card. This
removes a separate lettering application while keeping exact readable Korean.

The finalizer requires exactly 20 input images named `page-XX-source.png`,
`page-XX.png`, or `page-XX.webp`. It produces the only committed reader assets
under `episodes/ep-NNN/pages/`.

## Acceptance

- Exactly 20 unique pages
- No generated text, logos, watermarks, or empty bubbles
- Stable character, wardrobe, prop, and location identity
- No caption or navigation overflow at mobile width
- Complete `episode.json` provenance
- `npm run series -- verify wind-returning-place ep-NNN`
- `npm run check`
