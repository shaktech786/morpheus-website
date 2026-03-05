import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Morpheus for macOS, Windows, Linux, iOS, and Android. Control your desktop AI agent from your phone.",
};

const desktopPlatforms = [
  {
    name: "macOS (Apple Silicon)",
    tag: "darwin-arm64",
    note: "M1/M2/M3/M4 Macs",
    artifact: "Morpheus-Agent-*-arm64.dmg",
  },
  {
    name: "macOS (Intel)",
    tag: "darwin-x64",
    note: "Intel-based Macs",
    artifact: "Morpheus-Agent-*-x64.dmg",
  },
  {
    name: "Windows (Installer)",
    tag: "win32-x64",
    note: "Windows 10+ (x64)",
    artifact: "Morpheus-Agent-Setup-*.exe",
  },
  {
    name: "Windows (Portable)",
    tag: "win32-portable",
    note: "No install required",
    artifact: "Morpheus-Agent-*.exe",
  },
  {
    name: "Linux (AppImage)",
    tag: "linux-appimg",
    note: "Universal Linux",
    artifact: "Morpheus-Agent-*-x64.AppImage",
  },
  {
    name: "Linux (Debian)",
    tag: "linux-deb",
    note: "Ubuntu / Debian",
    artifact: "Morpheus-Agent-*-x64.deb",
  },
];

const GITHUB_RELEASES = "https://github.com/shaktech786/morpheus/releases/latest";

export default function DownloadPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-center text-4xl font-bold sm:text-5xl">
          <span className="text-morpheus">&gt;</span> Download Morpheus
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
          Get the desktop agent and mobile app. Pair once, control from anywhere.
        </p>

        {/* Desktop */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-morpheus">Desktop Agent</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Install on the computer you want to control.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {desktopPlatforms.map((p) => (
              <a
                key={p.name}
                href={GITHUB_RELEASES}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-morpheus-dark hover:bg-surface-hover"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm text-morpheus-muted font-bold" aria-hidden="true">[{p.tag}]</span>
                  <div>
                    <div className="font-medium text-zinc-200">{p.name}</div>
                    <div className="text-xs text-zinc-500">{p.note}</div>
                  </div>
                </div>
                <span className="rounded-md border border-morpheus bg-morpheus/10 px-3 py-1 text-xs font-semibold text-morpheus">
                  Download
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-morpheus">Mobile App</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Control your desktop agent from your phone.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a
              href="https://apps.apple.com/app/morpheus-ai-control/id0000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-morpheus-dark hover:bg-surface-hover"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm text-morpheus-muted font-bold" aria-hidden="true">[ios]</span>
                <div>
                  <div className="font-medium text-zinc-200">iOS</div>
                  <div className="text-xs text-zinc-500">
                    App Store — iPhone &amp; iPad
                  </div>
                </div>
              </div>
              <span className="rounded-md border border-morpheus bg-morpheus/10 px-3 py-1 text-xs font-semibold text-morpheus">
                App Store
              </span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=us.getmorphe.mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-morpheus-dark hover:bg-surface-hover"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm text-morpheus-muted font-bold" aria-hidden="true">[apk]</span>
                <div>
                  <div className="font-medium text-zinc-200">Android</div>
                  <div className="text-xs text-zinc-500">
                    Google Play Store
                  </div>
                </div>
              </div>
              <span className="rounded-md border border-morpheus bg-morpheus/10 px-3 py-1 text-xs font-semibold text-morpheus">
                Play Store
              </span>
            </a>
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-16 rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-morpheus">[sys.requirements]</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>
              <strong className="text-zinc-300">Desktop:</strong> macOS 10.12+,
              Windows 10+, or Linux (glibc 2.17+)
            </li>
            <li>
              <strong className="text-zinc-300">Mobile:</strong> iOS 13+ or
              Android 7.0+
            </li>
            <li>
              <strong className="text-zinc-300">Voice mode:</strong> Available
              with the Pro plan
            </li>
            <li>
              <strong className="text-zinc-300">AI:</strong> Your own Claude
              subscription (free tier) or purchase{" "}
              <Link href="/pricing#tokens-heading" className="text-morpheus hover:underline">
                token packs
              </Link>{" "}
              in-app
            </li>
            <li>
              <strong className="text-zinc-300">Network:</strong> Both devices
              on same LAN for local mode, or internet for remote mode (Pro)
            </li>
          </ul>
        </div>

        {/* Quick Start */}
        <div className="mt-16 rounded-xl border border-morpheus/30 bg-surface p-6">
          <h2 className="text-lg font-semibold text-morpheus">[quick_start]</h2>
          <ol className="mt-4 space-y-3 text-sm text-zinc-400 list-decimal list-inside">
            <li>Download and install the <strong className="text-zinc-300">Desktop Agent</strong> on the machine you want to control</li>
            <li>Download the <strong className="text-zinc-300">Mobile App</strong> on your phone</li>
            <li>Open the desktop agent — it will display a <strong className="text-zinc-300">QR code</strong></li>
            <li>Open the mobile app → <strong className="text-zinc-300">Devices</strong> → <strong className="text-zinc-300">Add Device</strong> → scan the QR code</li>
            <li>Start typing or speaking commands — your AI agent is now under your control</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
