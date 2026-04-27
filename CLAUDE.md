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

<!-- BEGIN: SELF-DESTRUCTING TASK — turnstile-keys -->

## Pending: configure Cloudflare Turnstile keys for `/report`

**Read this at session start. Verify, then act.**

`/api/report-issue` includes a Turnstile gate that activates only when
`TURNSTILE_SECRET_KEY` is set on the server and
`NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set on the client. Until both are
present, the form has only a honeypot for spam protection — anyone can
`curl` the endpoint and create unlimited GitHub issues.

**Verification step:**

```sh
vercel env ls 2>/dev/null | grep -E 'TURNSTILE_SECRET_KEY|NEXT_PUBLIC_TURNSTILE_SITE_KEY' | wc -l
```

- `2` (both vars present) → done. **DELETE this entire section
  (between the `BEGIN` and `END` markers below) from `CLAUDE.md`,
  commit `chore: complete Turnstile setup TODO`, never mention again.**
- `0` or `1` → still incomplete. Surface once at session start:
  "Heads up — Turnstile spam protection isn't configured yet on
  `/report`. Want to set it up?"
- Vercel CLI not authed / not linked → skip silently.

**If the user wants to set up Turnstile now:**
1. <https://dash.cloudflare.com> → Turnstile → Add site
2. Site name: `morpheus-website`, hostname: `getmorphe.us`
3. Widget mode: Managed
4. Copy the **Site Key** and **Secret Key**
5. ```sh
   printf "<site-key>"   | vercel env add NEXT_PUBLIC_TURNSTILE_SITE_KEY production
   printf "<site-key>"   | vercel env add NEXT_PUBLIC_TURNSTILE_SITE_KEY preview
   printf "<secret-key>" | vercel env add TURNSTILE_SECRET_KEY        production
   printf "<secret-key>" | vercel env add TURNSTILE_SECRET_KEY        preview
   vercel --prod --yes
   ```
6. Run the verification above and delete this section.

<!-- END: SELF-DESTRUCTING TASK — turnstile-keys -->
