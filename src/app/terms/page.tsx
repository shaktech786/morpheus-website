import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Morpheus Terms of Service. Usage terms for the mobile-to-machine AI agent control application by ShakTech Labs LLC.",
};

export default function TermsPage() {
  return (
    <div className="py-24">
      <div className="prose prose-invert prose-morpheus mx-auto max-w-3xl px-6">
        <h1>Terms of Service</h1>
        <p className="lead">Last Updated: June 2026</p>

        <div className="not-prose my-6 rounded-lg border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold text-white">Operator</p>
          <p className="mt-1 text-sm text-white/70">
            <strong>ShakTech Labs LLC</strong>
            <br />
            Georgia, United States
            <br />
            <a href="mailto:team@getmorphe.us" className="text-[#00ff88]">team@getmorphe.us</a>
          </p>
          <p className="mt-2 text-sm text-white/60">
            These Terms are between you and ShakTech Labs LLC, a limited liability company organized under the laws of the State of Georgia, United States.
          </p>
        </div>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By downloading, installing, or using Morpheus (&quot;the Software&quot;), you agree to be bound by these Terms. If you do not agree, do not use the Software.
        </p>
        <p>
          The Morpheus desktop agent (Electron app) is open-source software licensed under the MIT License. These Terms govern your use of the Software and related services (the Morpheus mobile app, Supabase backend, managed API proxy, and any cloud features) and supplement, but do not replace, the MIT License for the open-source components. The website at getmorphe.us is not subject to an open-source license.
        </p>

        <h2>2. Description of Service</h2>
        <p>Morpheus is a mobile-to-desktop AI agent control application developed and operated by ShakTech Labs LLC. The Software:</p>
        <ul>
          <li>Executes AI-powered commands on your machine via an agent with elevated permissions</li>
          <li>Provides end-to-end encrypted communication between your mobile device and the Morpheus Agent</li>
          <li>Enables off-LAN remote access through an operated relay (hosted on Fly.io) that forwards only end-to-end encrypted traffic</li>
          <li>Optionally supports voice commands via on-device STT and ElevenLabs TTS</li>
          <li>Optionally syncs settings and history via Supabase cloud</li>
          <li>Offers free and premium subscription tiers via RevenueCat</li>
        </ul>

        <h2>3. User Responsibilities</h2>
        <h3>3.1 Authorized Access</h3>
        <p>You are solely responsible for:</p>
        <ul>
          <li>Ensuring you have authorized access to any computer you connect to</li>
          <li>Understanding that the AI agent operates with broad system access and can read, modify, and delete files, execute commands, and install software</li>
          <li>Reviewing and understanding the actions the AI agent takes on your behalf</li>
          <li>Maintaining the security of your devices, pairing credentials, and OAuth tokens</li>
          <li>Disconnecting sessions when not in use</li>
          <li>Complying with all applicable laws and regulations</li>
          <li>Not using the Software on production systems without understanding the risks</li>
        </ul>

        <h2>4. Prohibited Uses</h2>
        <p>You may not use the Software to:</p>
        <ul>
          <li>Access computers or systems without proper authorization — including computers belonging to others or systems you are not authorized to administer</li>
          <li>Execute malicious commands, deploy malware, ransomware, spyware, or viruses</li>
          <li>Conduct illegal activities of any kind, including unauthorized surveillance, stalking, or data theft</li>
          <li>Circumvent security measures on systems you do not own</li>
          <li>Violate the CFAA, ECPA, GDPR, or equivalent laws in your jurisdiction</li>
          <li>Harass, stalk, monitor without consent, or harm another person</li>
          <li>Abuse the managed API proxy or token system (e.g., sharing session tokens, circumventing usage limits)</li>
          <li>Resell or commercially exploit ShakTech Labs LLC&apos;s cloud services without prior written authorization</li>
        </ul>

        <h2>5. Remote Access</h2>
        <p>When your phone and the agent are on the same network, Morpheus connects directly over your LAN. When they are on different networks:</p>
        <ul>
          <li>Traffic is routed through a <strong>relay server operated by ShakTech Labs LLC</strong> (hosted on Fly.io), which forwards data between your devices</li>
          <li>The desktop maintains an <strong>outbound</strong> connection to the relay, so your machine is never exposed to inbound connections from the public internet</li>
          <li>The relay forwards <strong>opaque, already-encrypted</strong> frames only &mdash; it processes connection metadata (device identifier, IP addresses, timestamps) to route traffic and cannot read message content</li>
          <li>All messages remain <strong>end-to-end encrypted</strong> (TweetNaCl) with the secret established at pairing</li>
          <li>You are responsible for ensuring only authorized devices are paired. You may disable the relay and run LAN-only via your desktop configuration</li>
        </ul>

        <h2>6. Subscriptions and Billing</h2>
        <ul>
          <li>Subscriptions are managed through <strong>RevenueCat</strong> and processed via the Apple App Store or Google Play Store</li>
          <li>ShakTech Labs LLC does not directly collect or store your payment information</li>
          <li>The managed Claude API proxy deducts usage from your token balance</li>
          <li>Refund policies are governed by the respective app store; ShakTech Labs LLC does not issue direct refunds for in-app purchases</li>
        </ul>

        <h2>7. Third-Party Services</h2>
        <p>Morpheus integrates with third-party services that have their own terms:</p>
        <ul>
          <li><strong>Anthropic (Claude)</strong> &mdash; Core AI agent. Your instructions and context sent for processing. (<a href="https://www.anthropic.com/terms" target="_blank" rel="noopener noreferrer">Terms</a>)</li>
          <li><strong>ElevenLabs</strong> &mdash; Voice TTS (optional). AI response text sent for synthesis. (<a href="https://elevenlabs.io/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Supabase</strong> &mdash; Auth, sync, token management. (<a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Fly.io</strong> &mdash; Hosts the relay for off-LAN remote access. Connection metadata only; message content is end-to-end encrypted. (<a href="https://fly.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>RevenueCat</strong> &mdash; Subscription management. (<a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Sentry</strong> &mdash; Anonymous crash reporting. (<a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Google</strong> &mdash; Email/calendar watchers (optional, requires OAuth consent). (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Slack</strong> &mdash; Slack watcher (optional, requires OAuth consent). (<a href="https://slack.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
        </ul>

        <h2>8. Data Handling</h2>
        <ul>
          <li>Morpheus uses a local-first architecture &mdash; most data stays on your devices</li>
          <li>Some features (auth, sync, token management, API proxy) use Supabase cloud storage; off-LAN remote access uses an operated relay hosted on Fly.io</li>
          <li>End-to-end encryption protects all device-to-device communications</li>
          <li>See our <a href="/privacy">Privacy Policy</a> for full details</li>
        </ul>

        <h2>9. Intellectual Property</h2>
        <p>
          The Morpheus desktop agent and mobile application source code are licensed under the MIT License.
          The Morpheus brand, trademarks, website design (getmorphe.us), and cloud service infrastructure are the exclusive property of ShakTech Labs LLC and are <strong>not</strong> subject to the MIT License.
          You may not use ShakTech Labs LLC&apos;s trademarks or branding without prior written consent.
        </p>

        <h2>10. Disclaimer of Warranties</h2>
        <p>
          THE SOFTWARE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
          INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NONINFRINGEMENT.
          SHAK TECH LABS LLC DOES NOT WARRANT THAT THE SOFTWARE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE FROM HARMFUL COMPONENTS.
        </p>

        <h2>11. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SHAK TECH LABS LLC AND ITS MEMBERS, OFFICERS, EMPLOYEES, AGENTS, AFFILIATES, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SOFTWARE.
        </p>
        <p>
          <strong>SHAK TECH LABS LLC&apos;S AGGREGATE LIABILITY FOR ALL CLAIMS SHALL NOT EXCEED THE GREATER OF: (A) THE TOTAL AMOUNTS PAID BY YOU TO SHAK TECH LABS LLC IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS (USD $100).</strong>
        </p>
        <p>
          This limitation applies regardless of the theory of liability and even if ShakTech Labs LLC has been advised of the possibility of such damages. This includes liability for data loss, system damage, unauthorized access, token balance discrepancies, or actions taken by the AI agent.
        </p>

        <h2>12. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless ShakTech Labs LLC and its members, officers, and employees from any claims, liabilities, damages, and expenses arising out of: (a) your use of the Software in violation of these Terms; (b) your violation of any applicable law; (c) your infringement of any third-party right; or (d) your use of the Software to access systems without proper authorization.
        </p>

        <h2>13. Termination</h2>
        <p>
          ShakTech Labs LLC may suspend or terminate your access to cloud services at any time for violation of these Terms or applicable law. You may stop using the Software at any time by uninstalling it and contacting us to request deletion of server-side data. Sections 4, 10, 11, 12, 14, and 15 survive termination.
        </p>

        <h2>14. Changes to Terms</h2>
        <p>
          ShakTech Labs LLC may update these Terms at any time. Changes will be reflected in the &quot;Last Updated&quot; date. Continued use of the Software after changes constitutes acceptance of the revised Terms.
        </p>

        <h2>15. Governing Law and Dispute Resolution</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the <strong>State of Georgia, United States</strong>, without regard to its conflict of law provisions.
        </p>
        <p>
          Disputes shall first be addressed through good-faith negotiation. If not resolved within 30 days, disputes shall be submitted to binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules, conducted in Georgia. Class action proceedings are waived to the extent permitted by applicable law.
        </p>

        <h2>16. Contact</h2>
        <p>
          For questions about these Terms: <a href="mailto:team@getmorphe.us">team@getmorphe.us</a>
        </p>
        <p>
          <strong>ShakTech Labs LLC</strong> &mdash; <a href="https://getmorphe.us">getmorphe.us</a>
        </p>
      </div>
    </div>
  );
}
