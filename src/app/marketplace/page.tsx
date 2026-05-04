import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MCP Marketplace",
  description:
    "Browse and install Model Context Protocol servers for Morpheus. GitHub, Slack, databases, cloud providers, and more.",
};

type McpCategory = "developer" | "databases" | "communication" | "cloud" | "ai_ml" | "monitoring" | "smart_home";

interface McpTool {
  id: string;
  name: string;
  description: string;
  category: McpCategory;
  premium: boolean;
}

const CATEGORY_META: Record<McpCategory, { label: string; color: string; icon: string }> = {
  developer: { label: "Developer", color: "#00ff88", icon: ">" },
  databases: { label: "Databases", color: "#00aaff", icon: "db" },
  communication: { label: "Communication", color: "#ff9900", icon: "@" },
  cloud: { label: "Cloud", color: "#aa66ff", icon: "~" },
  ai_ml: { label: "AI / ML", color: "#ff66aa", icon: "*" },
  monitoring: { label: "Monitoring", color: "#ffcc00", icon: "!" },
  smart_home: { label: "Smart Home", color: "#66ffcc", icon: "H" },
};

const tools: McpTool[] = [
  // Developer
  { id: "github", name: "GitHub", description: "Manage repos, issues, PRs, and code search", category: "developer", premium: false },
  { id: "filesystem", name: "Filesystem", description: "Read, write, and search files on the host", category: "developer", premium: false },
  { id: "git", name: "Git", description: "Clone, commit, diff, and manage Git repositories", category: "developer", premium: false },
  { id: "sequential-thinking", name: "Sequential Thinking", description: "Step-by-step reasoning for complex problem solving", category: "developer", premium: false },
  { id: "fetch", name: "Fetch", description: "Retrieve and process content from web URLs", category: "developer", premium: false },
  { id: "playwright", name: "Playwright Browser", description: "Full browser automation — navigate, click, fill forms, scrape data, take screenshots", category: "developer", premium: false },
  { id: "puppeteer", name: "Puppeteer", description: "Headless Chrome automation for screenshots, PDFs, and scraping", category: "developer", premium: false },
  { id: "brave-search", name: "Brave Search", description: "Web search with AI-powered results and research", category: "developer", premium: false },
  // Databases
  { id: "postgres", name: "PostgreSQL", description: "Query and manage PostgreSQL databases", category: "databases", premium: false },
  { id: "sqlite", name: "SQLite", description: "Query and manage local SQLite databases", category: "databases", premium: false },
  { id: "redis", name: "Redis", description: "Interact with Redis key-value stores", category: "databases", premium: false },
  // Communication
  { id: "slack", name: "Slack", description: "Send messages, manage channels, search conversations", category: "communication", premium: false },
  { id: "discord", name: "Discord", description: "Send messages, manage servers, interact with channels and threads", category: "communication", premium: false },
  { id: "gmail", name: "Gmail", description: "Read, send, search, and manage emails via Gmail API", category: "communication", premium: false },
  { id: "twilio-sms", name: "Twilio SMS", description: "Send and receive SMS/MMS messages via Twilio", category: "communication", premium: false },
  { id: "linear", name: "Linear", description: "Create and manage Linear issues and projects", category: "communication", premium: false },
  { id: "notion", name: "Notion", description: "Search and manage Notion pages and databases", category: "communication", premium: false },
  // AI & ML
  { id: "whisper-stt", name: "Whisper STT", description: "Transcribe audio files and real-time speech using OpenAI Whisper", category: "ai_ml", premium: false },
  { id: "elevenlabs-tts", name: "ElevenLabs TTS", description: "Generate natural-sounding speech from text with multiple voices", category: "ai_ml", premium: false },
  { id: "memory-vector", name: "Semantic Memory", description: "Persistent vector memory — store, search, and recall information across sessions", category: "ai_ml", premium: false },
  { id: "openai", name: "OpenAI", description: "Access OpenAI models and embeddings", category: "ai_ml", premium: true },
  { id: "huggingface", name: "Hugging Face", description: "Search models, datasets, and run inference", category: "ai_ml", premium: true },
  // Cloud
  { id: "aws", name: "AWS", description: "Manage AWS resources via CLI commands", category: "cloud", premium: true },
  { id: "google-cloud", name: "Google Cloud", description: "Interact with Google Cloud Platform services", category: "cloud", premium: true },
  // Monitoring
  { id: "sentry", name: "Sentry", description: "Query errors, issues, and performance data", category: "monitoring", premium: true },
  { id: "datadog", name: "Datadog", description: "Query metrics, logs, and monitor infrastructure", category: "monitoring", premium: true },
  // Smart Home
  { id: "morpheus-nest", name: "Morpheus Nest", description: "Control your entire home — lights, thermostat, locks, cameras, speakers, scenes, and routines via Home Assistant", category: "smart_home", premium: false },
];

const categories = Object.keys(CATEGORY_META) as McpCategory[];

export default function MarketplacePage() {
  const freeTools = tools.filter((t) => !t.premium);
  const premiumTools = tools.filter((t) => t.premium);

  return (
    <div className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-center text-4xl font-bold sm:text-5xl">
          <span className="text-morpheus">&gt;</span> MCP Marketplace
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
          Extend your AI agent with Model Context Protocol servers. Toggle any tool in the mobile
          app&apos;s <strong className="text-zinc-300">Tools</strong> tab.
        </p>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-morpheus">{tools.length}</div>
            <div className="text-xs text-zinc-500">Total Servers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-zinc-200">{freeTools.length}</div>
            <div className="text-xs text-zinc-500">Free</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">{premiumTools.length}</div>
            <div className="text-xs text-zinc-500">Pro / Team</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-zinc-200">{categories.length}</div>
            <div className="text-xs text-zinc-500">Categories</div>
          </div>
        </div>

        {/* Category filter legend */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const meta = CATEGORY_META[cat];
            return (
              <span
                key={cat}
                className="rounded-md border px-3 py-1 text-xs font-bold"
                style={{ borderColor: meta.color, color: meta.color, backgroundColor: `${meta.color}10` }}
              >
                [{meta.icon}] {meta.label}
              </span>
            );
          })}
        </div>

        {/* Free tools */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-zinc-200">
            Free Servers <span className="text-sm text-zinc-500">({freeTools.length})</span>
          </h2>
          <p className="mt-1 text-sm text-zinc-500">Available to all users on every plan.</p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {freeTools.map((tool) => {
              const meta = CATEGORY_META[tool.category];
              return (
                <div
                  key={tool.id}
                  className="rounded-xl border border-border bg-surface p-4 transition-all hover:border-morpheus-dark"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-md border text-xs font-bold"
                      style={{ borderColor: meta.color, color: meta.color, backgroundColor: `${meta.color}10` }}
                      aria-hidden="true"
                    >
                      {meta.icon}
                    </span>
                    <div>
                      <div className="font-medium text-zinc-200">{tool.name}</div>
                      <div className="text-xs" style={{ color: meta.color }}>{meta.label}</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-zinc-400">{tool.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Premium tools */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-zinc-200">
            Pro &amp; Team Servers{" "}
            <span className="text-sm text-zinc-500">({premiumTools.length})</span>
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Requires a Pro or Team subscription.{" "}
            <Link href="/pricing" className="text-morpheus hover:underline">
              View plans
            </Link>
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {premiumTools.map((tool) => {
              const meta = CATEGORY_META[tool.category];
              return (
                <div
                  key={tool.id}
                  className="relative rounded-xl border border-border bg-surface p-4 transition-all hover:border-cyan-800"
                >
                  <span className="absolute right-3 top-3 rounded-md border border-cyan-700 bg-cyan-900/30 px-2 py-0.5 text-[10px] font-bold text-cyan-400">
                    PRO
                  </span>
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-md border text-xs font-bold"
                      style={{ borderColor: meta.color, color: meta.color, backgroundColor: `${meta.color}10` }}
                      aria-hidden="true"
                    >
                      {meta.icon}
                    </span>
                    <div>
                      <div className="font-medium text-zinc-200">{tool.name}</div>
                      <div className="text-xs" style={{ color: meta.color }}>{meta.label}</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-zinc-400">{tool.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How it works */}
        <div className="mt-16 rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-morpheus">[how_it_works]</h2>
          <ol className="mt-4 list-inside list-decimal space-y-3 text-sm text-zinc-400">
            <li>
              Open the <strong className="text-zinc-300">Tools</strong> tab in the Morpheus mobile
              app
            </li>
            <li>
              Toggle on any MCP server — if it needs credentials, you&apos;ll be prompted to enter
              them
            </li>
            <li>
              The server is installed on your Morpheus Agent automatically via{" "}
              <code className="rounded bg-zinc-800 px-1 text-xs text-morpheus">npx</code>
            </li>
            <li>Your AI agent can now use the tools provided by that server</li>
          </ol>
        </div>

        {/* Custom MCP */}
        <div className="mt-8 rounded-xl border border-cyan-900/30 bg-surface p-6">
          <h2 className="text-lg font-semibold text-cyan-400">[custom_servers]</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Pro and Team users can connect custom MCP servers. Point Morpheus at any server that
            implements the{" "}
            <span className="text-zinc-300">Model Context Protocol</span> specification.
          </p>
          <div className="mt-4">
            <Link
              href="/docs/mcp-servers"
              className="inline-block rounded-md border border-morpheus bg-morpheus/10 px-4 py-2 text-sm font-semibold text-morpheus transition-colors hover:bg-morpheus/20"
            >
              Read the MCP Docs
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-zinc-200">Ready to extend your AI agent?</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Download Morpheus and start using MCP servers today.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/download"
              className="rounded-lg bg-morpheus px-6 py-3 text-sm font-bold text-black transition-all hover:brightness-110"
            >
              Download
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-morpheus bg-morpheus/10 px-6 py-3 text-sm font-bold text-morpheus transition-all hover:bg-morpheus/20"
            >
              View Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
