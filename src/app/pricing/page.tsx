import type { Metadata } from "next";
import Link from "next/link";
import BillingToggle from "@/components/BillingToggle";
import FaqAccordion from "@/components/FaqAccordion";
import { PLAN_FEATURES, TOKEN_PACKS } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Morpheus pricing — free forever, Pro for voice and remote access, Power for Opus and heavy usage, Team for organizations. AI credit packs available.",
};

const faqs = [
  {
    q: "What's included in the free plan?",
    a: "The free plan gives you 15 Haiku messages per day over LAN. It includes text commands, end-to-end encryption, one paired device, basic MCP servers, and 24-hour command history. Upgrade to Pro to unlock voice, remote access, and more.",
  },
  {
    q: "What are AI credits?",
    a: "Credits are the in-app currency for AI usage. 1 credit = $0.01 of AI value. Models burn credits per 1,000 tokens: Haiku 1 credit · Sonnet 3 credits · Opus 5 credits. Included credits reset monthly; top-up credits carry over.",
  },
  {
    q: "What is BYOK?",
    a: "BYOK (Bring Your Own Key) lets you connect your own Anthropic API key. You unlock all models — Haiku, Sonnet, and Opus — and pay Anthropic directly for usage. Morpheus charges a flat $7.99/mo platform fee (or $79.99/yr). No credit metering on our end.",
  },
  {
    q: "Can I switch between monthly and annual?",
    a: "Yes. You can switch between monthly and annual billing at any time. When switching to annual, you'll receive prorated credit for any remaining time on your monthly plan. Switching to monthly takes effect at the end of your current annual billing cycle.",
  },
  {
    q: "What's the Team plan?",
    a: "The Team plan is designed for organizations and workgroups. It includes shared device pools, audit logs, admin controls, SSO, and a shared credit pool. Pricing is per-seat with up to 25 members. Contact us for larger teams.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel your subscription at any time. You'll retain access until the end of your current billing period, then move to the free plan automatically.",
  },
  {
    q: "Is my data encrypted?",
    a: "Yes. All communication between your phone and the Morpheus Agent uses ECDH key exchange with TweetNaCl encryption. Your data never passes through our servers — it stays between your devices, fully end-to-end encrypted.",
  },
  {
    q: "What's the difference between Pro and Power?",
    a: "Pro includes Haiku and Sonnet with 1,500 credits/mo and 2 concurrent tasks. Power adds Opus access, bumps credits to 4,000/mo, and raises concurrency to 3 tasks. Power is ideal if you use Opus regularly or run multi-step automations.",
  },
];

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm text-zinc-300">{value}</span>;
  }
  if (value) {
    return <span className="text-morpheus font-bold" aria-label="Included">[+]</span>;
  }
  return <span className="text-zinc-600 font-bold" aria-label="Not included">[-]</span>;
}

export default function PricingPage() {
  return (
    <div>
      {/* Hero + Billing Toggle + Cards */}
      <section aria-labelledby="pricing-heading" className="scanlines relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-morpheus-dim to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="mb-4 text-sm text-morpheus-muted tracking-widest uppercase">
            &gt; loading pricing_matrix...
          </p>
          <h1 id="pricing-heading" className="text-4xl font-bold tracking-tight sm:text-6xl">
            Simple, Transparent
            <br />
            <span className="text-morpheus glow-green">Pricing</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
            Free forever. Upgrade when you want voice, remote access,
            Opus-class AI, or team features.
          </p>

          <BillingToggle />
        </div>
      </section>

      {/* Credit Packs */}
      <section aria-labelledby="credits-heading" className="border-t border-border py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 id="credits-heading" className="text-center text-2xl font-bold sm:text-3xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> AI Credit Packs
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
            Top up anytime. Works with all plans.
          </p>
          <p className="mx-auto mt-2 max-w-xl text-center text-xs text-zinc-500">
            1 credit = $0.01 of AI usage. Models burn credits per 1,000 tokens: Haiku 1 · Sonnet 3 · Opus 5.
            Free tier = 15 Haiku messages/day.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {TOKEN_PACKS.map((pack) => (
              <div
                key={pack.label}
                className="relative rounded-xl border border-border bg-surface p-5 text-center transition-all hover:border-morpheus-dark"
              >
                {pack.badge && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full border border-morpheus bg-morpheus/20 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-morpheus">
                    {pack.badge}
                  </span>
                )}
                <p className="text-2xl font-bold text-white mt-1">{pack.label}</p>
                <p className="text-xs text-zinc-500 mt-1">{pack.credits} credits</p>
                <p className="text-lg font-bold text-morpheus mt-3">{pack.price}</p>
                {pack.bonus && (
                  <p className="text-xs text-morpheus/70 mt-1">{pack.bonus} bonus</p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-zinc-500">
            Included plan credits reset monthly and do not roll over. Top-up credits carry over.
          </p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section aria-labelledby="comparison-heading" className="border-t border-border py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 id="comparison-heading" className="text-center text-2xl font-bold sm:text-3xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> Feature Comparison
          </h2>
          <div className="mt-12 overflow-x-auto rounded-xl border border-border">
            <table aria-label="Feature comparison between Free, Pro, Power, and Team plans" className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-zinc-400">
                    Feature
                  </th>
                  <th scope="col" className="px-4 py-4 text-center text-sm font-semibold text-zinc-400">
                    Free
                  </th>
                  <th scope="col" className="px-4 py-4 text-center text-sm font-semibold text-morpheus">
                    Pro
                  </th>
                  <th scope="col" className="px-4 py-4 text-center text-sm font-semibold text-[#a855f7]">
                    Power
                  </th>
                  <th scope="col" className="px-4 py-4 text-center text-sm font-semibold text-[#00ccff]">
                    Team
                  </th>
                </tr>
              </thead>
              <tbody>
                {PLAN_FEATURES.map((f, i) => (
                  <tr
                    key={f.name}
                    className={`border-b border-border ${
                      i % 2 === 0 ? "bg-surface" : "bg-[#0f0f0f]"
                    }`}
                  >
                    <td className="px-6 py-3 text-sm text-zinc-300">
                      {f.name}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <FeatureValue value={f.free} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <FeatureValue value={f.pro} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <FeatureValue value={f.power} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <FeatureValue value={f.team} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="border-t border-border py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="faq-heading" className="text-center text-2xl font-bold sm:text-3xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> Frequently Asked
            Questions
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section aria-labelledby="cta-heading" className="border-t border-border py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 id="cta-heading" className="text-3xl font-bold sm:text-4xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> Ready to Take Control?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Download Morpheus and start commanding your AI agent from your
            phone. The free plan works forever — upgrade to Pro when you want more.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/download"
              className="rounded-lg border border-morpheus bg-morpheus/10 px-8 py-3 text-sm font-semibold text-morpheus transition-all hover:bg-morpheus/20 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]"
            >
              Download
            </Link>
            <Link
              href="mailto:team@getmorphe.us?subject=Morpheus Team Plan"
              className="rounded-lg border border-[#00ccff]/40 bg-[#00ccff]/10 px-8 py-3 text-sm font-semibold text-[#00ccff] transition-all hover:bg-[#00ccff]/20"
            >
              Talk to Sales (Teams)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
