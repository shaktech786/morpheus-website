# morpheus-website

Marketing website for [Morpheus](https://getmorphe.us) — Any Machine, Controlled by Your Phone.

Built with Next.js 15 (App Router), Tailwind CSS, TypeScript. Deployed on Vercel.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, features, capabilities, pricing preview |
| `/pricing` | Full pricing page with billing toggle (monthly/annual/lifetime) |
| `/marketplace` | MCP server marketplace — all 20+ integrations |
| `/download` | Download links for macOS, Windows, Linux |
| `/docs/[slug]` | Documentation articles |
| `/blog/[slug]` | Blog posts |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Dev

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint
```

## Environment

No required environment variables for the static site. The `/api/waitlist` route uses:

```
RESEND_API_KEY=    # email for newsletter signups
```

Copy `.env.example` to `.env.local` and fill in as needed.

## Pricing

All prices are defined in `src/lib/pricing.ts` — single source of truth for both the pricing page and homepage preview cards.

## Deployment

Auto-deploys to Vercel on push to `main`. Domain: `getmorphe.us`.
