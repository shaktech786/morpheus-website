import type { Metadata } from "next";
import Link from "next/link";
import BillingToggle from "@/components/BillingToggle";
import FaqAccordion from "@/components/FaqAccordion";
import { PLAN_FEATURES, TOKEN_PACKS } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Morpheus pricing — free to start, Pro for individuals, Team for organizations. Voice, remote access, unlimited devices, and AI token packs.",
};

const faqs = [
  {
    q: "What's included in the free plan?",
    a: "The free plan lets you use Morpheus as a remote control for your existing AI setup. It includes LAN connection, text commands, end-to-end encryption, one paired device, basic MCP servers, and 24-hour command history. You'll need your own Claude subscription (Pro, Max, or API key) on the desktop side — or you can purchase AI token packs.",
  },
  {
    q: "What if I don't have a Claude subscription?",
    a: "No problem — purchase AI token packs directly in the app. They work with both Free and Pro plans. We handle all the setup so you can start using Morpheus immediately without any external accounts.",
  },
  {
    q: "Can I switch between monthly and annual?",
    a: "Yes. You can switch between monthly and annual billing at any time. When switching to annual, you'll receive prorated credit for any remaining time on your monthly plan. Switching to monthly takes effect at the end of your current annual billing cycle.",
  },
  {
    q: "What's the Team plan?",
    a: "The Team plan is designed for organizations and workgroups. It includes shared device pools, audit logs, admin controls, SSO, and a shared token pool. Pricing is per-seat with up to 25 members. Contact us for larger teams.",
  },
  {
    q: "What's the Lifetime plan?",
    a: "The Lifetime plan is a one-time payment of $79.99 that gives you permanent access to all Pro features — no recurring charges, no expiration. It's roughly 2x the annual price and pays for itself in under two years.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel your Pro or Team subscription at any time. You'll retain access until the end of your current billing period, then you'll move to the free plan automatically. The Lifetime plan never expires.",
  },
  {
    q: "Is my data encrypted?",
    a: "Yes. All communication between your phone and desktop uses ECDH key exchange with TweetNaCl encryption. Your data never passes through our servers — it stays between your devices, fully end-to-end encrypted.",
  },
  {
    q: "What are AI token packs?",
    a: "Token packs let you use Morpheus without your own Claude API key. You purchase tokens in-app, and we proxy your commands through our managed infrastructure. Works with all plans — Free and Pro alike.",
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
            Start free. Upgrade when you need voice, remote access,
            unlimited devices, or team features.
          </p>

          <BillingToggle />
        </div>
      </section>

      {/* Token Packs */}
      <section aria-labelledby="tokens-heading" className="border-t border-border py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 id="tokens-heading" className="text-center text-2xl font-bold sm:text-3xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> AI Token Packs
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
            No Claude subscription? No problem. Purchase tokens in-app and start
            using Morpheus immediately. Works with all plans.
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
                <p className="text-xs text-zinc-500 mt-1">{pack.tokens} tokens</p>
                <p className="text-lg font-bold text-morpheus mt-3">{pack.price}</p>
                <p className="text-xs text-zinc-500 mt-1">{pack.commands}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-zinc-500">
            Tokens are consumed per command based on Claude API usage. Average command uses ~5,000 tokens.
          </p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section aria-labelledby="comparison-heading" className="border-t border-border py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 id="comparison-heading" className="text-center text-2xl font-bold sm:text-3xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> Feature Comparison
          </h2>
          <div className="mt-12 overflow-x-auto rounded-xl border border-border">
            <table aria-label="Feature comparison between Free, Pro, and Team plans" className="w-full min-w-[500px]">
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
            Download Morpheus free and start commanding your AI agent from your
            phone. Upgrade to Pro when you need the full power.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/download"
              className="rounded-lg border border-morpheus bg-morpheus/10 px-8 py-3 text-sm font-semibold text-morpheus transition-all hover:bg-morpheus/20 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)]"
            >
              Download Free
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
