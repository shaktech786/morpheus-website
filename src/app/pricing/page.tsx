import type { Metadata } from "next";
import Link from "next/link";
import BillingToggle from "@/components/BillingToggle";
import FaqAccordion from "@/components/FaqAccordion";
import { PLAN_FEATURES } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Morpheus pricing — free to start with BYOK, or go Pro for voice, remote access, unlimited devices, and AI token packs.",
};

const faqs = [
  {
    q: "What's included in the free plan?",
    a: "The free plan lets you use Morpheus as a remote control for your existing AI setup. It includes LAN connection, text commands, end-to-end encryption, one paired device, and basic MCP servers. You'll need your own Claude subscription (Pro, Max, or API key) on the desktop side.",
  },
  {
    q: "What if I don't have a Claude subscription?",
    a: "No problem — with Pro, you can purchase AI token packs directly in the app. We handle all the setup so you can start using Morpheus immediately without any external accounts or subscriptions.",
  },
  {
    q: "Can I switch between monthly and annual?",
    a: "Yes. You can switch between monthly and annual billing at any time. When switching to annual, you'll receive prorated credit for any remaining time on your monthly plan. Switching to monthly takes effect at the end of your current annual billing cycle.",
  },
  {
    q: "Can I try Pro before committing?",
    a: "The Free plan gives you full access to core features with your own Claude subscription. When you're ready for voice, remote access, and unlimited devices, upgrade to Pro anytime from the app.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Payments are handled through the App Store (iOS) and Google Play (Android). You can use any payment method configured in your Apple or Google account, including credit cards, debit cards, Apple Pay, and Google Pay.",
  },
  {
    q: "What's the Lifetime plan?",
    a: "The Lifetime plan is a one-time payment of $79.99 that gives you permanent access to all Pro features — no recurring charges, no expiration. It's roughly 2x the annual price and pays for itself in under two years.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel your Pro subscription at any time. You'll retain access to Pro features until the end of your current billing period, then you'll be moved to the free plan automatically. The Lifetime plan never expires and doesn't need to be cancelled.",
  },
  {
    q: "Is my data encrypted?",
    a: "Yes. All communication between your phone and desktop uses ECDH key exchange with TweetNaCl encryption. Your data never passes through our servers — it stays between your devices, fully end-to-end encrypted.",
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
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm text-morpheus-muted tracking-widest uppercase">
            &gt; loading pricing_matrix...
          </p>
          <h1 id="pricing-heading" className="text-4xl font-bold tracking-tight sm:text-6xl">
            Simple, Transparent
            <br />
            <span className="text-morpheus glow-green">Pricing</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
            Start free. Upgrade when you need voice control, remote access,
            unlimited devices, and more.
          </p>

          <BillingToggle />
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section aria-labelledby="comparison-heading" className="border-t border-border py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="comparison-heading" className="text-center text-2xl font-bold sm:text-3xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> Feature Comparison
          </h2>
          <div className="mt-12 overflow-hidden rounded-xl border border-border">
            <table aria-label="Feature comparison between Free and Pro plans" className="w-full">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-zinc-400">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-zinc-400">
                    Free
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-semibold text-morpheus">
                    Pro
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
                    <td className="px-6 py-3 text-center">
                      <FeatureValue value={f.free} />
                    </td>
                    <td className="px-6 py-3 text-center">
                      <FeatureValue value={f.pro} />
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
            <button
              disabled
              title="Pro plan is not yet available"
              className="cursor-not-allowed rounded-lg border border-border px-8 py-3 text-sm font-semibold text-zinc-500 opacity-70"
            >
              Pro Coming Soon
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
