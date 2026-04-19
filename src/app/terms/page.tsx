import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Morpheus Terms of Service. Usage terms for the mobile-to-machine AI agent control application.",
};

export default function TermsPage() {
  return (
    <div className="py-24">
      <div className="prose prose-invert prose-morpheus mx-auto max-w-3xl px-6">
        <h1>Terms of Service</h1>
        <p className="lead">Last Updated: March 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using Morpheus (&quot;the Software&quot;), you agree to these Terms of Service.
          If you do not agree, do not use the Software. Morpheus is open-source software licensed
          under the MIT License. These Terms supplement (but do not replace) the MIT License.
        </p>

        <h2>2. Description of Service</h2>
        <p>Morpheus is a mobile-to-desktop AI agent control application. The Software:</p>
        <ul>
          <li>Executes AI-powered commands on your machine via an agent with elevated permissions</li>
          <li>Provides end-to-end encrypted communication between your mobile device and the Morpheus Agent</li>
          <li>Enables remote access via peer-to-peer WebRTC (STUN/TURN for NAT traversal) with Supabase Realtime as the signed-envelope signaling channel</li>
          <li>Optionally supports voice commands via on-device STT and ElevenLabs TTS</li>
          <li>Optionally syncs settings and history via Supabase cloud</li>
          <li>Offers free and premium subscription tiers via RevenueCat</li>
        </ul>

        <h2>3. User Responsibilities</h2>
        <p>You are solely responsible for:</p>
        <ul>
          <li>Ensuring you have authorized access to any computer you connect to</li>
          <li>Understanding that the AI agent operates with broad system access and can read, modify, and delete files, execute commands, and install software</li>
          <li>Reviewing and understanding the actions the AI agent takes on your behalf</li>
          <li>Maintaining the security of your devices, pairing credentials, and OAuth tokens</li>
          <li>Complying with all applicable laws and regulations</li>
          <li>Not using the Software on production systems without understanding the risks</li>
        </ul>

        <h2>4. Prohibited Uses</h2>
        <p>You may not use the Software to:</p>
        <ul>
          <li>Access computers or systems without proper authorization</li>
          <li>Execute malicious commands or deploy malware</li>
          <li>Conduct illegal activities of any kind</li>
          <li>Circumvent security measures on systems you do not own</li>
          <li>Violate the rights of any third party</li>
          <li>Abuse the managed API proxy or token system</li>
        </ul>

        <h2>5. Remote Access</h2>
        <p>When your phone is off the agent&apos;s local network:</p>
        <ul>
          <li>A direct peer-to-peer WebRTC data channel is established between your phone and the agent</li>
          <li>Session setup (SDP, ICE candidates) is signed with your pairing shared secret and relayed via Supabase Realtime &mdash; relays see only opaque envelopes</li>
          <li>Google&apos;s public STUN performs NAT discovery; Open Relay Project TURN is used only if direct connection is blocked by symmetric NAT</li>
          <li>All messages remain end-to-end encrypted (TweetNaCl at the application layer, DTLS-SRTP at the WebRTC transport layer)</li>
          <li>You are responsible for ensuring only authorized devices are paired</li>
        </ul>

        <h2>6. Subscriptions and Billing</h2>
        <ul>
          <li>Subscriptions are managed through <strong>RevenueCat</strong> and processed via the Apple App Store or Google Play Store</li>
          <li>Morpheus does not directly collect or store your payment information</li>
          <li>The managed Claude API proxy deducts usage from your token balance</li>
          <li>Refund policies are governed by the respective app store</li>
        </ul>

        <h2>7. Third-Party Services</h2>
        <p>Morpheus integrates with third-party services that have their own terms:</p>
        <ul>
          <li><strong>Anthropic (Claude)</strong> &mdash; Core AI agent. Your instructions and context sent for processing. (<a href="https://www.anthropic.com/terms" target="_blank" rel="noopener noreferrer">Terms</a>)</li>
          <li><strong>ElevenLabs</strong> &mdash; Voice TTS (optional). AI response text sent for synthesis. (<a href="https://elevenlabs.io/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Supabase</strong> &mdash; Auth, sync, token management. (<a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>RevenueCat</strong> &mdash; Subscription management. (<a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Google STUN</strong> &mdash; NAT discovery for WebRTC (connectivity probes, no content). (<a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms</a>)</li>
          <li><strong>Open Relay Project</strong> &mdash; WebRTC TURN fallback for symmetric NATs. (<a href="https://www.metered.ca/tools/openrelay/" target="_blank" rel="noopener noreferrer">About</a>)</li>
          <li><strong>Sentry</strong> &mdash; Anonymous crash reporting. (<a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Google</strong> &mdash; Email/calendar watchers (optional, requires OAuth consent). (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
          <li><strong>Slack</strong> &mdash; Slack watcher (optional, requires OAuth consent). (<a href="https://slack.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy</a>)</li>
        </ul>

        <h2>8. Data Handling</h2>
        <ul>
          <li>Morpheus uses a local-first architecture &mdash; most data stays on your devices</li>
          <li>Some features (auth, sync, token management, API proxy) use Supabase cloud storage</li>
          <li>End-to-end encryption protects all device-to-device communications</li>
          <li>See our <a href="/privacy">Privacy Policy</a> for full details</li>
        </ul>

        <h2>9. Disclaimer of Warranties</h2>
        <p>
          THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
          INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE AND NONINFRINGEMENT.
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
          OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
          OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
        <p>
          This includes but is not limited to: data loss, system damage, unauthorized access resulting
          from compromised credentials, token balance discrepancies, or actions taken by the AI agent.
        </p>

        <h2>11. Open Source License</h2>
        <p>
          Morpheus is released under the MIT License. You are free to use, copy, modify, and distribute
          the Software subject to the MIT License conditions.
        </p>

        <h2>12. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Changes will be reflected in the
          &quot;Last Updated&quot; date. Continued use of the Software after changes constitutes acceptance.
        </p>

        <h2>13. Contact</h2>
        <p>
          For questions about these Terms: <a href="mailto:team@getmorphe.us">team@getmorphe.us</a>
        </p>
        <p>
          Website: <a href="https://getmorphe.us">getmorphe.us</a>
        </p>
      </div>
    </div>
  );
}
