import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Morpheus",
  description: "Download Morpheus for macOS, Windows, Linux, iOS, and Android.",
};

const GITHUB_RELEASE =
  "https://github.com/shaktech786/morpheus/releases/latest";

const desktopPlatforms = [
  {
    name: "macOS (Apple Silicon)",
    file: "Morpheus Agent-1.1.0-arm64.dmg",
    icon: "🍎",
    note: "M1/M2/M3/M4 Macs",
  },
  {
    name: "macOS (Intel)",
    file: "Morpheus Agent-1.1.0.dmg",
    icon: "🍎",
    note: "Intel-based Macs",
  },
  {
    name: "Windows",
    file: "Morpheus Agent Setup 1.1.0.exe",
    icon: "🪟",
    note: "Windows 10+ (x64)",
  },
  {
    name: "Linux (AppImage)",
    file: "Morpheus-Agent-1.1.0-x86_64.AppImage",
    icon: "🐧",
    note: "Universal Linux",
  },
  {
    name: "Linux (Debian)",
    file: "Morpheus-Agent-1.1.0-amd64.deb",
    icon: "🐧",
    note: "Ubuntu / Debian",
  },
];

export default function DownloadPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-center text-4xl font-bold sm:text-5xl">
          Download Morpheus
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
          Get the desktop agent and mobile app. Pair once, control from anywhere.
        </p>

        {/* Desktop */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Desktop Agent</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Install on the computer you want to control.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {desktopPlatforms.map((p) => (
              <a
                key={p.name}
                href={`${GITHUB_RELEASE}/download/${p.file}`}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-violet-500/50 hover:bg-white/10"
              >
                <span className="text-3xl">{p.icon}</span>
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-zinc-500">{p.note}</div>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-zinc-600">
            All releases available on{" "}
            <a
              href={GITHUB_RELEASE}
              className="underline hover:text-zinc-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Releases
            </a>
          </p>
        </div>

        {/* Mobile */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Mobile App</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Control your desktop agent from your phone.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="text-3xl">🍎</span>
              <div>
                <div className="font-medium">iOS</div>
                <div className="text-xs text-zinc-500">
                  Coming to App Store — <a href={GITHUB_RELEASE} className="underline hover:text-zinc-400" target="_blank" rel="noopener noreferrer">get APK from GitHub</a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <span className="text-3xl">🤖</span>
              <div>
                <div className="font-medium">Android</div>
                <div className="text-xs text-zinc-500">
                  Coming to Play Store — <a href={GITHUB_RELEASE} className="underline hover:text-zinc-400" target="_blank" rel="noopener noreferrer">get APK from GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Requirements</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>
              <strong className="text-zinc-200">Desktop:</strong> macOS 10.12+,
              Windows 10+, or Linux (glibc 2.17+)
            </li>
            <li>
              <strong className="text-zinc-200">Mobile:</strong> iOS 13+ or
              Android 7.0+
            </li>
            <li>
              <strong className="text-zinc-200">Voice mode:</strong> Requires an
              OpenAI API key with Realtime API access
            </li>
            <li>
              <strong className="text-zinc-200">Network:</strong> Both devices
              on same LAN for local mode, or internet for remote mode
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
