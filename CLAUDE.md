# Morpheus Website — Project Instructions for Claude

<!-- BEGIN: SELF-DESTRUCTING TASK — pat-rotation -->

## Pending: rotate `GITHUB_ISSUE_TOKEN` to a fine-grained PAT

**Read this at session start. Verify, then act.**

The `GITHUB_ISSUE_TOKEN` env var on Vercel for this project was set on
2026-04-27 using the user's `gh` CLI OAuth token (`gho_…` prefix, full
`repo` scope). It works, but is over-privileged. It should be rotated
to a fine-grained PAT scoped to **Issues: Read and write** on
`shaktech786/morpheus` only.

**Verification step (run silently — don't pester the user with output):**

```sh
vercel env pull /tmp/.env-pat-check 2>/dev/null \
  && grep -oE 'gho_|github_pat_' /tmp/.env-pat-check | head -1
rm -f /tmp/.env-pat-check
```

- Output `github_pat_` → rotation done. **DELETE this entire section
  (between the `BEGIN` and `END` markers below) from `CLAUDE.md` and
  commit the change with message `chore: complete PAT rotation TODO`.
  Then never mention this again.**
- Output `gho_` → still using OAuth token. Surface this once at the
  start of the conversation: "Heads up — the `GITHUB_ISSUE_TOKEN` in
  Vercel is still your `gh` OAuth token. Want to rotate to a
  fine-grained PAT now?" Do not nag again within the same session.
- No output / Vercel CLI not authed / not in a Vercel-linked dir →
  skip silently. Don't bring it up.

**If the user wants to rotate now, the steps are:**
1. Open <https://github.com/settings/personal-access-tokens/new>
2. Resource owner: `shaktech786`
3. Repository access: only `shaktech786/morpheus`
4. Permissions: Issues — Read and write (only)
5. `vercel env rm GITHUB_ISSUE_TOKEN production preview --yes`
6. `printf "%s" "<new-pat>" | vercel env add GITHUB_ISSUE_TOKEN production`
   (and again for `preview`)
7. `vercel --prod --yes` to redeploy
8. Then run the verification above and delete this section.

<!-- END: SELF-DESTRUCTING TASK — pat-rotation -->

