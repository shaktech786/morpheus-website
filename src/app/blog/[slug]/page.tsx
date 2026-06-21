import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ------------------------------------------------------------------ */
/*  Blog post data                                                     */
/* ------------------------------------------------------------------ */

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  tag: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

const posts: BlogPost[] = [
  /* ---- v1.0.32 Release ---- */
  {
    slug: "v1-0-32-adaptive-intelligence",
    title: "v1.0.32: Morpheus Now Learns, Adapts, and Improves Itself",
    description:
      "The biggest update yet — parallel execution, correction memory, auto-approval learning, and a self-improvement agent.",
    tag: "Release",
    date: "2026-04-06",
    readTime: "6 min",
    content: (
      <>
        <h2>Morpheus gets smarter every time you use it</h2>
        <p>
          v1.0.32 is the most ambitious Morpheus release yet. Instead of just
          executing commands, Morpheus now <strong>learns from every interaction</strong> and
          adapts its behavior to match how you work.
        </p>

        <h2>Correction Memory</h2>
        <p>
          Say &quot;no, use pnpm not npm&quot; and Morpheus remembers. Next time
          you ask it to install packages, it automatically applies your
          preference. Corrections are stored as fuzzy-matchable patterns with
          confidence scoring — they reinforce when you confirm them and decay
          when unused.
        </p>

        <h2>Auto-Approval Learning</h2>
        <p>
          Tired of approving the same file-write operation for the 50th time?
          Morpheus now tracks your approval patterns. After 20+ consistent
          approvals with a 95%+ rate, it auto-approves that operation type.
          Critical and sudo operations are <em>never</em> auto-approved.
        </p>

        <h2>Parallel Execution</h2>
        <p>
          Morpheus can now run <strong>3 commands simultaneously</strong>. Send
          &quot;run tests&quot; while a deployment is still running. Additional
          tasks queue automatically when all slots are full.
        </p>

        <h2>Self-Improvement Agent</h2>
        <p>
          The most experimental feature: Morpheus can analyze its own
          performance data, identify weaknesses, and propose code changes to
          fix them. With your explicit approval, it uses Claude Code to modify
          its own codebase — every change is git-committed for clean rollback.
        </p>

        <h2>Behavioral Intelligence</h2>
        <p>
          The behavior engine now detects temporal patterns (&quot;you always
          check git status at 9am&quot;), command sequences that should be
          workflows, approval fatigue, and productivity windows. It generates
          daily briefings and proactive suggestions.
        </p>

        <h2>10 New MCP Capabilities</h2>
        <p>
          Playwright for browser automation, Whisper for speech-to-text,
          Slack/Discord/Gmail/Twilio for outbound communication, ElevenLabs
          for text-to-speech, semantic vector memory for cross-session recall,
          and Brave Search for web research. Credential-free servers are
          auto-installed when Morpheus detects a capability gap.
        </p>

        <h2>Bulletproof Pairing</h2>
        <p>
          Network scan now works without generating a QR code first. Version
          negotiation prevents silent protocol mismatches. Lost crypto state
          after app updates is automatically recovered. Device deduplication
          prevents ghost entries.
        </p>
      </>
    ),
  },
  /* ---- Introducing Morpheus ---- */
  {
    slug: "introducing-morpheus",
    title: "Introducing Morpheus: Control Your AI Agent From Your Phone",
    description:
      "We built Morpheus because we wanted to run Claude Code on any machine from anywhere — securely, with voice commands, and without leaving the couch.",
    tag: "Launch",
    date: "2026-03-05",
    readTime: "5 min",
    content: (
      <>
        <h2>Why we built Morpheus</h2>
        <p>
          If you use Claude Code, you already know the drill: you sit at your
          desk, open a terminal, fire up the agent, and type instructions while
          it edits your codebase. It works great — until you step away.
        </p>
        <p>
          Maybe you&apos;re on the couch, maybe you&apos;re grabbing coffee, maybe
          you&apos;re on a train. Your machine is still running. Claude Code is
          still ready. But you have no way to talk to it from your phone.
        </p>
        <p>
          That is exactly the problem Morpheus solves. It turns your mobile
          device into a secure remote control for your AI agent on any machine.
        </p>

        <h2>The problem</h2>
        <p>
          AI coding agents are tied to the machine they run on. There&apos;s no
          native mobile client for Claude Code, no SSH-friendly interface, and
          no way to monitor long-running tasks without being physically at your
          computer. We wanted to change that without sacrificing security — the
          agent can run arbitrary shell commands, after all.
        </p>

        <h2>How it works</h2>
        <p>
          Morpheus has two halves: a lightweight agent (Electron)
          and a mobile app (React Native / Expo). Pairing takes about five
          seconds:
        </p>
        <ol>
          <li>
            <strong>QR scan</strong> — The agent displays a QR code
            containing a WebSocket URL and the server&apos;s public key.
          </li>
          <li>
            <strong>Encrypted handshake</strong> — The mobile app generates its
            own key pair, sends its public key to the agent, and both sides
            derive a shared secret via ECDH (NaCl box).
          </li>
          <li>
            <strong>Secure channel</strong> — Every subsequent message is
            encrypted with NaCl secretbox. No plaintext ever leaves either
            device after pairing completes.
          </li>
          <li>
            <strong>Mobile commands</strong> — Type or speak an instruction on
            your phone. It is encrypted, sent over the WebSocket, decrypted on
            the agent, and forwarded to Claude Code. Responses stream back in
            real time.
          </li>
        </ol>

        <h2>Key features</h2>
        <ul>
          <li>
            <strong>Text commands</strong> — A full terminal-style interface on
            your phone. Send instructions, see Claude&apos;s output, scroll
            through history.
          </li>
          <li>
            <strong>Voice mode</strong> — Hold a button and speak. Morpheus
            transcribes and sends the instruction automatically.
          </li>
          <li>
            <strong>MCP servers</strong> — The Morpheus Agent can use any
            configured MCP server (file system, browser, database, etc.) and
            Morpheus surfaces the results on your phone.
          </li>
          <li>
            <strong>Command history</strong> — Every instruction and response is
            logged locally so you can review what happened while you were away.
          </li>
        </ul>

        <h2>Pricing</h2>
        <p>
          Morpheus is free to use with your own Anthropic API key (BYOK mode).
          If you don&apos;t have a key, we offer a managed Claude proxy with
          token packs:
        </p>
        <ul>
          <li>
            <strong>Free tier</strong> — 50K starter tokens on first launch,
            BYOK mode with unlimited usage.
          </li>
          <li>
            <strong>Pro tier</strong> — Additional features like extended
            history, priority support, and advanced voice options.
          </li>
          <li>
            <strong>Token packs</strong> — Purchase tokens a la carte from
            500K to 15M. They never expire and are consumed per API call.
          </li>
        </ul>

        <h2>Get started</h2>
        <p>
          Morpheus is available now for macOS, Windows, and Linux (desktops
          and servers), and iOS and Android on mobile. Download the agent, scan
          the QR code with your phone, and you&apos;re paired in seconds.
        </p>
        <p>
          <Link
            href="/download"
            className="inline-block rounded-lg border border-morpheus bg-morpheus/10 px-4 py-2 text-sm font-semibold text-morpheus transition-colors hover:bg-morpheus/20"
          >
            Download Morpheus
          </Link>
        </p>
      </>
    ),
  },

  /* ---- E2E Encryption ---- */
  {
    slug: "e2e-encryption",
    title: "How We Built E2E Encryption for Mobile-to-Machine AI Control",
    description:
      "A deep dive into our ECDH key exchange, TweetNaCl encryption, and challenge-response pairing protocol.",
    tag: "Engineering",
    date: "2026-03-05",
    readTime: "8 min",
    content: (
      <>
        <h2>Why encryption matters here</h2>
        <p>
          Morpheus is not a chat app. The commands you send from your phone are
          forwarded to an AI agent that can read files, write code, run shell
          commands, and interact with databases on your machine. If an attacker
          intercepts or tampers with those messages, the consequences are
          severe — arbitrary code execution on your workstation.
        </p>
        <p>
          That is why every message between the mobile app and the Morpheus Agent
          companion is end-to-end encrypted. Not TLS-only. Not &quot;encrypted
          in transit.&quot; Full NaCl secretbox encryption where only the two
          paired devices hold the key.
        </p>

        <h2>ECDH key exchange with TweetNaCl</h2>
        <p>
          We use TweetNaCl&apos;s <code>nacl.box</code> API, which implements
          Curve25519-XSalsa20-Poly1305. The key exchange happens during the
          initial QR pairing flow:
        </p>
        <div className="bg-zinc-900 border border-border rounded-lg p-4 overflow-x-auto text-sm">
          <pre className="text-zinc-300">
{`// Agent generates a key pair on startup
const serverKeyPair = nacl.box.keyPair();

// QR code encodes the WebSocket URL + server public key
const qrPayload = JSON.stringify({
  url: "ws://192.168.1.42:3847",
  publicKey: encodeBase64(serverKeyPair.publicKey),
});

// Mobile scans QR, generates its own key pair
const clientKeyPair = nacl.box.keyPair();

// Mobile sends its public key to the agent
ws.send(JSON.stringify({
  type: "pair_request",
  publicKey: encodeBase64(clientKeyPair.publicKey),
}));

// Both sides derive the same shared secret
const sharedSecret = nacl.box.before(
  otherSidePublicKey,
  ownSecretKey
);`}
          </pre>
        </div>
        <p>
          The shared secret is a 32-byte key derived from the Curve25519
          Diffie-Hellman exchange. Both sides compute the same value
          independently — it never travels over the wire.
        </p>

        <h2>What is in the QR code</h2>
        <p>The QR code displayed by the agent contains a JSON payload with:</p>
        <ul>
          <li>
            <strong>WebSocket URL</strong> — The LAN address where the agent is
            listening. Remote access uses a persistent agent device ID to route
            through the relay, not a tunnel URL.
          </li>
          <li>
            <strong>Server public key</strong> — Base64-encoded Curve25519
            public key so the mobile app can immediately begin the ECDH
            handshake.
          </li>
        </ul>
        <p>
          No secrets are embedded in the QR code. The public key is, by
          definition, safe to expose. The critical secret (the shared key) is
          derived after the handshake completes.
        </p>

        <h2>Challenge-response on reconnect</h2>
        <p>
          Once paired, the mobile app stores the shared secret in the device&apos;s
          secure enclave (iOS Keychain / Android Keystore via Expo SecureStore).
          When it reconnects — after a network change, app restart, or sleep
          cycle — it needs to prove it still holds the secret without
          retransmitting it.
        </p>
        <div className="bg-zinc-900 border border-border rounded-lg p-4 overflow-x-auto text-sm">
          <pre className="text-zinc-300">
{`// Agent sends a challenge on reconnect
const challenge = nacl.randomBytes(32);
const expected = encodeBase64(nacl.hash(challenge));

ws.send(JSON.stringify({
  reconnect: true,
  challenge: Array.from(challenge),
}));

// Mobile solves the challenge
const solution = encodeBase64(
  nacl.hash(new Uint8Array(challenge))
);

ws.send(JSON.stringify({
  type: "challenge_response",
  solution,
}));

// Agent verifies: solution === expected`}
          </pre>
        </div>
        <p>
          The challenge is 32 random bytes. The expected answer is the
          Base64-encoded SHA-512 hash (via <code>nacl.hash</code>). Because the
          mobile app must produce the correct hash, an attacker cannot replay a
          previous session or impersonate the device.
        </p>

        <h2>NaCl secretbox for all messages</h2>
        <p>
          After pairing (or successful reconnect), every message is encrypted
          with <code>nacl.secretbox</code> — XSalsa20-Poly1305 symmetric
          encryption using the shared secret:
        </p>
        <div className="bg-zinc-900 border border-border rounded-lg p-4 overflow-x-auto text-sm">
          <pre className="text-zinc-300">
{`// Encrypt
const nonce = nacl.randomBytes(24);
const ciphertext = nacl.secretbox(
  decodeUTF8(JSON.stringify(message)),
  nonce,
  sharedSecret
);

// Send as { nonce, ciphertext } (both Base64)

// Decrypt
const plaintext = nacl.secretbox.open(
  ciphertext,
  nonce,
  sharedSecret
);`}
          </pre>
        </div>
        <p>
          Each message gets a fresh 24-byte random nonce. If either side
          receives a message that fails to decrypt (wrong key, tampered
          ciphertext), it is silently dropped. No plaintext is accepted after
          the shared secret is established.
        </p>

        <h2>No plaintext after pairing</h2>
        <p>
          This is a hard rule in Morpheus. Once <code>sharedSecret</code> is set
          on both sides, any incoming message that is not valid encrypted JSON
          is rejected. There is no fallback to plaintext, no &quot;debug
          mode,&quot; and no way to downgrade the connection. If encryption
          fails, the connection is dropped and the user must re-pair.
        </p>

        <h2>Instruction sanitization</h2>
        <p>
          Encryption protects the transport layer, but we also need to protect
          against prompt injection at the application layer. Before any
          instruction is forwarded to Claude Code, Morpheus sanitizes the input
          to strip known injection patterns — things like system prompt
          overrides, role-switching tokens, and encoded escape sequences.
        </p>
        <p>
          This is defense in depth. Even if an attacker somehow compromised the
          encrypted channel, the Morpheus Agent would still reject malformed
          instructions before they reach the AI model.
        </p>
      </>
    ),
  },

  /* ---- AI Token Packs ---- */
  {
    slug: "ai-token-packs",
    title: "AI Token Packs: Use Morpheus Without a Claude Subscription",
    description:
      "Not everyone has an Anthropic API key. Here's how we built a managed Claude proxy so anyone can use Morpheus.",
    tag: "Product",
    date: "2026-03-05",
    readTime: "4 min",
    content: (
      <>
        <h2>The problem</h2>
        <p>
          Claude Code is powerful, but using it requires an Anthropic API key or
          a Max subscription. That is a barrier for a lot of developers — people
          who want to try AI-assisted coding but haven&apos;t committed to a
          monthly plan, or teams where only some members have API access.
        </p>
        <p>
          We wanted Morpheus to work for everyone, not just developers who
          already have an Anthropic account. So we built token packs.
        </p>

        <h2>Managed Claude proxy</h2>
        <p>
          When you use token packs, your instructions are routed through a
          Supabase edge function that acts as a proxy to the Anthropic API. The
          edge function handles authentication, token metering, and streaming
          responses back to your device. Your instructions are still end-to-end
          encrypted between your phone and your machine — the proxy only sees
          the request after the agent decrypts it and forwards it.
        </p>

        <h2>50K free starter tokens</h2>
        <p>
          Every new Morpheus user gets 50,000 tokens for free on first launch.
          That is enough for roughly 10 commands — enough to pair your device,
          try a few instructions, and decide if Morpheus fits your workflow
          before spending anything.
        </p>

        <h2>Token pack tiers</h2>
        <p>
          We offer four token pack sizes, each a one-time purchase with no
          expiration:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-border text-zinc-300">
                <th className="py-3 pr-4 font-semibold">Pack</th>
                <th className="py-3 pr-4 font-semibold">Tokens</th>
                <th className="py-3 pr-4 font-semibold">Price</th>
                <th className="py-3 font-semibold">Per 1K tokens</th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-morpheus font-medium">Starter</td>
                <td className="py-3 pr-4">500,000</td>
                <td className="py-3 pr-4">$4.99</td>
                <td className="py-3">$0.010</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-morpheus font-medium">Builder</td>
                <td className="py-3 pr-4">2,000,000</td>
                <td className="py-3 pr-4">$16.99</td>
                <td className="py-3">$0.0085</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-4 text-morpheus font-medium">Pro</td>
                <td className="py-3 pr-4">5,000,000</td>
                <td className="py-3 pr-4">$34.99</td>
                <td className="py-3">$0.007</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-morpheus font-medium">Enterprise</td>
                <td className="py-3 pr-4">15,000,000</td>
                <td className="py-3 pr-4">$79.99</td>
                <td className="py-3">$0.0053</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Larger packs have a lower per-token cost. All tokens are consumed on a
          per-API-call basis — both input and output tokens count against your
          balance.
        </p>

        <h2>Tokens never expire</h2>
        <p>
          Unlike a monthly subscription, token packs are a one-time purchase.
          Buy them when you need them, use them at your own pace. There is no
          &quot;use it or lose it&quot; pressure, no auto-renewal, and no
          surprise charges.
        </p>

        <h2>BYOK mode</h2>
        <p>
          If you already have an Anthropic API key, you can use Morpheus for
          free with unlimited usage. Just enter your key in the agent
          settings and all requests go directly to the Anthropic API. No proxy,
          no token metering, no cost from us. This is the free tier — you only
          pay Anthropic directly for what you use.
        </p>

        <h2>Purchase and entitlement tracking</h2>
        <p>
          Token pack purchases are handled through RevenueCat, which manages
          entitlements across iOS and Android. After purchase, your token
          balance is synced to your account and displayed in the terminal header
          as a color-coded pill:
        </p>
        <ul>
          <li>
            <span className="text-green-400 font-semibold">Green</span> —
            Healthy balance (more than 25% remaining)
          </li>
          <li>
            <span className="text-yellow-400 font-semibold">Yellow</span> —
            Running low (10-25% remaining)
          </li>
          <li>
            <span className="text-red-400 font-semibold">Red</span> — Nearly
            depleted (under 10% remaining)
          </li>
        </ul>
        <p>
          You always know exactly where you stand, and you can top up with
          another pack at any time without losing your remaining balance.
        </p>
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Static params + metadata                                           */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://getmorphe.us/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://getmorphe.us/blog/${post.slug}`,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-morpheus"
        >
          &larr; Back to Blog
        </Link>

        {/* Header */}
        <header className="mt-8">
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-md border border-morpheus-dark bg-morpheus/10 px-2 py-0.5 font-bold text-morpheus">
              {post.tag}
            </span>
            <time dateTime={post.date} className="text-zinc-500">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span className="text-zinc-600">{post.readTime} read</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-zinc-200 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-zinc-400 leading-relaxed">
            {post.description}
          </p>
        </header>

        {/* Divider */}
        <hr className="my-10 border-border" />

        {/* Article body */}
        <article
          className={[
            "prose-custom",
            "[&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-200",
            "[&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-zinc-300",
            "[&_p]:mb-4 [&_p]:text-zinc-400 [&_p]:leading-relaxed",
            "[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-zinc-400 [&_ul]:leading-relaxed [&_ul]:space-y-2",
            "[&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-zinc-400 [&_ol]:leading-relaxed [&_ol]:space-y-2",
            "[&_li]:pl-1",
            "[&_code]:rounded [&_code]:bg-zinc-800 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-sm [&_code]:text-morpheus",
            "[&_pre_code]:bg-transparent [&_pre_code]:px-0 [&_pre_code]:py-0",
            "[&_strong]:text-zinc-300 [&_strong]:font-semibold",
            "[&_a]:text-morpheus [&_a]:underline [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-morpheus/80",
            "[&_table]:mb-4",
          ].join(" ")}
        >
          {post.content}
        </article>

        {/* Footer */}
        <hr className="my-10 border-border" />
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="text-sm text-zinc-500 transition-colors hover:text-morpheus"
          >
            &larr; Back to Blog
          </Link>
          <Link
            href="/download"
            className="rounded-lg border border-morpheus bg-morpheus/10 px-4 py-2 text-sm font-semibold text-morpheus transition-colors hover:bg-morpheus/20"
          >
            Download Morpheus
          </Link>
        </div>
      </div>
    </div>
  );
}
