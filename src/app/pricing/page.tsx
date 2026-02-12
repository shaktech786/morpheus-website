"use client";

import Link from "next/link";
import { useState } from "react";

const features = [
  { name: "LAN Connection", free: true, pro: true },
  { name: "Text Commands", free: true, pro: true },
  { name: "E2E Encryption", free: true, pro: true },
  { name: "Paired Devices", free: "1", pro: "Unlimited" },
  { name: "MCP Servers", free: "Basic", pro: "All" },
  { name: "Voice Mode", free: false, pro: true },
  { name: "Remote Access", free: false, pro: true },
  { name: "Priority Support", free: false, pro: true },
];

const faqs = [
  {
    q: "What's included in the free plan?",
    a: "The free plan includes LAN connection, text commands, end-to-end encryption, one paired device, and access to basic MCP servers. It's everything you need to get started controlling your AI agent from your phone on a local network.",
  },
  {
    q: "Can I switch between monthly and annual?",
    a: "Yes. You can switch between monthly and annual billing at any time. When switching to annual, you'll receive prorated credit for any remaining time on your monthly plan. Switching to monthly takes effect at the end of your current annual billing cycle.",
  },
  {
    q: "How does the free trial work?",
    a: "When Pro launches, new users will get a 14-day free trial with full access to all Pro features. No credit card required to start. At the end of the trial, you can choose to subscribe or continue on the free plan.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Payments are handled through the App Store (iOS) and Google Play (Android). You can use any payment method configured in your Apple or Google account, including credit cards, debit cards, Apple Pay, and Google Pay.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel your Pro subscription at any time. You'll retain access to Pro features until the end of your current billing period, then you'll be moved to the free plan automatically.",
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
    return <span className="text-morpheus font-bold">[+]</span>;
  }
  return <span className="text-zinc-600 font-bold">[-]</span>;
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const monthlyPrice = "$4.99";
  const annualPrice = "$39.99";
  const annualMonthly = "$3.33";

  return (
    <div>
      {/* Hero */}
      <section className="scanlines relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-morpheus-dim to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm text-morpheus-muted tracking-widest uppercase">
            &gt; loading pricing_matrix...
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Simple, Transparent
            <br />
            <span className="text-morpheus glow-green">Pricing</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-500">
            Start free. Upgrade when you need voice control, remote access,
            unlimited devices, and more.
          </p>

          {/* Billing toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-semibold ${!annual ? "text-morpheus" : "text-zinc-500"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative h-7 w-12 rounded-full border transition-colors ${
                annual
                  ? "border-morpheus bg-morpheus/20"
                  : "border-border bg-surface"
              }`}
              aria-label="Toggle annual billing"
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full transition-all ${
                  annual
                    ? "left-6 bg-morpheus"
                    : "left-0.5 bg-zinc-400"
                }`}
              />
            </button>
            <span
              className={`text-sm font-semibold ${annual ? "text-morpheus" : "text-zinc-500"}`}
            >
              Annual{" "}
              <span className="ml-1 rounded-md border border-morpheus-dark bg-morpheus/10 px-2 py-0.5 text-xs text-morpheus">
                Save 33%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Free Tier */}
            <div className="flex flex-col rounded-xl border border-border bg-surface p-8">
              <div>
                <h3 className="text-lg font-semibold text-zinc-300">Free</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  For getting started with local AI control.
                </p>
              </div>
              <div className="mt-6">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-sm text-zinc-500"> / forever</span>
              </div>
              <Link
                href="/download"
                className="mt-8 block rounded-lg border border-border bg-surface-hover px-6 py-3 text-center text-sm font-semibold text-zinc-300 transition-all hover:border-morpheus-dark hover:text-morpheus"
              >
                Download Free
              </Link>
              <div className="mt-8 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  What&apos;s included
                </p>
                <ul className="mt-4 space-y-3">
                  {features.map((f) => (
                    <li key={f.name} className="flex items-center gap-3 text-sm">
                      <FeatureValue value={f.free} />
                      <span className="text-zinc-400">{f.name}</span>
                      {typeof f.free === "string" && (
                        <span className="ml-auto text-xs text-zinc-600">
                          {f.free}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pro Tier */}
            <div className="relative flex flex-col rounded-xl border border-morpheus/40 bg-surface p-8 shadow-[0_0_30px_rgba(0,255,0,0.08)]">
              {/* Recommended badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full border border-morpheus bg-morpheus/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-morpheus">
                  Recommended
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-morpheus">Pro</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Full power. Voice, remote, unlimited devices.
                </p>
              </div>
              <div className="mt-6">
                {annual ? (
                  <>
                    <span className="text-4xl font-bold text-white">
                      {annualPrice}
                    </span>
                    <span className="text-sm text-zinc-500"> / year</span>
                    <p className="mt-1 text-sm text-morpheus-muted">
                      {annualMonthly}/mo billed annually
                    </p>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-bold text-white">
                      {monthlyPrice}
                    </span>
                    <span className="text-sm text-zinc-500"> / month</span>
                  </>
                )}
              </div>
              <button
                disabled
                className="mt-8 block cursor-not-allowed rounded-lg border border-morpheus bg-morpheus/10 px-6 py-3 text-center text-sm font-semibold text-morpheus opacity-70"
              >
                Coming Soon
              </button>
              <div className="mt-8 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Everything in Free, plus
                </p>
                <ul className="mt-4 space-y-3">
                  {features.map((f) => (
                    <li key={f.name} className="flex items-center gap-3 text-sm">
                      <FeatureValue value={f.pro} />
                      <span className="text-zinc-400">{f.name}</span>
                      {typeof f.pro === "string" && (
                        <span className="ml-auto text-xs text-zinc-600">
                          {f.pro}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            <span className="text-morpheus">&gt;</span> Feature Comparison
          </h2>
          <div className="mt-12 overflow-hidden rounded-xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-400">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-400">
                    Free
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-morpheus">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
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
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            <span className="text-morpheus">&gt;</span> Frequently Asked
            Questions
          </h2>
          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-surface overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-surface-hover"
                >
                  <span className="text-sm font-semibold text-zinc-300">
                    <span className="text-morpheus mr-2">&gt;</span>
                    {faq.q}
                  </span>
                  <span
                    className={`text-morpheus transition-transform ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="border-t border-border px-6 py-4">
                    <p className="text-sm leading-relaxed text-zinc-500">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="text-morpheus">&gt;</span> Ready to Take Control?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-500">
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
