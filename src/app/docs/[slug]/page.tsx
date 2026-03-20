import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ------------------------------------------------------------------ */
/*  Guide content registry                                             */
/* ------------------------------------------------------------------ */

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface Guide {
  title: string;
  description: string;
  sections: Section[];
}

const guides: Record<string, Guide> = {
  /* ---------------------------------------------------------------- */
  /*  1. Getting Started                                               */
  /* ---------------------------------------------------------------- */
  "getting-started": {
    title: "Getting Started",
    description:
      "Install Morpheus, pair your devices, and run your first command.",
    sections: [
      {
        id: "system-requirements",
        title: "System Requirements",
        content: (
          <>
            <p>
              Morpheus requires a desktop machine and a mobile device. The
              minimum supported platforms are:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-zinc-300">
                    <th className="pb-2 pr-6 font-semibold">Platform</th>
                    <th className="pb-2 font-semibold">Minimum Version</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-6">macOS</td>
                    <td className="py-2">10.12 (Sierra) or later</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-6">Windows</td>
                    <td className="py-2">Windows 10 or later</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-6">Linux</td>
                    <td className="py-2">glibc 2.17+ (Ubuntu 18.04, Fedora 27, etc.)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-6">iOS</td>
                    <td className="py-2">iOS 13 or later</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-6">Android</td>
                    <td className="py-2">Android 7.0 (Nougat) or later</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ),
      },
      {
        id: "installing-desktop",
        title: "Installing the Desktop Agent",
        content: (
          <>
            <p>
              Download the latest release from the{" "}
              <a
                href="https://github.com/shaktech786/morpheus/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-morpheus hover:underline"
              >
                GitHub releases page
              </a>
              .
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li>
                <strong className="text-zinc-200">macOS</strong> &mdash;
                Download the <code>.dmg</code>, open it, and drag Morpheus into
                your Applications folder.
              </li>
              <li>
                <strong className="text-zinc-200">Windows</strong> &mdash; Run
                the <code>.exe</code> installer and follow the prompts.
              </li>
              <li>
                <strong className="text-zinc-200">Linux</strong> &mdash; Use the{" "}
                <code>.AppImage</code> (chmod +x and run) or install the{" "}
                <code>.deb</code> package.
              </li>
            </ul>
            <p className="mt-4">
              On first launch, the desktop agent starts a local WebSocket server
              on port <code>3847</code> and displays a QR code for pairing.
            </p>
          </>
        ),
      },
      {
        id: "installing-mobile",
        title: "Installing the Mobile App",
        content: (
          <>
            <p>The Morpheus mobile app is available on both major app stores:</p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li>
                <strong className="text-zinc-200">iOS</strong> &mdash; Search
                for &quot;Morpheus AI&quot; on the{" "}
                <span className="text-morpheus">App Store</span> or use the
                direct link from the{" "}
                <Link href="/download" className="text-morpheus hover:underline">
                  download page
                </Link>
                .
              </li>
              <li>
                <strong className="text-zinc-200">Android</strong> &mdash;
                Search for &quot;Morpheus AI&quot; on the{" "}
                <span className="text-morpheus">Google Play Store</span> or use
                the direct link from the{" "}
                <Link href="/download" className="text-morpheus hover:underline">
                  download page
                </Link>
                .
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "pairing",
        title: "Pairing via QR Code",
        content: (
          <>
            <p>
              Pairing establishes an end-to-end encrypted channel between your
              desktop and mobile device using ECDH key exchange.
            </p>
            <ol className="mt-4 space-y-3 text-zinc-400 list-decimal list-inside">
              <li>
                Open the <strong className="text-zinc-200">desktop app</strong>.
                It displays a QR code containing the WebSocket URL and the
                server&apos;s public key.
              </li>
              <li>
                On the <strong className="text-zinc-200">mobile app</strong>, go
                to <span className="text-morpheus">Devices &rarr; Add Device</span>{" "}
                and scan the QR code.
              </li>
              <li>
                The mobile app generates its own keypair and sends its public key
                to the desktop. Both sides derive a shared secret via{" "}
                <code>nacl.box.before()</code>.
              </li>
              <li>
                A challenge-response handshake confirms both devices hold the
                same secret. The pairing is now complete.
              </li>
            </ol>
            <div className="mt-4 rounded-lg border border-border bg-zinc-900 p-4">
              <p className="text-xs text-zinc-500">
                <span className="text-morpheus font-bold">TIP</span> &mdash;
                Both devices must be reachable over the network. For LAN pairing,
                ensure both are on the same WiFi network.
              </p>
            </div>
          </>
        ),
      },
      {
        id: "first-command",
        title: "Your First Command",
        content: (
          <>
            <p>
              Once paired, the mobile app connects automatically. Open the
              terminal view and type a command:
            </p>
            <div className="mt-4 rounded-lg border border-border bg-zinc-900 p-4 font-mono text-sm">
              <p className="text-zinc-500">
                <span className="text-morpheus">$</span> echo hello
              </p>
              <p className="mt-1 text-zinc-300">hello</p>
            </div>
            <p className="mt-4">
              The command is encrypted, sent to the desktop agent over WebSocket,
              executed by the AI agent (Claude), and the output is streamed back
              to your phone. Try <code>ls</code>, <code>pwd</code>, or ask
              Claude a question to see it in action.
            </p>
          </>
        ),
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  2. Connection Modes                                              */
  /* ---------------------------------------------------------------- */
  "connection-modes": {
    title: "Connection Modes",
    description:
      "LAN, USB/ADB, and Cloudflare Tunnel -- how Morpheus connects your devices.",
    sections: [
      {
        id: "lan",
        title: "LAN (Local Network)",
        content: (
          <>
            <p>
              The default and fastest connection mode. Both devices must be on
              the same WiFi network. The desktop agent listens on port{" "}
              <code>3847</code> and the mobile app connects directly via the
              local IP address.
            </p>
            <div className="mt-4 rounded-lg border border-border bg-zinc-900 p-4 font-mono text-sm">
              <span className="text-zinc-500">ws://</span>
              <span className="text-zinc-300">192.168.1.42</span>
              <span className="text-zinc-500">:3847</span>
            </div>
            <p className="mt-4 text-zinc-400">
              LAN connections have the lowest latency and highest reliability.
              This is the recommended mode for home and office use.
            </p>
          </>
        ),
      },
      {
        id: "usb-adb",
        title: "USB / ADB (Android)",
        content: (
          <>
            <p>
              For Android devices, you can connect over USB using ADB port
              forwarding. This is useful when WiFi is unavailable or unreliable.
            </p>
            <h3 className="mt-4 text-base font-semibold text-zinc-200">Setup</h3>
            <ol className="mt-2 space-y-2 text-zinc-400 list-decimal list-inside">
              <li>
                Enable <strong className="text-zinc-200">Developer Options</strong>{" "}
                and <strong className="text-zinc-200">USB Debugging</strong> on
                your Android device.
              </li>
              <li>Connect via USB cable and authorize the computer.</li>
              <li>
                Run the port forward command:
                <div className="mt-2 rounded-lg border border-border bg-zinc-900 p-4 font-mono text-sm">
                  <span className="text-morpheus">$</span>{" "}
                  <span className="text-zinc-300">
                    adb forward tcp:3847 tcp:3847
                  </span>
                </div>
              </li>
              <li>
                The mobile app connects to{" "}
                <code>ws://127.0.0.1:3847</code>.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "remote-tunnel",
        title: "Remote Access via Cloudflare Tunnel",
        content: (
          <>
            <p>
              <span className="rounded bg-morpheus/10 px-2 py-0.5 text-xs font-semibold text-morpheus">
                PRO
              </span>{" "}
              Remote access lets you control your desktop from anywhere. The
              desktop agent creates a Cloudflare Tunnel that proxies WebSocket
              traffic through Cloudflare&apos;s network.
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li>No port forwarding or static IP required.</li>
              <li>
                Traffic is still end-to-end encrypted &mdash; Cloudflare sees
                connection metadata but cannot read message contents.
              </li>
              <li>Tunnels are temporary and created on demand.</li>
            </ul>
            <div className="mt-4 rounded-lg border border-border bg-zinc-900 p-4 font-mono text-sm">
              <span className="text-zinc-500">wss://</span>
              <span className="text-zinc-300">
                abc123-example.trycloudflare.com
              </span>
            </div>
          </>
        ),
      },
      {
        id: "fallback-order",
        title: "Connection Fallback Order",
        content: (
          <>
            <p>
              When connecting, the mobile app tries each mode in order and uses
              the first one that succeeds:
            </p>
            <ol className="mt-4 space-y-2 text-zinc-400 list-decimal list-inside">
              <li>
                <strong className="text-zinc-200">LAN IP</strong> &mdash;{" "}
                <code>ws://192.168.x.x:3847</code>
              </li>
              <li>
                <strong className="text-zinc-200">USB / ADB</strong> &mdash;{" "}
                <code>ws://127.0.0.1:3847</code>
              </li>
              <li>
                <strong className="text-zinc-200">Cloudflare Tunnel</strong>{" "}
                &mdash; <code>wss://xxx.trycloudflare.com</code>
              </li>
            </ol>
            <p className="mt-4 text-zinc-400">
              This happens automatically. No manual configuration is needed
              unless you want to force a specific mode in settings.
            </p>
          </>
        ),
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting Connections",
        content: (
          <>
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  Firewall blocking port 3847
                </h3>
                <p className="mt-1 text-zinc-400">
                  Ensure your firewall allows inbound connections on TCP port
                  3847. On macOS, you may need to allow Morpheus in System
                  Settings &rarr; Privacy &amp; Security &rarr; Firewall.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  Devices on different subnets
                </h3>
                <p className="mt-1 text-zinc-400">
                  Some routers isolate WiFi clients (AP isolation). Ensure both
                  devices are on the same subnet. Guest networks typically
                  isolate clients &mdash; use the main network instead.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  ADB not detecting device
                </h3>
                <p className="mt-1 text-zinc-400">
                  Verify USB debugging is enabled in Android Developer Options.
                  Run <code>adb devices</code> to confirm the device is listed.
                  If not, try a different USB cable or port.
                </p>
              </div>
            </div>
          </>
        ),
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  3. MCP Servers                                                   */
  /* ---------------------------------------------------------------- */
  "mcp-servers": {
    title: "MCP Servers",
    description:
      "Extend Morpheus with Model Context Protocol servers for GitHub, Slack, databases, and more.",
    sections: [
      {
        id: "what-are-mcp-servers",
        title: "What Are MCP Servers?",
        content: (
          <>
            <p>
              The{" "}
              <strong className="text-zinc-200">
                Model Context Protocol (MCP)
              </strong>{" "}
              is an open standard that lets AI agents interact with external
              tools. MCP servers expose capabilities &mdash; like reading GitHub
              issues, querying databases, or managing infrastructure &mdash; as
              structured tools that Claude can call.
            </p>
            <p className="mt-3">
              Morpheus supports installing and managing MCP servers directly from
              the mobile app, giving Claude access to your tools without manual
              configuration.
            </p>
          </>
        ),
      },
      {
        id: "installing-mcp",
        title: "Installing MCP Servers",
        content: (
          <>
            <ol className="space-y-2 text-zinc-400 list-decimal list-inside">
              <li>
                Open the <span className="text-morpheus">Tools</span> tab in
                the mobile app.
              </li>
              <li>Browse available MCP servers and toggle them on.</li>
              <li>
                If the server requires credentials (API keys, tokens), enter
                them in the server&apos;s settings panel.
              </li>
              <li>
                The configuration is synced to the desktop agent, which
                starts the MCP server process.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "available-servers",
        title: "Available Servers",
        content: (
          <>
            <h3 className="text-base font-semibold text-zinc-200">
              Free Servers
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                "File System",
                "Git",
                "Shell",
                "Puppeteer",
                "SQLite",
                "Memory",
                "Sequential Thinking",
                "Markdown",
                "Clipboard",
                "Everything Search",
                "Calculator",
                "System Info",
                "Docker",
                "Cron",
                "SSH",
                "Process Manager",
              ].map((s) => (
                <span
                  key={s}
                  className="rounded border border-border bg-zinc-900 px-2 py-1 text-xs text-zinc-400"
                >
                  {s}
                </span>
              ))}
            </div>

            <h3 className="mt-6 text-base font-semibold text-zinc-200">
              Premium Servers{" "}
              <span className="rounded bg-morpheus/10 px-2 py-0.5 text-xs font-semibold text-morpheus">
                PRO
              </span>
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                "AWS",
                "GCP",
                "OpenAI",
                "Hugging Face",
                "Sentry",
                "Datadog",
                "New Relic",
              ].map((s) => (
                <span
                  key={s}
                  className="rounded border border-morpheus-dark/50 bg-morpheus-dim px-2 py-1 text-xs text-morpheus-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </>
        ),
      },
      {
        id: "environment-variables",
        title: "Environment Variables & Credentials",
        content: (
          <>
            <p>
              Many MCP servers require API keys or tokens. These are stored
              securely and passed to the server process as environment variables.
            </p>
            <div className="mt-4 rounded-lg border border-border bg-zinc-900 p-4 font-mono text-sm">
              <p className="text-zinc-500"># Example: GitHub MCP server</p>
              <p className="text-zinc-300">
                GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
              </p>
            </div>
            <p className="mt-4 text-zinc-400">
              Credentials entered in the mobile app are encrypted and sent to the
              desktop agent. They are stored in the desktop&apos;s secure storage
              (Keychain on macOS, Credential Manager on Windows, libsecret on
              Linux) and never leave your devices.
            </p>
          </>
        ),
      },
      {
        id: "custom-mcp",
        title: "Custom MCP Servers",
        content: (
          <>
            <p>
              <span className="rounded bg-morpheus/10 px-2 py-0.5 text-xs font-semibold text-morpheus">
                PRO
              </span>{" "}
              Point Morpheus at your own MCP server by providing its URL in
              Settings &rarr; MCP &rarr; Custom Server.
            </p>
            <p className="mt-3 text-zinc-400">
              Custom servers must implement the MCP protocol. Morpheus connects
              to them over stdio or HTTP and exposes their tools to Claude
              automatically. This is ideal for internal tools, proprietary APIs,
              or servers you have built yourself.
            </p>
          </>
        ),
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  4. Voice Mode                                                    */
  /* ---------------------------------------------------------------- */
  "voice-mode": {
    title: "Voice Mode",
    description:
      "Set up push-to-talk voice commands with the OpenAI Realtime API.",
    sections: [
      {
        id: "enabling",
        title: "Enabling Voice Mode",
        content: (
          <>
            <p>
              <span className="rounded bg-morpheus/10 px-2 py-0.5 text-xs font-semibold text-morpheus">
                PRO
              </span>{" "}
              Voice mode requires an OpenAI Realtime API key configured on the
              desktop agent.
            </p>
            <ol className="mt-4 space-y-2 text-zinc-400 list-decimal list-inside">
              <li>
                On the <strong className="text-zinc-200">desktop app</strong>,
                go to Settings &rarr; Voice and enter your OpenAI API key.
              </li>
              <li>
                On the <strong className="text-zinc-200">mobile app</strong>,
                go to Settings &rarr; Voice Mode &rarr; Enable.
              </li>
              <li>
                Grant microphone permissions when prompted on mobile.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "push-to-talk",
        title: "Push-to-Talk Usage",
        content: (
          <>
            <p>
              Hold the <span className="text-morpheus">microphone button</span>{" "}
              on the mobile app to speak your command. Release to send the
              transcribed text to Claude.
            </p>
            <p className="mt-3 text-zinc-400">
              The audio is streamed to the OpenAI Realtime API for
              transcription. The resulting text command is then processed by
              Claude on the desktop agent exactly as if you had typed it.
            </p>
          </>
        ),
      },
      {
        id: "strict-mode",
        title: "Strict Voice Mode",
        content: (
          <>
            <p>
              When strict voice mode is enabled, the text input field is
              disabled. Only voice commands are accepted. This is useful for
              hands-free scenarios where you want to avoid accidental typed
              input.
            </p>
            <p className="mt-3 text-zinc-400">
              Enable it in Settings &rarr; Voice Mode &rarr; Strict Mode.
              Toggle it off at any time to restore the text input.
            </p>
          </>
        ),
      },
      {
        id: "audio-troubleshooting",
        title: "Audio Troubleshooting",
        content: (
          <>
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  Microphone not working
                </h3>
                <p className="mt-1 text-zinc-400">
                  Check that the mobile app has microphone permissions. On iOS,
                  go to Settings &rarr; Morpheus &rarr; Microphone. On Android,
                  go to Settings &rarr; Apps &rarr; Morpheus &rarr; Permissions.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  Transcription not responding
                </h3>
                <p className="mt-1 text-zinc-400">
                  Verify your OpenAI API key is valid on the desktop agent. Go to
                  Desktop Settings &rarr; Voice and test the key. Also ensure the
                  desktop has an active internet connection for the Realtime API.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  High latency or dropped audio
                </h3>
                <p className="mt-1 text-zinc-400">
                  Voice commands require a stable network connection. If using a
                  Cloudflare Tunnel, latency may be higher. For best results, use
                  LAN mode.
                </p>
              </div>
            </div>
          </>
        ),
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  5. Security & Encryption                                         */
  /* ---------------------------------------------------------------- */
  "security-encryption": {
    title: "Security & Encryption",
    description:
      "How Morpheus keeps your data safe with ECDH key exchange and TweetNaCl encryption.",
    sections: [
      {
        id: "ecdh-key-exchange",
        title: "ECDH Key Exchange",
        content: (
          <>
            <p>
              When you scan the QR code, the following happens:
            </p>
            <ol className="mt-4 space-y-2 text-zinc-400 list-decimal list-inside">
              <li>
                The QR code encodes the WebSocket URL and the desktop&apos;s{" "}
                <strong className="text-zinc-200">Curve25519 public key</strong>.
              </li>
              <li>
                The mobile app generates its own Curve25519 keypair and sends
                its public key to the desktop.
              </li>
              <li>
                Both sides compute a shared secret using{" "}
                <code>nacl.box.before(theirPublicKey, mySecretKey)</code>.
              </li>
              <li>
                The shared secret is never transmitted &mdash; it is derived
                independently on each device.
              </li>
            </ol>
            <div className="mt-4 rounded-lg border border-border bg-zinc-900 p-4 font-mono text-sm">
              <p className="text-zinc-500">// Shared secret derivation</p>
              <p className="text-zinc-300">
                const sharedSecret = nacl.box.before(
              </p>
              <p className="text-zinc-300 pl-4">theirPublicKey,</p>
              <p className="text-zinc-300 pl-4">mySecretKey</p>
              <p className="text-zinc-300">);</p>
            </div>
          </>
        ),
      },
      {
        id: "tweetnacl-encryption",
        title: "TweetNaCl Encryption",
        content: (
          <>
            <p>
              All messages after pairing are encrypted using{" "}
              <strong className="text-zinc-200">NaCl secretbox</strong>, which
              provides authenticated encryption with the{" "}
              <strong className="text-zinc-200">XSalsa20-Poly1305</strong>{" "}
              algorithm.
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li>
                A unique <strong className="text-zinc-200">24-byte random nonce</strong>{" "}
                is generated for every message.
              </li>
              <li>
                The nonce is prepended to the ciphertext and sent alongside it.
              </li>
              <li>
                The receiver decrypts using the shared secret and the nonce.
              </li>
              <li>
                Poly1305 MAC ensures messages cannot be tampered with.
              </li>
            </ul>
            <div className="mt-4 rounded-lg border border-border bg-zinc-900 p-4 font-mono text-sm">
              <p className="text-zinc-500">// Encrypting a message</p>
              <p className="text-zinc-300">
                const nonce = nacl.randomBytes(24);
              </p>
              <p className="text-zinc-300">
                const encrypted = nacl.secretbox(message, nonce, sharedSecret);
              </p>
            </div>
          </>
        ),
      },
      {
        id: "challenge-response",
        title: "Challenge-Response Verification",
        content: (
          <>
            <p>
              When a previously paired device reconnects, the server verifies its
              identity with a challenge-response protocol:
            </p>
            <ol className="mt-4 space-y-2 text-zinc-400 list-decimal list-inside">
              <li>
                The desktop generates <strong className="text-zinc-200">32 random bytes</strong>{" "}
                and sends them to the mobile app.
              </li>
              <li>
                The mobile app computes{" "}
                <code>nacl.hash(challengeBytes)</code> and sends back the
                base64-encoded result.
              </li>
              <li>
                The desktop independently computes the same hash and compares.
                If they match, the device is authenticated.
              </li>
            </ol>
            <p className="mt-4 text-zinc-400">
              This prevents replay attacks and ensures only the original paired
              device can reconnect.
            </p>
          </>
        ),
      },
      {
        id: "shared-secret-storage",
        title: "Shared Secret Storage",
        content: (
          <>
            <p>
              Shared secrets are stored using platform-specific secure storage:
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li>
                <strong className="text-zinc-200">Desktop</strong> &mdash;
                SQLite database with Electron&apos;s safeStorage encryption.
              </li>
              <li>
                <strong className="text-zinc-200">iOS</strong> &mdash;
                Keychain Services, hardware-backed on devices with Secure
                Enclave.
              </li>
              <li>
                <strong className="text-zinc-200">Android</strong> &mdash;
                Android Keystore via Expo SecureStore.
              </li>
            </ul>
            <p className="mt-4 text-zinc-400">
              Secrets never leave the device and are not included in backups.
            </p>
          </>
        ),
      },
      {
        id: "instruction-sanitization",
        title: "Instruction Sanitization",
        content: (
          <>
            <p>
              Commands sent to the AI agent are sanitized to mitigate prompt
              injection:
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li>
                Special characters and control sequences are escaped.
              </li>
              <li>
                Input length limits are enforced to prevent context window
                abuse.
              </li>
              <li>
                System prompts are isolated from user input to prevent
                override attempts.
              </li>
            </ul>
          </>
        ),
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  6. Token Packs                                                   */
  /* ---------------------------------------------------------------- */
  "token-packs": {
    title: "AI Token Packs",
    description:
      "Use Morpheus without your own Claude subscription by purchasing token packs.",
    sections: [
      {
        id: "how-they-work",
        title: "How Token Packs Work",
        content: (
          <>
            <p>
              Morpheus can proxy Claude API requests through a managed Supabase
              edge function. Each API call deducts tokens from your balance based
              on the combined input and output token count.
            </p>
            <p className="mt-3 text-zinc-400">
              This means you can use Morpheus without an Anthropic API key. Just
              purchase a token pack and start sending commands.
            </p>
          </>
        ),
      },
      {
        id: "purchasing",
        title: "Purchasing Tokens",
        content: (
          <>
            <p>
              Token packs are available as in-app purchases via RevenueCat.
              Four tiers are available:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-zinc-300">
                    <th className="pb-2 pr-6 font-semibold">Pack</th>
                    <th className="pb-2 pr-6 font-semibold">Tokens</th>
                    <th className="pb-2 font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-400">
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-6">Starter</td>
                    <td className="py-2 pr-6">500,000</td>
                    <td className="py-2">$4.99</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-6">Standard</td>
                    <td className="py-2 pr-6">2,000,000</td>
                    <td className="py-2">$16.99</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-6">Pro</td>
                    <td className="py-2 pr-6">5,000,000</td>
                    <td className="py-2">$34.99</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-6">Enterprise</td>
                    <td className="py-2 pr-6">15,000,000</td>
                    <td className="py-2">$79.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ),
      },
      {
        id: "consumption",
        title: "Token Consumption Rates",
        content: (
          <>
            <p>
              Token usage depends on the complexity of the command and the
              context length:
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li>
                <strong className="text-zinc-200">Simple command</strong>{" "}
                (e.g., <code>ls</code>, <code>echo hello</code>) &mdash;
                ~5,000 tokens
              </li>
              <li>
                <strong className="text-zinc-200">Medium task</strong>{" "}
                (e.g., file analysis, short code generation) &mdash; ~15,000
                tokens
              </li>
              <li>
                <strong className="text-zinc-200">Complex task</strong>{" "}
                (e.g., multi-file refactor, long conversation) &mdash; 50,000+
                tokens
              </li>
            </ul>
            <p className="mt-4 text-zinc-400">
              As a rough guide, the 500K Starter pack covers approximately{" "}
              <strong className="text-zinc-200">100 simple commands</strong>.
              Your mileage will vary with context length and conversation
              history.
            </p>
          </>
        ),
      },
      {
        id: "byok-vs-managed",
        title: "BYOK vs Managed Claude",
        content: (
          <>
            <p>
              Morpheus supports two modes for accessing Claude:
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg border border-border bg-zinc-900 p-4">
                <h3 className="text-base font-semibold text-zinc-200">
                  BYOK (Bring Your Own Key)
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Enter your Anthropic API key in Desktop Settings &rarr; API
                  Key. All API calls go directly to Anthropic. No token limits,
                  no markup &mdash; you pay Anthropic directly at their rates.
                </p>
              </div>
              <div className="rounded-lg border border-morpheus-dark/50 bg-morpheus-dim p-4">
                <h3 className="text-base font-semibold text-morpheus-muted">
                  Managed (Token Packs)
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  No API key needed. Purchase token packs in the mobile app.
                  API calls are routed through Morpheus&apos;s managed proxy.
                  Ideal for users who don&apos;t want to manage an Anthropic
                  account.
                </p>
              </div>
            </div>
          </>
        ),
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  7. Proactive Monitoring                                          */
  /* ---------------------------------------------------------------- */
  "proactive-monitoring": {
    title: "Proactive Monitoring",
    description:
      "How Morpheus watches your system and alerts you to problems",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: (
          <p>
            Morpheus includes a proactive monitoring daemon that runs in the
            background on your desktop. Instead of waiting for you to ask
            &ldquo;how&apos;s my disk space?&rdquo;, it continuously watches key
            metrics and pushes alerts to your phone when something needs
            attention.
          </p>
        ),
      },
      {
        id: "built-in-watchers",
        title: "Built-in Watchers",
        content: (
          <>
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  System Health Monitor
                </h3>
                <p className="mt-1 text-zinc-400">
                  Tracks CPU usage, memory usage, and disk space. Configurable
                  thresholds (default: CPU 90%, memory 85%, disk 90%). Alerts
                  include suggested actions and have a 5-minute cooldown to
                  prevent notification spam.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  File System Monitor
                </h3>
                <p className="mt-1 text-zinc-400">
                  Watches configured directories for changes. Useful for
                  monitoring config files, deployment directories, or shared
                  folders. Supports include/exclude patterns and debouncing.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  Process Monitor
                </h3>
                <p className="mt-1 text-zinc-400">
                  Tracks named processes and alerts when they stop or start.
                  Perfect for monitoring database servers, web servers, or any
                  critical daemon.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  MCP Health Monitor
                </h3>
                <p className="mt-1 text-zinc-400">
                  Watches your installed MCP servers. If one crashes, Morpheus
                  auto-restarts it (up to 3 attempts) and notifies you.
                </p>
              </div>
            </div>
          </>
        ),
      },
      {
        id: "self-healing",
        title: "Self-Healing",
        content: (
          <>
            <p>
              Morpheus doesn&apos;t just detect problems &mdash; it fixes them.
              The Health Manager supervises all desktop services (WebSocket,
              Claude CLI, tunnel, MCP servers) and auto-restarts any that crash.
              It uses exponential backoff and tracks restart counts to avoid
              infinite loops.
            </p>
            <p className="mt-3">
              The Failure Tracker records every error with classification (rate
              limit, timeout, network, tool error, etc.) and builds adaptive
              retry strategies. Instead of fixed 1s/2s/4s delays, Morpheus
              learns the optimal retry timing for each error type from
              historical data.
            </p>
          </>
        ),
      },
      {
        id: "configuration",
        title: "Configuration",
        content: (
          <>
            <p>
              All watchers are disabled by default. Enable them from the mobile
              app&apos;s settings:
            </p>
            <ol className="mt-4 space-y-2 text-zinc-400 list-decimal list-inside">
              <li>Open Morpheus on your phone</li>
              <li>
                Go to Settings &rarr; Monitoring
              </li>
              <li>Enable the watchers you want</li>
              <li>Configure thresholds to your preferences</li>
            </ol>
            <p className="mt-4 text-zinc-400">
              Watcher configuration is persisted on the desktop and survives
              restarts. Notifications are queued when your phone is disconnected
              and delivered on reconnect.
            </p>
          </>
        ),
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  8. Workflows                                                     */
  /* ---------------------------------------------------------------- */
  "workflows": {
    title: "Workflow Templates",
    description:
      "Chain commands into reusable multi-step automations",
    sections: [
      {
        id: "what-are-workflows",
        title: "What are Workflows?",
        content: (
          <p>
            Workflows let you chain multiple Morpheus commands into a single,
            reusable automation. Each step is a natural language instruction
            &mdash; the same format you&apos;d use in a regular conversation.
            Steps can have conditions, failure handlers, and variables.
          </p>
        ),
      },
      {
        id: "built-in-templates",
        title: "Built-in Templates",
        content: (
          <>
            <p>Morpheus ships with three built-in workflow templates:</p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  Morning Briefing
                </h3>
                <p className="mt-1 text-zinc-400">
                  Checks your calendar, system health, and git status, then
                  summarizes everything in a quick briefing.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  Deploy &amp; Notify
                </h3>
                <p className="mt-1 text-zinc-400">
                  Runs tests, builds for production, deploys, and sends a
                  notification. Each step depends on the previous one succeeding.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  Backup Routine
                </h3>
                <p className="mt-1 text-zinc-400">
                  Creates a system snapshot, backs up important config files, and
                  verifies the backup.
                </p>
              </div>
            </div>
          </>
        ),
      },
      {
        id: "creating-custom-workflows",
        title: "Creating Custom Workflows",
        content: (
          <>
            <p>You can create workflows in two ways:</p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  From conversation history
                </h3>
                <p className="mt-1 text-zinc-400">
                  After completing a series of commands, say &ldquo;save that as
                  a workflow.&rdquo; Morpheus converts your recent commands into
                  a replayable template.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-200">
                  From scratch
                </h3>
                <p className="mt-1 text-zinc-400">
                  Define steps, variables, conditions, and triggers through the
                  workflow editor in the mobile app.
                </p>
              </div>
            </div>
          </>
        ),
      },
      {
        id: "triggers",
        title: "Triggers",
        content: (
          <>
            <p>Workflows can be triggered three ways:</p>
            <ul className="mt-4 space-y-2 text-zinc-400">
              <li>
                <strong className="text-zinc-200">Manual</strong> &mdash; Run
                from the mobile app or by voice (&ldquo;run my morning
                briefing&rdquo;)
              </li>
              <li>
                <strong className="text-zinc-200">Scheduled</strong> &mdash; Set
                a cron schedule (e.g., every weekday at 8am)
              </li>
              <li>
                <strong className="text-zinc-200">Event-based</strong> &mdash;
                Triggered by watcher events (e.g., &ldquo;run backup when disk
                exceeds 80%&rdquo;)
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
};

const validSlugs = Object.keys(guides);

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                           */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides[slug];

  if (!guide) {
    notFound();
  }

  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back link */}
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-morpheus"
        >
          <span aria-hidden="true">&larr;</span> Back to Docs
        </Link>

        {/* Title */}
        <h1 className="mt-8 text-3xl font-bold text-zinc-200 sm:text-4xl">
          <span className="text-morpheus">&gt;</span> {guide.title}
        </h1>
        <p className="mt-3 text-zinc-400">{guide.description}</p>

        {/* Table of contents */}
        <nav
          aria-label="Table of contents"
          className="mt-8 rounded-xl border border-border bg-surface p-4"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            On this page
          </h2>
          <ul className="mt-3 space-y-1">
            {guide.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm text-zinc-400 transition-colors hover:text-morpheus"
                >
                  <span className="text-morpheus-dark mr-2" aria-hidden="true">
                    &gt;
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <div className="mt-12 space-y-12">
          {guide.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-zinc-200">
                {section.title}
              </h2>
              <div className="mt-4 text-sm leading-relaxed text-zinc-400">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
          <Link
            href="/docs"
            className="text-sm text-zinc-500 transition-colors hover:text-morpheus"
          >
            <span aria-hidden="true">&larr;</span> All Docs
          </Link>
          {(() => {
            const currentIndex = validSlugs.indexOf(slug);
            const nextSlug = validSlugs[currentIndex + 1];
            const nextGuide = nextSlug ? guides[nextSlug] : null;
            return nextGuide ? (
              <Link
                href={`/docs/${nextSlug}`}
                className="text-sm text-zinc-500 transition-colors hover:text-morpheus"
              >
                {nextGuide.title} <span aria-hidden="true">&rarr;</span>
              </Link>
            ) : null;
          })()}
        </div>
      </div>
    </div>
  );
}
