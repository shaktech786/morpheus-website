import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import { PRICING } from "@/lib/pricing";

const features = [
  {
    title: "Do Anything",
    description:
      "Send emails, research topics, manage files, organize your calendar, automate workflows — if you can do it at a keyboard, Morpheus can do it from your phone.",
    icon: "terminal",
  },
  {
    title: "Voice Control",
    description:
      "Talk to Morpheus naturally — like having a conversation with your computer. Live transcription, audio responses, and hands-free control.",
    icon: "mic",
  },
  {
    title: "End-to-End Encryption",
    description:
      "Military-grade encryption keeps your commands and data between your devices — fully end-to-end encrypted. No one else can see what you do.",
    icon: "lock",
  },
  {
    title: "Remote Access",
    description:
      "Connect from anywhere — no technical setup needed. Just scan a QR code and your phone is paired to your computer.",
    icon: "globe",
  },
  {
    title: "Connects to Your Apps",
    description:
      "Works with Gmail, Slack, Notion, Google Calendar, your file system, and 18+ other integrations out of the box. Add your own.",
    icon: "layers",
  },
  {
    title: "Your Data, Your Control",
    description:
      "No cloud storage, no tracking. Everything runs locally on your devices. You own your data completely.",
    icon: "shield",
  },
  {
    title: "Proactive Monitoring",
    description:
      "Morpheus watches your system health, files, processes, and MCP servers — and alerts you before problems become emergencies.",
    icon: "eye",
  },
  {
    title: "Self-Healing",
    description:
      "Crashed service? Morpheus auto-detects failures, restarts services, and adapts its retry strategies based on historical patterns.",
    icon: "heal",
  },
  {
    title: "Workflow Automation",
    description:
      "Chain commands into reusable workflows. Morning briefings, deploy pipelines, backup routines — triggered manually, on schedule, or by events.",
    icon: "flow",
  },
  {
    title: "Vision & Screenshots",
    description:
      "Send photos from your phone or capture desktop screenshots. Morpheus sees and understands visual context through Claude Vision.",
    icon: "cam",
  },
];

const featureIcons: Record<string, string> = {
  terminal: "[>_]",
  mic: "[mic]",
  lock: "[enc]",
  globe: "[net]",
  layers: "[app]",
  shield: "[own]",
  eye: "[eye]",
  heal: "[heal]",
  flow: "[flow]",
  cam: "[cam]",
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
    title: "Do Anything",
    description: "Send emails, research, organize files, automate tasks — tell Morpheus what to do and it handles the rest.",
  },
];

const useCases = [
  {
    persona: "The Couch Commander",
    quote: "You haven't touched your laptop in 3 hours. Emails are sent, files are organized, and your boss thinks you're at your desk. You're eating chips.",
    icon: "[pro]",
  },
  {
    persona: "The Chaos Wrangler",
    quote: "12 tabs, 4 Slack threads, a Notion doc, and a calendar that looks like a Tetris board. One conversation from your phone and it's handled.",
    icon: "[ops]",
  },
  {
    persona: "The Set-It-And-Forget-It",
    quote: "Morning briefings, automated backups, server monitoring, Mom reminders. Everything just... runs. You barely remember setting it up.",
    icon: "[mgr]",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Morpheus",
  description:
    "Your personal AI assistant — control your entire computer from your phone. Send emails, research anything, manage files, automate tasks, and more. End-to-end encrypted.",
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
    {
      "@type": "Offer",
      price: PRICING.teamMonthly.replace("$", ""),
      priceCurrency: "USD",
      description: "Team monthly plan per seat",
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
          <div className="logo-hero-wrap mx-auto mb-8 w-fit">
            <Image src="/logo-transparent.png" alt="Morpheus logo" width={320} height={149} priority />
          </div>
          <h1 id="hero-heading" className="text-5xl font-bold tracking-tight sm:text-7xl">
            Your AI Assistant,
            <br />
            <span className="text-morpheus glow-green">
              In Your Pocket
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Morpheus gives you full control of your computer from your phone.
            Send emails, research anything, manage files, automate tasks — anything you
            could do at your keyboard, now from anywhere.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/download"
              className="rounded-lg border border-morpheus bg-morpheus/10 px-8 py-3 text-sm font-semibold text-morpheus transition-all hover:bg-morpheus/20 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)]"
            >
              Download
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-border px-8 py-3 text-sm font-semibold text-zinc-400 transition-all hover:border-morpheus-dark hover:text-morpheus"
            >
              View Pricing
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-morpheus pulse-dot" aria-hidden="true" />
            <span className="text-xs text-zinc-400">
              Free forever — optional Pro upgrade for voice &amp; remote access
            </span>
          </div>
        </div>
      </section>

      {/* Capabilities Showcase */}
      <section aria-labelledby="capabilities-heading" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="capabilities-heading" className="text-center text-3xl font-bold sm:text-4xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> What Can Morpheus Do?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
            Anything you could do at your keyboard — except now you&apos;re on the couch.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { cmd: '"Email my boss that I\'ll be 5 minutes late" — sent from bed, obviously', tag: 'Email', color: 'text-yellow-400' },
              { cmd: '"Find me flights to Tokyo that won\'t bankrupt me"', tag: 'Travel', color: 'text-blue-400' },
              { cmd: '"My Downloads folder is a war zone. Fix it."', tag: 'Files', color: 'text-emerald-400' },
              { cmd: '"Spin up a Docker container, run my test suite, and tell me what failed"', tag: 'DevOps', color: 'text-orange-400' },
              { cmd: '"Download that YouTube video, extract the audio, and save it as an MP3"', tag: 'Media', color: 'text-cyan-400' },
              { cmd: '"I left a Python script running. Is it done yet or is it still eating my RAM?"', tag: 'Remote Check', color: 'text-purple-400' },
              { cmd: '"Clone that repo, install deps, and have it ready to demo by the time I get home"', tag: 'Dev Setup', color: 'text-red-400' },
              { cmd: '"Scrape Zillow for 2-bed apartments under $2k in Austin and put them in a spreadsheet"', tag: 'Scraping', color: 'text-morpheus' },
              { cmd: '"My server\'s been up for 47 days. Check if anything is silently on fire"', tag: 'Server Health', color: 'text-pink-400' },
              { cmd: '"Resize every image in /photos to 1080p and upload them to Google Drive"', tag: 'Batch Ops', color: 'text-yellow-300' },
              { cmd: '"Train that ML model overnight. Text me when it\'s done. Or when it crashes."', tag: 'Long Jobs', color: 'text-violet-400' },
              { cmd: '"Take a screenshot of my desktop. What chaos am I walking into?"', tag: 'Vision', color: 'text-teal-400' },
              { cmd: '"SSH into my Raspberry Pi and restart the media server"', tag: 'Remote Access', color: 'text-amber-400' },
              { cmd: '"Diff the last two git commits and explain what changed like I\'m five"', tag: 'Code Review', color: 'text-lime-400' },
              { cmd: '"Back up my entire project folder to S3 before I do something I regret"', tag: 'Backups', color: 'text-sky-400' },
              { cmd: '"Monitor Hacker News for mentions of my startup and alert me"', tag: 'Surveillance', color: 'text-rose-400' },
              { cmd: '"Convert this Figma export to actual HTML/CSS. Yes, all of it."', tag: 'Design to Code', color: 'text-fuchsia-400' },
              { cmd: '"Run a speed test, check my DNS, and tell me why my internet feels slow"', tag: 'Diagnostics', color: 'text-indigo-400' },
            ].map((ex) => (
              <div key={ex.cmd} className="rounded-lg border border-border bg-surface p-4 transition-all hover:border-morpheus-dark">
                <span className={`text-xs font-semibold ${ex.color} uppercase tracking-wider`}>{ex.tag}</span>
                <p className="mt-2 text-sm text-zinc-300 font-mono">{ex.cmd}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-zinc-500">
            Your computer is always on. Morpheus is always listening. You&apos;re always in control — from anywhere.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" aria-labelledby="features-heading" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="features-heading" className="text-center text-3xl font-bold sm:text-4xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> Limitless Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
            Morpheus turns your phone into a remote control for your entire computer.
            Powered by AI, secured with end-to-end encryption.
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

      {/* Use Cases */}
      <section aria-labelledby="usecases-heading" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="usecases-heading" className="text-center text-3xl font-bold sm:text-4xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> Built For Doers
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
            Whether you&apos;re running a business, managing your life, or just getting things done
            — Morpheus puts the power of your entire computer in your pocket.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {useCases.map((uc) => (
              <div
                key={uc.persona}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <div className="text-lg text-morpheus font-bold" aria-hidden="true">
                  {uc.icon}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-zinc-200">
                  {uc.persona}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 italic">
                  &ldquo;{uc.quote}&rdquo;
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
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 id="pricing-preview-heading" className="text-3xl font-bold sm:text-4xl">
            <span className="text-morpheus" aria-hidden="true">&gt;</span> Plans That Scale With You
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Free forever. Go Pro for voice, remote access, and
            remote access, or get Team for your organization.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Free */}
            <div className="rounded-xl border border-border bg-surface p-6 text-left">
              <h3 className="text-lg font-semibold text-zinc-300">Free</h3>
              <p className="mt-1 text-2xl font-bold text-white">$0 <span className="text-sm font-normal text-zinc-400">/ forever</span></p>
              <p className="mt-2 text-xs text-zinc-500">Bring your own Claude subscription</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>LAN connection &amp; text commands</li>
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>E2E encryption</li>
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>1 paired device</li>
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>AI token packs available</li>
              </ul>
            </div>
            {/* Pro */}
            <div className="rounded-xl border border-morpheus/40 bg-surface p-6 text-left shadow-[0_0_30px_rgba(0,255,0,0.08)]">
              <h3 className="text-lg font-semibold text-morpheus">Pro</h3>
              <p className="mt-1 text-2xl font-bold text-white">{PRICING.monthly} <span className="text-sm font-normal text-zinc-400">/ month</span></p>
              <p className="mt-2 text-xs text-morpheus-muted">Full power for individuals</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>Everything in Free</li>
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>Voice mode &amp; remote access</li>
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>Unlimited devices &amp; all MCP servers</li>
                <li><span className="text-morpheus font-bold mr-2" aria-hidden="true">[+]</span>Unlimited history &amp; saved commands</li>
              </ul>
            </div>
            {/* Team */}
            <div className="rounded-xl border border-[#00ccff]/30 bg-surface p-6 text-left shadow-[0_0_30px_rgba(0,204,255,0.06)]">
              <h3 className="text-lg font-semibold text-[#00ccff]">Team</h3>
              <p className="mt-1 text-2xl font-bold text-white">{PRICING.teamMonthly} <span className="text-sm font-normal text-zinc-400">/ seat / mo</span></p>
              <p className="mt-2 text-xs text-[#00ccff]/70">Built for teams</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li><span className="text-[#00ccff] font-bold mr-2" aria-hidden="true">[+]</span>Everything in Pro</li>
                <li><span className="text-[#00ccff] font-bold mr-2" aria-hidden="true">[+]</span>Shared device pools &amp; audit logs</li>
                <li><span className="text-[#00ccff] font-bold mr-2" aria-hidden="true">[+]</span>Admin controls &amp; SSO</li>
                <li><span className="text-[#00ccff] font-bold mr-2" aria-hidden="true">[+]</span>Shared token pool &amp; up to 25 seats</li>
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

      {/* Newsletter CTA (replaces early access / waitlist) */}
      <section id="newsletter" aria-labelledby="newsletter-heading" className="border-t border-border py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-morpheus/30 bg-gradient-to-b from-morpheus/5 to-transparent p-8 sm:p-12 text-center shadow-[0_0_60px_rgba(0,255,0,0.05)]">
            <p className="text-sm text-morpheus-muted tracking-widest uppercase mb-4">
              &gt; stay updated
            </p>
            <h2 id="newsletter-heading" className="text-3xl font-bold sm:text-4xl">
              Get Product Updates
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Be the first to know about new features, MCP integrations, and platform updates.
              No spam — just product news.
            </p>
            <div className="mt-8 max-w-lg mx-auto">
              <WaitlistForm id="newsletter-waitlist" source="newsletter" />
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
