# SETUP_REQUIRED — finish wiring `/api/report-issue`

> **This file is self-destructing.** It will be auto-deleted by `prebuild`
> once the required environment variables are configured. Whoever pulls
> this code next must complete the steps below — `npm run build` will
> fail loudly until they are done.

The website's `/report` page and `/api/report-issue` endpoint create
GitHub issues in `shaktech786/morpheus` and embed screenshots from a
Supabase Storage bucket. Both already work locally. To go live on
Vercel, three secrets must be set in the project's environment:

## 1. `GITHUB_ISSUE_TOKEN` (required)

Create a fine-grained PAT at
<https://github.com/settings/personal-access-tokens/new>:

- Resource owner: `shaktech786`
- Repository access: **Only select repositories → `shaktech786/morpheus`**
- Permissions: **Issues: Read and write** (and nothing else)
- Expiration: 1 year

Then:

```sh
vercel env add GITHUB_ISSUE_TOKEN production preview
# paste the token when prompted
```

> Do **not** reuse a `gh auth token` value here in production — those
> OAuth tokens carry full `repo` scope.

## 2. `GITHUB_ISSUE_REPO`

```sh
echo "shaktech786/morpheus" | vercel env add GITHUB_ISSUE_REPO production preview
```

## 3. `SUPABASE_SERVICE_ROLE_KEY`

Already required by the existing `/api/waitlist` endpoint, so this is
likely already set. Confirm with `vercel env ls` — value lives in the
Supabase dashboard under Project Settings → API → `service_role` key
(project `hdcgbbmjbkbwlluobkqe`).

The Supabase Storage bucket `issue-screenshots` (public, with the mime
and size constraints in `route.ts`) is already provisioned — no action.

---

## When you're done

```sh
vercel env ls            # confirm all three keys exist
npm run build            # prebuild check passes → this file is deleted
git add -A && git commit -m "chore: complete report-issue setup"
```

`scripts/check-setup.mjs` deletes this file the moment all three vars
are present in the local environment, so a single successful local
build is enough to remove the marker from the working tree.
