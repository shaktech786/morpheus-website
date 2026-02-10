import Link from "next/link";

const features = [
  {
    title: "Voice Control",
    description:
      "Talk to your AI agent naturally. Voice commands are processed through OpenAI's Realtime API with live transcription and audio responses.",
    icon: "mic",
  },
  {
    title: "End-to-End Encryption",
    description:
      "ECDH key exchange with TweetNaCl encryption. Your commands and data stay between your devices — no cloud, no accounts.",
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
      "Execute coding tasks on your desktop through Claude Code. Review, approve, and monitor AI operations from your phone.",
    icon: "terminal",
  },
  {
    title: "Cross-Platform",
    description:
      "Desktop app for macOS, Windows, and Linux. Mobile app for iOS and Android. One pairing, works everywhere.",
    icon: "layers",
  },
  {
    title: "Open Source",
    description:
      "Fully open-source under MIT license. Audit the code, contribute, or fork it. Your data, your control.",
    icon: "code",
  },
];

const featureIcons: Record<string, string> = {
  mic: "[mic]",
  lock: "[enc]",
  globe: "[net]",
  terminal: "[>_]",
  layers: "[x-p]",
  code: "[src]",
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

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="scanlines relative overflow-hidden py-32 sm:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-morpheus-dim to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="mb-4 text-sm text-morpheus-muted tracking-widest uppercase">
            &gt; initializing morpheus protocol...
          </p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Control Your AI Agent
            <br />
            <span className="text-morpheus glow-green">
              From Your Phone
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-500">
            Morpheus connects your mobile device to your desktop AI agent with
            end-to-end encryption. Voice commands, remote access, and full
            control — from anywhere.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/download"
              className="rounded-lg border border-morpheus bg-morpheus/10 px-8 py-3 text-sm font-semibold text-morpheus transition-all hover:bg-morpheus/20 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)]"
            >
              Download Now
            </Link>
            <a
              href="https://github.com/shaktech786/morpheus"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-8 py-3 text-sm font-semibold text-zinc-400 transition-colors hover:border-morpheus-dark hover:text-morpheus"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            <span className="text-morpheus">&gt;</span> Everything You Need
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-500">
            A complete mobile-to-desktop AI control system, built with privacy
            and security at its core.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-morpheus-dark hover:bg-surface-hover"
              >
                <div className="text-lg text-morpheus font-bold">
                  {featureIcons[feature.icon]}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-zinc-200 group-hover:text-morpheus transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            <span className="text-morpheus">&gt;</span> Get Started in 3 Steps
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-morpheus-dark bg-morpheus/10 text-sm font-bold text-morpheus">
                  {s.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-200">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{s.description}</p>
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

      {/* Security */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="text-morpheus">&gt;</span> Privacy by Design
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-500">
            No accounts. No cloud storage. No telemetry. All data stays on your
            devices, encrypted end-to-end.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {[
              "All data stored locally on your devices",
              "ECDH + TweetNaCl end-to-end encryption",
              "No accounts or registration required",
              "No analytics, tracking, or advertising",
              "Open-source — audit the code yourself",
              "Voice mode is opt-in and off by default",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-surface p-3">
                <span className="mt-0.5 text-morpheus font-bold">[+]</span>
                <span className="text-sm text-zinc-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
