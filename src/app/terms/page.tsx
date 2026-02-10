import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Morpheus",
  description: "Morpheus Terms of Service.",
};

export default function TermsPage() {
  return (
    <div className="py-24">
      <div className="prose prose-invert prose-zinc mx-auto max-w-3xl px-6">
        <h1>Terms of Service</h1>
        <p className="lead">Last Updated: January 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using Morpheus (&quot;the Software&quot;), you agree to these Terms of Service.
          If you do not agree, do not use the Software.
        </p>

        <h2>2. Description of Service</h2>
        <p>Morpheus is an open-source application that allows you to remotely control your desktop computer from a mobile device. The Software:</p>
        <ul>
          <li>Executes commands on your desktop via Claude Code AI</li>
          <li>Provides encrypted communication between your mobile and desktop</li>
          <li>Optionally enables remote access through Cloudflare Quick Tunnels</li>
          <li>Optionally supports voice commands via OpenAI&apos;s Realtime API</li>
        </ul>

        <h2>3. User Responsibilities</h2>
        <p>You are solely responsible for:</p>
        <ul>
          <li>Ensuring you have authorized access to any computer you connect to</li>
          <li>Understanding and accepting the risks of AI-executed commands on your system</li>
          <li>Reviewing and approving commands before they are executed</li>
          <li>Maintaining the security of your devices and pairing credentials</li>
          <li>Complying with all applicable laws and regulations</li>
        </ul>

        <h2>4. Prohibited Uses</h2>
        <p>You may not use the Software to:</p>
        <ul>
          <li>Access computers or systems without proper authorization</li>
          <li>Execute malicious commands or deploy malware</li>
          <li>Conduct illegal activities of any kind</li>
          <li>Circumvent security measures on systems you do not own</li>
          <li>Violate the rights of any third party</li>
        </ul>

        <h2>5. Remote Access</h2>
        <p>When Remote Access is enabled:</p>
        <ul>
          <li>Your desktop&apos;s WebSocket server is exposed via a Cloudflare Quick Tunnel</li>
          <li>Network traffic is routed through Cloudflare&apos;s infrastructure</li>
          <li>All messages remain end-to-end encrypted regardless of transport</li>
          <li>You are responsible for ensuring only authorized devices are paired</li>
        </ul>

        <h2>6. Voice Mode</h2>
        <p>When Voice Mode is enabled:</p>
        <ul>
          <li>Audio data is transmitted to OpenAI for processing</li>
          <li>OpenAI&apos;s terms and privacy policy apply to voice data</li>
          <li>Morpheus does not control how OpenAI processes or retains voice data</li>
        </ul>

        <h2>7. Third-Party Services</h2>
        <p>Morpheus integrates with third-party services that have their own terms:</p>
        <ul>
          <li><strong>Claude Code / Anthropic</strong> — AI agent execution engine. Subject to <a href="https://www.anthropic.com/terms" target="_blank" rel="noopener noreferrer">Anthropic&apos;s Terms</a></li>
          <li><strong>OpenAI</strong> — Voice processing. Subject to <a href="https://openai.com/terms" target="_blank" rel="noopener noreferrer">OpenAI&apos;s Terms</a></li>
          <li><strong>Cloudflare</strong> — Remote access tunnels. Subject to <a href="https://www.cloudflare.com/terms/" target="_blank" rel="noopener noreferrer">Cloudflare&apos;s Terms</a></li>
        </ul>

        <h2>8. Open Source License</h2>
        <p>
          Morpheus is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>.
          You may use, modify, and distribute the Software in accordance with the license terms.
        </p>

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
          from compromised credentials, or actions taken by the AI agent.
        </p>

        <h2>11. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Changes will be reflected in the
          &quot;Last Updated&quot; date. Continued use of the Software after changes constitutes acceptance.
        </p>

        <h2>12. Contact</h2>
        <p>
          For questions about these Terms: <a href="mailto:hi@shak-tech.com">hi@shak-tech.com</a>
        </p>
        <p>
          Repository: <a href="https://github.com/shaktech786/morpheus" target="_blank" rel="noopener noreferrer">github.com/shaktech786/morpheus</a>
        </p>
      </div>
    </div>
  );
}
