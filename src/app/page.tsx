import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import { PRICING } from "@/lib/pricing";

const features = [
  {
    title: "Voice Control",
    description:
      "Talk to your AI agent naturally with live transcription and audio responses. Available with the Pro plan.",
    icon: "mic",
  },
  {
    title: "End-to-End Encryption",
    description:
      "ECDH key exchange with TweetNaCl encryption. Your commands and data stay between your devices — fully end-to-end encrypted.",
    icon: "lock",
  },
  {
    title: "Remote Access",
    description:
      "Connect from anywhere via Cloudflare tunnels. No port forwarding, no static IPs. Just scan a QR code and you're paired.",
    icon: "globe",
  },
  {
    title: "AI-Powered Coding",
    description:
      "Execute coding tasks on your desktop with Morpheus. Review, approve, and monitor AI operations from your phone.",
    icon: "terminal",
  },
  {
    title: "Cross-Platform",
    description:
      "Desktop app for macOS, Windows, and Linux. Mobile app for iOS and Android. One pairing, works everywhere.",
    icon: "layers",
  },
  {
    title: "Your Data, Your Control",
    description:
      "No cloud storage, no tracking. Everything runs locally on your devices. You own your data completely.",
    icon: "shield",
  },
];

const featureIcons: Record<string, string> = {
  mic: "[mic]",
  lock: "[enc]",
  globe: "[net]",
  terminal: "[>_]",
  layers: "[x-p]",
  shield: "[own]",
};

const steps = [
  {
    step: "01",
    title: "Install Desktop Agent",
    description: "Download and run Morpheus Agent on your Mac, Windows, or Linux machine.",
  },
  {
    step: "02",
    title: "Scan QR Code",
    description: "Open the mobile app and scan the QR code displayed on your desktop.",
  },
  {
    step: "03",
    title: "Start Commanding",
    description: "Type or speak commands to your AI agent from anywhere in the world.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Morpheus",
  description:
    "Control your desktop AI agent from anywhere. Voice commands, encrypted pairing, and remote access — all from your mobile device.",
  url: "https://getmorphe.us",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "macOS, Windows, Linux, iOS, Android",
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free plan",
    },
    {
      "@type": "Offer",
      price: PRICING.monthly.replace("$", ""),
      priceCurrency: "USD",
      description: "Pro monthly plan",
    },
  ],
  author: {
    "@type": "Person",
    name: "Shakeel Bhamani",
  },
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="scanlines relative overflow-hidden py-32 sm:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-morpheus-dim to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="mb-4 text-sm text-morpheus-muted tracking-widest uppercase">
            &gt; initializing morpheus protocol...
          </p>
          <h1 id="hero-heading" className="text-5xl font-bold tracking-tight sm:text-7xl">
            Control Your AI Agent
            <br />
            <span className="text-morpheus glow-green">
              From Your Phone
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Morpheus connects your mobile device to your desktop AI agent with
            end-to-end encryption. Voice commands, remote access, and full
            control — from anywhere.
          </p>
          <div className="mt-10 max-w-lg mx-auto">
            <WaitlistForm id="hero-waitlist" source="hero" compact />
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-morpheus pulse-dot" aria-hidden="true" />
            <span className="text-xs text-zinc-400">
              Early access &mdash; <span className="text-morpheus font-semibold">50% off</span> at launch
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" aria-labelledby="features-heading" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="features-heading" className="text-center text-3xl font-bold sm:text-4xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> Everything You Need
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
            A complete mobile-to-desktop AI control system, built with privacy
            and security at its core.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-morpheus-dark hover:bg-surface-hover"
              >
                <div className="text-lg text-morpheus font-bold" aria-hidden="true">
                  {featureIcons[feature.icon]}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-zinc-200 group-hover:text-morpheus transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section aria-labelledby="steps-heading" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="steps-heading" className="text-center text-3xl font-bold sm:text-4xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> Get Started in 3 Steps
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-morpheus-dark bg-morpheus/10 text-sm font-bold text-morpheus">
                  {s.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-200">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/download"
              className="rounded-lg border border-morpheus bg-morpheus/10 px-8 py-3 text-sm font-semibold text-morpheus transition-all hover:bg-morpheus/20 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)]"
            >
              Download Morpheus
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section aria-labelledby="pricing-preview-heading" className="border-t border-border py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 id="pricing-preview-heading" className="text-3xl font-bold sm:text-4xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> Free to Start, Pro to Unlock
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Already have a Claude subscription? Use Morpheus free. No subscription?
            Go Pro and we handle everything with AI token packs.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-6 text-left">
              <h3 className="text-lg font-semibold text-zinc-300">Free</h3>
              <p className="mt-1 text-2xl font-bold text-white">$0 <span className="text-sm font-normal text-zinc-400">/ forever</span></p>
              <p className="mt-2 text-xs text-zinc-500">Bring your own Claude subscription</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>LAN connection &amp; text commands</li>
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>E2E encryption</li>
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>1 paired device</li>
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>Basic MCP servers</li>
              </ul>
            </div>
            <div className="rounded-xl border border-morpheus/40 bg-surface p-6 text-left shadow-[0_0_30px_rgba(0,255,0,0.08)]">
              <h3 className="text-lg font-semibold text-morpheus">Pro</h3>
              <p className="mt-1 text-2xl font-bold text-white">{PRICING.monthly} <span className="text-sm font-normal text-zinc-400">/ month</span></p>
              <p className="mt-2 text-xs text-morpheus-muted">No subscription needed — we handle it</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>Everything in Free</li>
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>AI token packs — no external accounts needed</li>
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>Voice mode &amp; remote access</li>
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>Unlimited devices &amp; all MCP servers</li>
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>Priority support</li>
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="/pricing"
              className="rounded-lg border border-morpheus bg-morpheus/10 px-8 py-3 text-sm font-semibold text-morpheus transition-all hover:bg-morpheus/20 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)]"
            >
              View Full Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section id="early-access" aria-labelledby="early-access-heading" className="border-t border-border py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-morpheus/30 bg-gradient-to-b from-morpheus/5 to-transparent p-8 sm:p-12 text-center shadow-[0_0_60px_rgba(0,255,0,0.05)]">
            <p className="text-sm text-morpheus-muted tracking-widest uppercase mb-4">
              &gt; early access program
            </p>
            <h2 id="early-access-heading" className="text-3xl font-bold sm:text-4xl">
              Get <span className="text-morpheus glow-green">50% Off</span> at Launch
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Join the waitlist and lock in your early bird discount.
              Be the first to control your AI agent from anywhere.
            </p>
            <div className="mt-4 inline-flex items-center gap-4 rounded-lg border border-border bg-surface px-6 py-3">
              <div className="text-left">
                <p className="text-xs text-zinc-400">Pro plan at launch</p>
                <p className="text-lg font-bold">
                  <span className="text-zinc-500 line-through mr-2">{PRICING.monthly}</span>
                  <span className="text-morpheus">{PRICING.earlyBird}</span>
                  <span className="text-xs font-normal text-zinc-400">/mo</span>
                </p>
              </div>
              <div className="rounded-md bg-morpheus/10 border border-morpheus/30 px-3 py-1">
                <span className="text-xs font-bold text-morpheus">SAVE 50%</span>
              </div>
            </div>
            <div className="mt-8 max-w-lg mx-auto">
              <WaitlistForm id="early-access-waitlist" source="early-access" />
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section aria-labelledby="security-heading" className="border-t border-border py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 id="security-heading" className="text-3xl font-bold sm:text-4xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> Privacy by Design
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            No cloud storage. No tracking. All data stays on your
            devices, encrypted end-to-end.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {[
              "All data stored locally on your devices",
              "ECDH + TweetNaCl end-to-end encryption",
              "No accounts needed for Free tier",
              "No analytics, tracking, or advertising",
              "Zero cloud dependency — fully local operation",
              "Voice mode is opt-in and off by default",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-3">
                <span className="mt-0.5 text-morpheus font-bold" aria-hidden="true">[+]</span>
                <span className="text-sm text-zinc-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
