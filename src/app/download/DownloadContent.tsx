"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

// Stable download gateway: each link 302-redirects to the matching asset of
// the latest GitHub release (the repo itself is private, so links must go
// through the gateway rather than github.com/releases).
const DOWNLOAD_GATEWAY =
  "https://hdcgbbmjbkbwlluobkqe.supabase.co/functions/v1/check-for-updates/download";

const desktopPlatforms = [
  {
    name: "macOS (Apple Silicon)",
    os: "mac",
    tag: "darwin-arm64",
    note: "M1/M2/M3/M4 Macs",
    href: `${DOWNLOAD_GATEWAY}/mac-arm64`,
  },
  {
    name: "macOS (Intel)",
    os: "mac",
    tag: "darwin-x64",
    note: "Intel-based Macs",
    href: `${DOWNLOAD_GATEWAY}/mac-x64`,
  },
  {
    name: "Windows (Installer)",
    os: "windows",
    tag: "win32-x64",
    note: "Windows 10+ (x64)",
    href: `${DOWNLOAD_GATEWAY}/win`,
  },
  {
    name: "Windows (Portable)",
    os: "windows",
    tag: "win32-portable",
    note: "No install required",
    href: `${DOWNLOAD_GATEWAY}/win-portable`,
  },
  {
    name: "Linux (AppImage)",
    os: "linux",
    tag: "linux-appimg",
    note: "Universal Linux",
    href: `${DOWNLOAD_GATEWAY}/linux-appimage`,
  },
  {
    name: "Linux (Debian)",
    os: "linux",
    tag: "linux-deb",
    note: "Ubuntu / Debian",
    href: `${DOWNLOAD_GATEWAY}/linux-deb`,
  },
];

const OS_LABELS: Record<string, string> = {
  mac: "macOS",
  windows: "Windows",
  linux: "Linux",
};

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.shaktech.morpheus";

function DownloadInner() {
  const searchParams = useSearchParams();
  const osParam = searchParams.get("os");
  const fromMobile = osParam && OS_LABELS[osParam];

  // Filter platforms when os param is set, show all otherwise
  const filteredPlatforms = fromMobile
    ? desktopPlatforms.filter((p) => p.os === osParam)
    : desktopPlatforms;

  const otherPlatforms = fromMobile
    ? desktopPlatforms.filter((p) => p.os !== osParam)
    : [];

  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Mobile app referral banner */}
        {fromMobile && (
          <div className="mb-12 rounded-xl border border-morpheus/40 bg-morpheus/5 p-5">
            <div className="flex items-start gap-3">
              <span
                className="mt-0.5 text-lg text-morpheus"
                aria-hidden="true"
              >
                [&gt;_]
              </span>
              <div>
                <p className="font-semibold text-zinc-200">
                  Setting up Morpheus on {OS_LABELS[osParam]}?
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  You&apos;re here from the mobile app. Download and install the
                  Morpheus Agent below, then go back to the app to scan the QR
                  code and pair.
                </p>
              </div>
            </div>
          </div>
        )}

        <h1 className="text-center text-4xl font-bold sm:text-5xl">
          <span className="text-morpheus">&gt;</span> Download Morpheus
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
          Get the Morpheus Agent and mobile app. Pair once, control from
          anywhere.
        </p>

        {/* How it works — brief explainer */}
        <div className="mt-12 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-morpheus text-xs font-bold text-morpheus">
              1
            </span>
            Install the agent
          </div>
          <span className="hidden text-zinc-600 sm:inline" aria-hidden="true">
            &rarr;
          </span>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-morpheus text-xs font-bold text-morpheus">
              2
            </span>
            Scan QR from mobile app
          </div>
          <span className="hidden text-zinc-600 sm:inline" aria-hidden="true">
            &rarr;
          </span>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-morpheus text-xs font-bold text-morpheus">
              3
            </span>
            Control your computer
          </div>
        </div>

        {/* Desktop */}
        <div className="mt-16" id="desktop">
          <h2 className="text-2xl font-semibold text-morpheus">
            Desktop Agent
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            The AI agent that runs on your computer and executes your commands.
            Also runs on headless Linux servers.
            {fromMobile && " Pick the right version for your machine:"}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {filteredPlatforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between gap-4 rounded-xl border p-4 transition-all hover:border-morpheus-dark hover:bg-surface-hover ${
                  fromMobile
                    ? "border-morpheus/40 bg-morpheus/5"
                    : "border-border bg-surface"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-sm font-bold text-morpheus-muted"
                    aria-hidden="true"
                  >
                    [{p.tag}]
                  </span>
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

          {/* Show other platforms collapsed when filtering */}
          {otherPlatforms.length > 0 && (
            <details className="mt-6">
              <summary className="cursor-pointer text-sm text-zinc-500 hover:text-zinc-300">
                Other platforms
              </summary>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {otherPlatforms.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-morpheus-dark hover:bg-surface-hover"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="text-sm font-bold text-morpheus-muted"
                        aria-hidden="true"
                      >
                        [{p.tag}]
                      </span>
                      <div>
                        <div className="font-medium text-zinc-200">
                          {p.name}
                        </div>
                        <div className="text-xs text-zinc-500">{p.note}</div>
                      </div>
                    </div>
                    <span className="rounded-md border border-morpheus bg-morpheus/10 px-3 py-1 text-xs font-semibold text-morpheus">
                      Download
                    </span>
                  </a>
                ))}
              </div>
            </details>
          )}
        </div>

        {/* Mobile */}
        <div className="mt-16" id="mobile">
          <h2 className="text-2xl font-semibold text-morpheus">Mobile App</h2>
          <p className="mt-2 text-sm text-zinc-400">
            The remote control for your Morpheus Agent.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4 opacity-60">
              <div className="flex items-center gap-4">
                <span
                  className="text-sm font-bold text-morpheus-muted"
                  aria-hidden="true"
                >
                  [ios]
                </span>
                <div>
                  <div className="font-medium text-zinc-200">iOS</div>
                  <div className="text-xs text-zinc-500">
                    App Store &mdash; Coming soon
                  </div>
                </div>
              </div>
              <span className="rounded-md border border-zinc-700 px-3 py-1 text-xs font-semibold text-zinc-500">
                Soon
              </span>
            </div>
            <a
              href={PLAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-morpheus-dark hover:bg-surface-hover"
            >
              <div className="flex items-center gap-4">
                <span
                  className="text-sm font-bold text-morpheus-muted"
                  aria-hidden="true"
                >
                  [android]
                </span>
                <div>
                  <div className="font-medium text-zinc-200">Android</div>
                  <div className="text-xs text-zinc-500">
                    Google Play &mdash; Closed testing
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
          <h2 className="text-lg font-semibold text-morpheus">
            [sys.requirements]
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>
              <strong className="text-zinc-300">Agent:</strong> macOS 10.12+,
              Windows 10+, or Linux (glibc 2.17+) — desktops and headless servers
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
              <strong className="text-zinc-300">AI:</strong> Managed Claude
              included — 15 Haiku messages/day on Free, with credits on paid{" "}
              <Link
                href="/pricing"
                className="text-morpheus hover:underline"
              >
                plans
              </Link>
              . Top up with token packs or bring your own Anthropic key (BYOK)
            </li>
            <li>
              <strong className="text-zinc-300">Network:</strong> Both devices
              on same LAN for local mode, or internet for remote mode (Pro)
            </li>
          </ul>
        </div>

        {/* Quick Start */}
        <div className="mt-16 rounded-xl border border-morpheus/30 bg-surface p-6">
          <h2 className="text-lg font-semibold text-morpheus">
            [quick_start]
          </h2>
          <ol className="mt-4 list-inside list-decimal space-y-3 text-sm text-zinc-400">
            <li>
              Download and install the{" "}
              <strong className="text-zinc-300">Morpheus Agent</strong> on the
              machine you want to control
            </li>
            <li>
              Download the{" "}
              <strong className="text-zinc-300">Mobile App</strong> on your
              phone
            </li>
            <li>
              Open the agent &mdash; it will display a{" "}
              <strong className="text-zinc-300">QR code</strong>
            </li>
            <li>
              Open the mobile app &rarr;{" "}
              <strong className="text-zinc-300">Devices</strong> &rarr;{" "}
              <strong className="text-zinc-300">Add Device</strong> &rarr; scan
              the QR code
            </li>
            <li>
              Start typing or speaking commands &mdash; your AI agent is now
              under your control
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default function DownloadContent() {
  return (
    <Suspense>
      <DownloadInner />
    </Suspense>
  );
}
