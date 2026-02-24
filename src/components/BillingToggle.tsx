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

  const monthlyPrice = PRICING.monthly;
  const annualPrice = PRICING.annual;
  const annualMonthly = PRICING.annualMonthly;
  const lifetimePrice = PRICING.lifetime;

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
            Save 33%
          </span>
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto max-w-5xl mt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Free Tier */}
          <div className="flex flex-col rounded-xl border border-border bg-surface p-8">
            <div>
              <h3 className="text-lg font-semibold text-zinc-300">Free</h3>
              <p className="mt-1 text-sm text-zinc-400">
                Bring your own Claude subscription. Morpheus handles the rest.
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
                    {typeof f.free === "string" && (
                      <span className="ml-auto text-xs text-zinc-500">
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
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full border border-morpheus bg-morpheus/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-morpheus">
                Recommended
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-morpheus">Pro</h3>
              <p className="mt-1 text-sm text-zinc-400">
                Full power. Voice, remote, unlimited devices.
              </p>
            </div>
            <div className="mt-6">
              {annual ? (
                <>
                  <span className="text-4xl font-bold text-white">
                    {annualPrice}
                  </span>
                  <span className="text-sm text-zinc-400"> / year</span>
                  <p className="mt-1 text-sm text-morpheus-muted">
                    {annualMonthly}/mo billed annually
                  </p>
                </>
              ) : (
                <>
                  <span className="text-4xl font-bold text-white">
                    {monthlyPrice}
                  </span>
                  <span className="text-sm text-zinc-400"> / month</span>
                </>
              )}
            </div>
            <button
              disabled
              title="Pro plan is not yet available"
              className="mt-8 block cursor-not-allowed rounded-lg border border-morpheus bg-morpheus/10 px-6 py-3 text-center text-sm font-semibold text-morpheus opacity-70"
            >
              Coming Soon
            </button>
            <div className="mt-8 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Everything in Free, plus
              </p>
              <ul className="mt-4 space-y-3">
                {PLAN_FEATURES.map((f) => (
                  <li key={f.name} className="flex items-center gap-3 text-sm">
                    <FeatureValue value={f.pro} />
                    <span className="text-zinc-400">{f.name}</span>
                    {typeof f.pro === "string" && (
                      <span className="ml-auto text-xs text-zinc-500">
                        {f.pro}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Lifetime Option */}
        <div className="mt-8 rounded-xl border border-morpheus/30 bg-surface p-6 shadow-[0_0_20px_rgba(0,255,0,0.05)]">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-md border border-morpheus bg-morpheus/20 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-morpheus">
                  Best Value
                </span>
                <h3 className="text-lg font-semibold text-white">
                  Lifetime
                </h3>
              </div>
              <p className="mt-2 text-sm text-zinc-400">
                Pay once, own forever. All Pro features with no recurring
                charges.
              </p>
            </div>
            <div className="text-center sm:text-right">
              <span className="text-4xl font-bold text-white">
                {lifetimePrice}
              </span>
              <span className="text-sm text-zinc-400"> / one-time</span>
              <p className="mt-1 text-sm text-morpheus-muted">
                ~2x annual — pays for itself in under 2 years
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
