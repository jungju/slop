# AI Slop publication flow

Publish the series only through:

- Repository: `https://github.com/jungju/slop`
- Live site: `https://slop.jjgo.io`
- Episode route: `/comics/wind-returning-place/ep-NNN/`

## Required order

1. Confirm `main` is synchronized and inspect unrelated worktree changes.
2. Run:

   ```powershell
   npm run series -- verify wind-returning-place ep-NNN
   npm run check
   ```

3. Verify the local episode route at desktop and mobile widths. Confirm the
   expected page count, all image responses, caption readability, no horizontal
   overflow, and no console errors.
4. Create a `codex/` branch, stage only the target episode plus intentional
   canon/ledger changes, commit, push, and open a PR.
5. Merge the PR only when the local gates and PR state pass.
6. Wait for the `Deploy GitHub Pages` workflow to succeed.
7. Verify the Live route returns 200, identifies `ep-NNN`, contains the expected
   page count, and every reader asset returns 200.
8. Record the merge commit, Pages run URL, Live URL, and next episode in the
   automation memory.

The daily automation is standing authorization for git commit, push, PR merge,
and GitHub Pages publication in `jungju/slop` for this series only. It does not
authorize another repository, DNS changes, infrastructure deployment, or
unrelated site work.
