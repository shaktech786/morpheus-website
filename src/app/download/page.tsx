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
    tag: "darwin-arm64",
    note: "M1/M2/M3/M4 Macs",
  },
  {
    name: "macOS (Intel)",
    file: "Morpheus Agent-1.1.0.dmg",
    tag: "darwin-x64",
    note: "Intel-based Macs",
  },
  {
    name: "Windows",
    file: "Morpheus Agent Setup 1.1.0.exe",
    tag: "win32-x64",
    note: "Windows 10+ (x64)",
  },
  {
    name: "Linux (AppImage)",
    file: "Morpheus-Agent-1.1.0-x86_64.AppImage",
    tag: "linux-appimg",
    note: "Universal Linux",
  },
  {
    name: "Linux (Debian)",
    file: "Morpheus-Agent-1.1.0-amd64.deb",
    tag: "linux-deb",
    note: "Ubuntu / Debian",
  },
];

export default function DownloadPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-center text-4xl font-bold sm:text-5xl">
          <span className="text-morpheus">&gt;</span> Download Morpheus
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-zinc-500">
          Get the desktop agent and mobile app. Pair once, control from anywhere.
        </p>

        {/* Desktop */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-morpheus">Desktop Agent</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Install on the computer you want to control.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {desktopPlatforms.map((p) => (
              <a
                key={p.name}
                href={`${GITHUB_RELEASE}/download/${p.file}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-morpheus-dark hover:bg-surface-hover"
              >
                <span className="text-sm text-morpheus-muted font-bold">[{p.tag}]</span>
                <div>
                  <div className="font-medium text-zinc-200 group-hover:text-morpheus transition-colors">{p.name}</div>
                  <div className="text-xs text-zinc-600">{p.note}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-morpheus">Mobile App</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Control your desktop agent from your phone.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4">
              <span className="text-sm text-morpheus-muted font-bold">[ios]</span>
              <div>
                <div className="font-medium text-zinc-200">iOS</div>
                <div className="text-xs text-zinc-600">
                  Coming soon to the App Store
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4">
              <span className="text-sm text-morpheus-muted font-bold">[apk]</span>
              <div>
                <div className="font-medium text-zinc-200">Android</div>
                <div className="text-xs text-zinc-600">
                  Coming soon to the Play Store
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-16 rounded-xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-morpheus">[sys.requirements]</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-500">
            <li>
              <strong className="text-zinc-300">Desktop:</strong> macOS 10.12+,
              Windows 10+, or Linux (glibc 2.17+)
            </li>
            <li>
              <strong className="text-zinc-300">Mobile:</strong> iOS 13+ or
              Android 7.0+
            </li>
            <li>
              <strong className="text-zinc-300">Voice mode:</strong> Requires an
              OpenAI API key with Realtime API access
            </li>
            <li>
              <strong className="text-zinc-300">Network:</strong> Both devices
              on same LAN for local mode, or internet for remote mode
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
