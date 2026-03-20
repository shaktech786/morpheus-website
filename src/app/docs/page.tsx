import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Morpheus documentation — capabilities, setup guides, pairing, MCP servers, voice mode, and more.",
};

const guides = [
  {
    title: "What Can Morpheus Do?",
    slug: "capabilities",
    description: "Everything Morpheus can do — from coding and research to emails, automation, and beyond.",
    icon: "[*]",
    sections: [
      "Build & code in any language",
      "Research & summarize information",
      "Send emails & messages",
      "Automate with scripts & cron jobs",
      "Manage files, databases & systems",
      "Browse the web & call APIs",
    ],
  },
  {
    title: "Getting Started",
    slug: "getting-started",
    description: "Install Morpheus, pair your devices, and run your first command.",
    icon: "[>_]",
    sections: [
      "System requirements",
      "Installing the desktop agent",
      "Installing the mobile app",
      "Pairing via QR code",
      "Your first command",
    ],
  },
  {
    title: "Connection Modes",
    slug: "connection-modes",
    description: "LAN, USB/ADB, and Cloudflare Tunnel — how Morpheus connects your devices.",
    icon: "[net]",
    sections: [
      "LAN (local network)",
      "USB / ADB (Android)",
      "Remote access via Cloudflare Tunnel",
      "Connection fallback order",
      "Troubleshooting connections",
    ],
  },
  {
    title: "MCP Servers",
    slug: "mcp-servers",
    description: "Extend Morpheus with Model Context Protocol servers for GitHub, Slack, databases, and more.",
    icon: "[mcp]",
    sections: [
      "What are MCP servers?",
      "Installing MCP servers",
      "Available servers (basic & premium)",
      "Environment variables & credentials",
      "Custom MCP servers",
    ],
  },
  {
    title: "Voice Mode",
    slug: "voice-mode",
    description: "Set up push-to-talk voice commands with the OpenAI Realtime API.",
    icon: "[mic]",
    sections: [
      "Enabling voice mode (Pro)",
      "Push-to-talk usage",
      "Strict voice mode",
      "Audio troubleshooting",
    ],
  },
  {
    title: "Security & Encryption",
    slug: "security-encryption",
    description: "How Morpheus keeps your data safe with ECDH key exchange and TweetNaCl encryption.",
    icon: "[enc]",
    sections: [
      "ECDH key exchange",
      "TweetNaCl encryption",
      "Challenge-response verification",
      "Shared secret management",
      "Instruction sanitization",
    ],
  },
  {
    title: "AI Token Packs",
    slug: "token-packs",
    description: "Use Morpheus without your own Claude subscription by purchasing token packs.",
    icon: "[tok]",
    sections: [
      "How token packs work",
      "Purchasing tokens",
      "Token consumption rates",
      "BYOK vs managed Claude",
    ],
  },
  {
    title: "Proactive Monitoring",
    slug: "proactive-monitoring",
    description: "How Morpheus watches your system and alerts you to problems.",
    icon: "[eye]",
    sections: [
      "Overview",
      "Built-in watchers",
      "Self-healing",
      "Configuration",
    ],
  },
  {
    title: "Workflow Templates",
    slug: "workflows",
    description: "Chain commands into reusable multi-step automations.",
    icon: "[flow]",
    sections: [
      "What are workflows?",
      "Built-in templates",
      "Creating custom workflows",
      "Triggers",
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-center text-4xl font-bold sm:text-5xl">
          <span className="text-morpheus">&gt;</span> Documentation
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
          Everything you need to set up and use Morpheus.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/docs/${guide.slug}`}
              className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-morpheus-dark"
            >
              <div className="text-lg text-morpheus font-bold" aria-hidden="true">
                {guide.icon}
              </div>
              <h2 className="mt-3 text-lg font-semibold text-zinc-200 group-hover:text-morpheus transition-colors">
                {guide.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-400">{guide.description}</p>
              <ul className="mt-4 space-y-1">
                {guide.sections.map((section) => (
                  <li key={section} className="text-xs text-zinc-500">
                    <span className="text-morpheus-dark mr-2">&gt;</span>
                    {section}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-morpheus-dark group-hover:text-morpheus transition-colors">
                Read guide &rarr;
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-border bg-surface p-6 text-center">
          <p className="text-sm text-zinc-400">
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="mailto:support@getmorphe.us" className="text-morpheus hover:underline">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
