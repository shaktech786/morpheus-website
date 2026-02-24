import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

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
  },
  {
    name: "macOS (Intel)",
    tag: "darwin-x64",
    note: "Intel-based Macs",
  },
  {
    name: "Windows",
    tag: "win32-x64",
    note: "Windows 10+ (x64)",
  },
  {
    name: "Linux (AppImage)",
    tag: "linux-appimg",
    note: "Universal Linux",
  },
  {
    name: "Linux (Debian)",
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
              <div
                key={p.name}
                className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm text-morpheus-muted font-bold" aria-hidden="true">[{p.tag}]</span>
                  <div>
                    <div className="font-medium text-zinc-200">{p.name}</div>
                    <div className="text-xs text-zinc-500">{p.note}</div>
                  </div>
                </div>
                <span className="rounded-md border border-border bg-surface-hover px-2 py-0.5 text-xs text-zinc-500">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-border bg-surface p-6">
            <p className="text-sm text-zinc-400 mb-4">
              Downloads coming soon. Join the early access list to get notified &mdash; plus <span className="text-morpheus font-semibold">50% off</span> Pro at launch.
            </p>
            <WaitlistForm id="download-waitlist" source="download" compact />
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-morpheus">Mobile App</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Control your desktop agent from your phone.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-morpheus-muted font-bold" aria-hidden="true">[ios]</span>
                <div>
                  <div className="font-medium text-zinc-200">iOS</div>
                  <div className="text-xs text-zinc-500">
                    Coming soon to the App Store
                  </div>
                </div>
              </div>
              <span className="rounded-md border border-border bg-surface-hover px-2 py-0.5 text-xs text-zinc-500">
                Coming soon
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-morpheus-muted font-bold" aria-hidden="true">[apk]</span>
                <div>
                  <div className="font-medium text-zinc-200">Android</div>
                  <div className="text-xs text-zinc-500">
                    Coming soon to the Play Store
                  </div>
                </div>
              </div>
              <span className="rounded-md border border-border bg-surface-hover px-2 py-0.5 text-xs text-zinc-500">
                Coming soon
              </span>
            </div>
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
              subscription (free tier), or purchase token packs in-app (Pro)
            </li>
            <li>
              <strong className="text-zinc-300">Network:</strong> Both devices
              on same LAN for local mode, or internet for remote mode (Pro)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
