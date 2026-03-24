import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Morpheus Privacy Policy. Local-first architecture with optional cloud sync. Transparent data handling for AI agent control.",
};

export default function PrivacyPage() {
  return (
    <div className="py-24">
      <div className="prose prose-invert prose-morpheus mx-auto max-w-3xl px-6">
        <h1>Privacy Policy</h1>
        <p className="lead">Last Updated: March 2026</p>

        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy describes how Morpheus (&quot;the Software&quot;) handles your data.
          Morpheus is a mobile-to-machine AI agent control application.
        </p>
        <p>
          <strong>The short version</strong>: Morpheus uses a local-first architecture &mdash; most data
          stays on your devices. However, certain features rely on cloud services (authentication, sync,
          subscriptions, AI processing, voice, and remote access) that involve data being transmitted to
          or stored on third-party servers. This policy explains exactly what goes where.
        </p>

        <h2>2. Data Stored Locally</h2>
        <p>Morpheus stores the following data on your devices:</p>
        <h3>Device and Pairing Information</h3>
        <ul>
          <li>Device names you assign to paired devices</li>
          <li>ECDH public keys for end-to-end encryption</li>
          <li>Connection URLs (local network addresses or Cloudflare tunnel URLs)</li>
          <li>Temporary pairing codes</li>
        </ul>
        <h3>Command and Session Data</h3>
        <ul>
          <li>Command history sent from mobile to the Morpheus Agent</li>
          <li>AI agent responses and outputs</li>
          <li>Session metadata (timestamps, identifiers, connection status)</li>
        </ul>
        <h3>User Preferences</h3>
        <ul>
          <li>Application settings (theme, voice mode, layout, Claude model selection)</li>
          <li>Connection preferences (auto-connect, default mode)</li>
          <li>Permission profiles and watcher configurations</li>
        </ul>
        <h3>Long-Term Memory (Desktop Agent)</h3>
        <ul>
          <li>Personal preferences, conversation summaries, goals, and behavioral patterns in a local SQLite database</li>
          <li>This data is stored locally and never transmitted to any server</li>
          <li>You can delete it at any time by removing the database from the Morpheus data directory</li>
        </ul>
        <h3>Local Analytics (Mobile)</h3>
        <ul>
          <li>Command counts, duration, model/token usage for the in-app analytics dashboard</li>
          <li>Stored only on your device &mdash; never sent externally</li>
        </ul>

        <h2>3. Data Stored in the Cloud</h2>
        <p>Morpheus uses <strong>Supabase</strong> (a hosted PostgreSQL service) for server-side features:</p>
        <ul>
          <li><strong>Anonymous accounts</strong>: A unique user ID and session (no email or personal info required)</li>
          <li><strong>Sync</strong> (optional): Settings, recent command history (last 100), and sound preferences</li>
          <li><strong>Token balance</strong>: Usage tracking for the managed Claude API proxy</li>
          <li><strong>Transaction ledger</strong>: Token purchases, usage, and refunds</li>
        </ul>
        <p>
          All Supabase data is protected by row-level security &mdash; each user can only access their own data.
          Device pairings, encryption keys, and long-term memory are <strong>never synced</strong>.
        </p>

        <h2>4. What Is NOT Collected</h2>
        <ul>
          <li><strong>No behavioral analytics</strong> sent externally (local analytics stay on-device)</li>
          <li><strong>No advertising data</strong>: No ad tracking, fingerprinting, or marketing identifiers</li>
          <li><strong>No location data</strong>: No GPS, IP geolocation, or location tracking</li>
          <li><strong>No contacts or browsing history</strong></li>
        </ul>

        <h2>4a. Error Reporting</h2>
        <p>
          <strong>Sentry</strong> captures anonymous crash reports (stack traces only &mdash; no personal data,
          commands, or AI responses).
        </p>

        <h2>4b. Telemetry (Desktop, Optional)</h2>
        <p>
          The desktop agent can optionally send performance telemetry (traces, metrics, logs) to <strong>Grafana Cloud</strong> via
          OpenTelemetry. This does not include command content, AI responses, or personal data. Can be disabled in configuration.
        </p>

        <h2>5. Local Storage Locations</h2>
        <ul>
          <li><strong>Agent (macOS)</strong>: ~/Library/Application Support/Morpheus/</li>
          <li><strong>Agent (Windows)</strong>: %APPDATA%/Morpheus/</li>
          <li><strong>Agent (Linux/Server)</strong>: ~/.config/Morpheus/</li>
          <li><strong>Mobile (iOS)</strong>: Keychain for keys, app container for settings</li>
          <li><strong>Mobile (Android)</strong>: Keystore for keys, app storage for settings</li>
        </ul>
        <p>
          Delete local data at any time by uninstalling the application or clearing app data.
          For server-side data, contact us for deletion.
        </p>

        <h2>6. Encryption</h2>
        <ul>
          <li><strong>Key Exchange</strong>: Elliptic Curve Diffie-Hellman (ECDH)</li>
          <li><strong>Message Encryption</strong>: TweetNaCl (XSalsa20-Poly1305) with unique nonces per message</li>
          <li><strong>Scope</strong>: All command/response payloads, screenshots, and control messages between devices</li>
          <li><strong>Key Storage</strong>: Platform-specific secure storage (Keychain, Keystore, safeStorage)</li>
        </ul>

        <h2>7. Remote Access (Cloudflare Tunnels)</h2>
        <p>When remote access is active:</p>
        <ul>
          <li>Encrypted WebSocket traffic passes through Cloudflare&apos;s infrastructure</li>
          <li>Cloudflare can see connection metadata (IPs, timestamps) but not encrypted content</li>
          <li>Tunnels are temporary and on-demand &mdash; no persistent infrastructure</li>
          <li>See <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare&apos;s Privacy Policy</a></li>
        </ul>

        <h2>8. Voice Data</h2>
        <p>Voice mode is <strong>opt-in and disabled by default</strong>. When enabled:</p>
        <ul>
          <li>Speech is transcribed <strong>on-device</strong> using the platform&apos;s native speech recognition engine &mdash; no audio sent externally</li>
          <li>Text-to-speech responses are generated via <strong>ElevenLabs</strong>, proxied through Supabase Edge Functions</li>
          <li>ElevenLabs receives the text of AI responses for voice synthesis</li>
          <li>Generated audio is played and auto-deleted &mdash; no audio permanently stored</li>
          <li>See <a href="https://elevenlabs.io/privacy" target="_blank" rel="noopener noreferrer">ElevenLabs&apos; Privacy Policy</a></li>
        </ul>

        <h2>9. Screenshots (Desktop)</h2>
        <p>
          When requested, the desktop agent captures your screen and sends it to your mobile device
          over the encrypted connection. Screenshots are not sent to external servers unless explicitly
          included in AI command context.
        </p>

        <h2>10. Notification Bridge (Android, Optional)</h2>
        <p>
          Captures notifications from apps you specify via allowlist/blocklist. Data is forwarded <strong>only</strong> to
          your paired desktop over the encrypted connection &mdash; never to any cloud service.
        </p>

        <h2>11. Watchers (Desktop, Optional)</h2>
        <p>Optional monitoring features requiring your explicit OAuth consent:</p>
        <ul>
          <li><strong>Email/Calendar</strong> (Google): Read-only access to emails and events</li>
          <li><strong>Slack</strong>: Channel monitoring with your granted scopes</li>
          <li><strong>File/Process/System</strong>: Local monitoring only, no external data sharing</li>
        </ul>
        <p>All watcher data goes only to your paired mobile device. OAuth tokens stored in the encrypted credential vault.</p>

        <h2>12. Third-Party Services</h2>
        <ul>
          <li><strong>Anthropic (Claude)</strong> &mdash; AI processing. Instructions and context sent. (<a href="https://www.anthropic.com/legal/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Supabase</strong> &mdash; Auth, sync, tokens. Anonymous user data stored. (<a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>ElevenLabs</strong> &mdash; Voice TTS (optional). Response text sent. (<a href="https://elevenlabs.io/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>RevenueCat</strong> &mdash; Subscriptions. Customer ID and purchase events. (<a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Cloudflare</strong> &mdash; Remote access (optional). Encrypted traffic routed. (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Sentry</strong> &mdash; Crash reporting. Technical data only. (<a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Grafana Cloud</strong> &mdash; Telemetry (optional, desktop). Performance data only. (<a href="https://grafana.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Google</strong> &mdash; Email/calendar watchers (optional). Read-only API access. (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Slack</strong> &mdash; Slack watcher (optional). Channel monitoring. (<a href="https://slack.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
        </ul>
        <p>Anthropic and Supabase are contacted during normal app operation. All other services only when you enable the feature.</p>

        <h2>13. Data Retention</h2>
        <ul>
          <li>Local data retained until you delete it; long-term memory persists with confidence decay</li>
          <li>Cloud data (Supabase) retained while your account exists; contact us for deletion</li>
          <li>Third-party retention governed by each service&apos;s own policies</li>
        </ul>

        <h2>14. International Users (GDPR)</h2>
        <p>If you are in the EEA, UK, or Switzerland:</p>
        <ul>
          <li><strong>Lawful basis</strong>: Legitimate interest (local data, sync), consent (optional features), contract (subscriptions)</li>
          <li><strong>Your rights</strong>: Access, rectification, erasure, restriction, portability, objection &mdash; local data directly on your device, cloud data via contacting us</li>
          <li><strong>Data transfers</strong>: AI data to Anthropic (US); voice text to ElevenLabs; sync to Supabase; metadata via Cloudflare</li>
        </ul>

        <h2>15. California Users (CCPA)</h2>
        <ul>
          <li>Morpheus does <strong>not</strong> sell personal information</li>
          <li>Delete local data by uninstalling; contact us for cloud data</li>
          <li>No discrimination for exercising privacy rights</li>
        </ul>

        <h2>16. Children&apos;s Privacy</h2>
        <p>
          Morpheus is not designed for children under 13. We do not knowingly collect data from children.
        </p>

        <h2>17. Security</h2>
        <ul>
          <li>End-to-end encryption (ECDH + TweetNaCl)</li>
          <li>Pairing codes for secure device authentication</li>
          <li>Encrypted credential vault for API keys and OAuth tokens</li>
          <li>Row-level security on all server-side data</li>
          <li>Risk classification of AI commands with approval prompts for high-risk operations</li>
        </ul>

        <h2>18. Changes to This Policy</h2>
        <p>
          Changes will be indicated by updating the &quot;Last Updated&quot; date. Significant changes
          will also be noted in release notes.
        </p>

        <h2>19. Contact</h2>
        <p>
          For questions about this Privacy Policy: <a href="mailto:team@getmorphe.us">team@getmorphe.us</a>
        </p>
        <p>
          Website: <a href="https://getmorphe.us">getmorphe.us</a>
        </p>
      </div>
    </div>
  );
}
