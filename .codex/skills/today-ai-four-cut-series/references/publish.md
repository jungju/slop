# AI Slop publication flow

Publish only through:

- Repository: `https://github.com/jungju/slop`
- Live site: `https://slop.jjgo.io`
- Episode route: `/comics/today-ai-four-cut/ep-NNN/`

## Required order

1. Synchronize `main` and inspect unrelated worktree changes.
2. Run:

   ```powershell
   npm run series -- verify today-ai-four-cut ep-NNN
   npm run check
   ```

3. Verify the local episode route at desktop and mobile widths: four distinct
   images, readable captions, no overflow, correct source-grounded story, and
   no console errors.
4. Create a `codex/` branch, stage only the episode, its ledger entry, and
   intentional series changes, commit, push, and open a PR.
5. Merge only after local gates and PR state pass.
6. Wait for `Deploy GitHub Pages` to succeed.
7. Verify the Live route returns 200, identifies the expected episode, contains
   four pages, and every reader asset returns 200.
8. Record the episode, source fingerprint, merge commit, PR, deployment run,
   Live URL, and next episode in automation memory.

The daily automation is standing authorization for commit, push, PR merge, and
GitHub Pages publication in `jungju/slop` for this series only. It does not
authorize another repository, DNS or infrastructure changes, or unrelated
site work.
