# Series contract

## Identity

- ID and slug: `today-ai-four-cut`
- Korean title: `오늘의 AI 네 컷`
- Type: `comic`
- Status: `ongoing`
- Premise: Verify one important AI development and explain what happened, why
  it matters, and what remains uncertain in four friendly Korean webtoon
  panels.
- Audience: curious general readers aged 13 and above; do not assume technical
  background.

## Harness

Create `series.json` with schema version 1 and the identity above. Create
`harness.json` with:

- `episodeIdPattern`: `ep-NNN`
- `pageCount`: `1`
- `storyLineCount`: `4`
- source art: one complete PNG poster with four image-generated speech balloons
  and exact image-generated Korean title, dialogue, numbers, and footer, model
  `OpenAI Image Generation`, tool `built-in image_gen`
- reader asset: WebP, maximum width 1080, quality 88, repository storage
- presentation: new episodes use `baked-lettered`
- publishing repository `jungju/slop`, branch `main`, Live URL
  `https://slop.jjgo.io`, route `/comics/{series}/{episode}/`

Create these specs before the first episode:

- `spec/series-bible.md`: premise, audience, recurring characters, tone, and
  non-negotiable editorial rules from this contract
- `spec/visual-style.yaml`: the production style lock
- `spec/news-policy.yaml`: the sourcing and claim rules
- `spec/continuity-registry.yaml`: canonical character descriptions below
- `spec/episode-ledger.md`: empty ledger with numbering and source-fingerprint
  rules

## Recurring characters

### Nuri

- Original Korean woman news editor in her late twenties.
- Short dark-brown bob, warm brown eyes, cream shirt, navy cardigan, mustard
  notebook.
- Curious and precise. She asks the reader's practical question rather than
  pretending to be confused.
- Never resemble a named real person or a supplied reference character.

### Pik

- Original small desktop AI guide robot.
- Rounded navy body, cream face screen, two simple dot eyes, one mustard antenna
  tip, short flexible arms.
- Explains one verified concept at a time and clearly labels uncertainty.
- No brand marks, letters, numbers, or resemblance to a commercial mascot.

## Four-panel story grammar

1. Hook: show the verified event and the question it raises.
2. Fact: explain what was actually announced, published, or measured.
3. Meaning: show the likely effect and the most important limitation.
4. Takeaway: give a useful conclusion without hype, investment advice, or a
   prediction presented as fact.

Each panel must show a distinct visible action or information-bearing object.
The final reader asset must be one portrait image with a header, a 2×2 bordered
panel grid, four white speech balloons with deep-navy outlines and tails, and a
small footer. The image model must create the entire lettered poster in one
generation result. Local code must not add or repair text, digits, balloons,
tails, borders, or panels. The four balloon lines must form a complete
explanation.
