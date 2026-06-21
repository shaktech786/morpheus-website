"use client";

import { useState } from "react";
import Link from "next/link";
import { PRICING, PLAN_FEATURES } from "@/lib/pricing";

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm text-zinc-300">{value}</span>;
  }
  if (value) {
    return <span className="text-morpheus font-bold" aria-label="Included">[+]</span>;
  }
  return <span className="text-zinc-600 font-bold" aria-label="Not included">[-]</span>;
}

export default function BillingToggle() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <div className="mt-10 flex items-center justify-center gap-4">
        <span
          className={`text-sm font-semibold ${!annual ? "text-morpheus" : "text-zinc-500"}`}
        >
          Monthly
        </span>
        <button
          onClick={() => setAnnual(!annual)}
          role="switch"
          aria-checked={annual}
          aria-label="Annual billing"
          className={`relative h-7 w-12 rounded-full border transition-colors ${
            annual
              ? "border-morpheus bg-morpheus/20"
              : "border-border bg-surface"
          }`}
        >
          <span
            aria-hidden="true"
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
            Save 25%
          </span>
        </span>
      </div>

      {/* Pricing Cards — 2x2 grid on md, 4 cols on xl */}
      <div className="mx-auto max-w-6xl mt-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {/* Free Tier */}
          <div className="flex flex-col rounded-xl border border-border bg-surface p-8">
            <div>
              <h3 className="text-lg font-semibold text-zinc-300">Free</h3>
              <p className="mt-1 text-sm text-zinc-400">
                15 Haiku messages/day. LAN only, 1 device.
              </p>
            </div>
            <div className="mt-6">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-sm text-zinc-400"> / forever</span>
            </div>
            <Link
              href="/download"
              className="mt-8 block rounded-lg border border-border bg-surface-hover px-6 py-3 text-center text-sm font-semibold text-zinc-300 transition-all hover:border-morpheus-dark hover:text-morpheus"
            >
              Download Free
            </Link>
            <div className="mt-8 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                What&apos;s included
              </p>
              <ul className="mt-4 space-y-3">
                {PLAN_FEATURES.map((f) => (
                  <li key={f.name} className="flex items-center gap-3 text-sm">
                    <FeatureValue value={f.free} />
                    <span className="text-zinc-400">{f.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="relative flex flex-col rounded-xl border border-morpheus/40 bg-surface p-8 shadow-[0_0_30px_rgba(0,255,136,0.08)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full border border-morpheus bg-morpheus/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-morpheus">
                Most Popular
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-morpheus">Pro</h3>
              <p className="mt-1 text-sm text-zinc-400">
                Voice, remote, unlimited devices. 1,500 credits/mo.
              </p>
            </div>
            <div className="mt-6">
              {annual ? (
                <>
                  <span className="text-4xl font-bold text-white">
                    {PRICING.proAnnual}
                  </span>
                  <span className="text-sm text-zinc-400"> / year</span>
                  <p className="mt-1 text-sm text-morpheus-muted">
                    {PRICING.proAnnualMonthly}/mo billed annually
                  </p>
                </>
              ) : (
                <>
                  <span className="text-4xl font-bold text-white">
                    {PRICING.proMonthly}
                  </span>
                  <span className="text-sm text-zinc-400"> / month</span>
                </>
              )}
            </div>
            <Link
              href="/download"
              className="mt-8 block rounded-lg border border-morpheus bg-morpheus/10 px-6 py-3 text-center text-sm font-semibold text-morpheus transition-all hover:bg-morpheus/20 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]"
            >
              Get Pro
            </Link>
            <div className="mt-8 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Everything in Free, plus
              </p>
              <ul className="mt-4 space-y-3">
                {PLAN_FEATURES.map((f) => (
                  <li key={f.name} className="flex items-center gap-3 text-sm">
                    <FeatureValue value={f.pro} />
                    <span className="text-zinc-400">{f.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Power Tier */}
          <div className="relative flex flex-col rounded-xl border border-[#a855f7]/40 bg-surface p-8 shadow-[0_0_30px_rgba(168,85,247,0.06)]">
            <div>
              <h3 className="text-lg font-semibold text-[#a855f7]">Power</h3>
              <p className="mt-1 text-sm text-zinc-400">
                + Opus model, 4,000 credits/mo, 3 concurrent tasks.
              </p>
            </div>
            <div className="mt-6">
              {annual ? (
                <>
                  <span className="text-4xl font-bold text-white">
                    {PRICING.powerAnnual}
                  </span>
                  <span className="text-sm text-zinc-400"> / year</span>
                  <p className="mt-1 text-sm text-[#a855f7]/70">
                    {PRICING.powerAnnualMonthly}/mo billed annually
                  </p>
                </>
              ) : (
                <>
                  <span className="text-4xl font-bold text-white">
                    {PRICING.powerMonthly}
                  </span>
                  <span className="text-sm text-zinc-400"> / month</span>
                </>
              )}
            </div>
            <Link
              href="/download"
              className="mt-8 block rounded-lg border border-[#a855f7]/40 bg-[#a855f7]/10 px-6 py-3 text-center text-sm font-semibold text-[#a855f7] transition-all hover:bg-[#a855f7]/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            >
              Get Power
            </Link>
            <div className="mt-8 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Everything in Pro, plus
              </p>
              <ul className="mt-4 space-y-3">
                {PLAN_FEATURES.map((f) => (
                  <li key={f.name} className="flex items-center gap-3 text-sm">
                    <FeatureValue value={f.power} />
                    <span className="text-zinc-400">{f.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Team Tier */}
          <div className="relative flex flex-col rounded-xl border border-pill/30 bg-surface p-8 shadow-[0_0_30px_rgba(0,204,255,0.06)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full border border-pill/50 bg-pill/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-pill">
                For Teams
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-pill">Team</h3>
              <p className="mt-1 text-sm text-zinc-400">
                Shared devices, audit logs, SSO. Up to 25 seats.
              </p>
            </div>
            <div className="mt-6">
              {annual ? (
                <>
                  <span className="text-4xl font-bold text-white">
                    {PRICING.teamAnnual}
                  </span>
                  <span className="text-sm text-zinc-400"> / seat / year</span>
                  <p className="mt-1 text-sm text-pill/70">
                    {PRICING.teamAnnualMonthly}/seat/mo billed annually
                  </p>
                </>
              ) : (
                <>
                  <span className="text-4xl font-bold text-white">
                    {PRICING.teamMonthly}
                  </span>
                  <span className="text-sm text-zinc-400"> / seat / month</span>
                </>
              )}
            </div>
            <Link
              href="mailto:team@getmorphe.us?subject=Morpheus Team Plan"
              className="mt-8 block rounded-lg border border-pill/40 bg-pill/10 px-6 py-3 text-center text-sm font-semibold text-pill transition-all hover:bg-pill/20 hover:shadow-[0_0_20px_rgba(0,204,255,0.15)]"
            >
              Contact Sales
            </Link>
            <div className="mt-8 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Everything in Power, plus
              </p>
              <ul className="mt-4 space-y-3">
                {PLAN_FEATURES.map((f) => (
                  <li key={f.name} className="flex items-center gap-3 text-sm">
                    <FeatureValue value={f.team} />
                    <span className="text-zinc-400">{f.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BYOK Callout */}
        <div className="mt-8 rounded-xl border border-zinc-700/50 bg-surface p-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-md border border-zinc-600 bg-zinc-800 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-zinc-300">
                  BYOK
                </span>
                <h3 className="text-lg font-semibold text-white">
                  Bring Your Own Anthropic Key
                </h3>
              </div>
              <p className="mt-2 text-sm text-zinc-400">
                All models unlocked — Haiku, Sonnet, and Opus. All Pro features included.
                You pay Anthropic directly for usage; no credit metering on our end.
              </p>
            </div>
            <div className="shrink-0 text-left sm:text-right">
              {annual ? (
                <>
                  <span className="text-3xl font-bold text-white">
                    {PRICING.byokAnnual}
                  </span>
                  <span className="text-sm text-zinc-400"> / year</span>
                  <p className="mt-1 text-sm text-zinc-500">
                    {PRICING.byokAnnualMonthly}/mo billed annually
                  </p>
                </>
              ) : (
                <>
                  <span className="text-3xl font-bold text-white">
                    {PRICING.byokMonthly}
                  </span>
                  <span className="text-sm text-zinc-400"> / month</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
