# News sourcing contract

## Recency and selection

- Search the live web on every episode run.
- Prefer developments published in the previous 48 hours that materially
  affect AI capabilities, products, research, safety, policy, labor, education,
  or public use.
- If no suitable new item exists, use a still-current item from the previous
  seven days. Never manufacture urgency or republish an earlier episode's core
  claim.
- Check `spec/episode-ledger.md` before selection. Treat the normalized primary
  URL plus announcement date as the source fingerprint.

## Evidence hierarchy

1. Primary source: official release notes, company or lab announcement,
   research paper, standards body, regulator, court, or government publication.
2. Independent confirmation when the claim is consequential or the primary
   source is promotional: a reputable newsroom, journal, or expert institution.
3. Social posts may lead to a source but cannot be the sole evidence for the
   episode.

Use at least one primary source and normally two independent URLs. Do not use
rumors, unattributed leaks, search snippets, copied press-release aggregators,
or an AI-generated summary as evidence. Open and read every cited page.

## Claim discipline

- Separate observed facts, source claims, and editorial inference.
- Attribute benchmark, adoption, safety, pricing, availability, legal, and
  policy claims to the source that supports them.
- Preserve important scope limits such as region, plan, model version, sample
  size, benchmark conditions, and rollout status.
- Do not imply that a demo proves broad real-world capability.
- Do not give personalized medical, legal, financial, or investment advice.
- Paraphrase. Use no more than a short fragment from any one source and never
  reproduce protected article text or artwork.

## `story/sources.md`

Record:

- research date and Korea time
- selected headline and event date
- primary URL, title, publisher, and publication date
- confirmation URL(s) with the same fields
- four to eight atomic claims used by the episode, each mapped to a URL
- uncertainty or disagreement that must appear in panel 3 or 4
- source fingerprint and comparison with the episode ledger
- rejected candidate stories and one-line rejection reasons

If a required claim cannot be supported, remove it. If no accurate four-panel
story remains, stop the run and record the blocker instead of publishing.

## Public source disclosure

Copy the selected news summary and reader-useful source records into
`episode.json`:

- `news.headline`, `eventDate`, `researchDate`, `summary`, and
  `selectionNote`
- `sources[]` entries with `kind`, `label`, `title`, `publisher`,
  `publishedAt`, `url`, and `note`

Expose the primary source and meaningful confirmation material on the public
episode page. Do not publish an episode whose source section is missing.
