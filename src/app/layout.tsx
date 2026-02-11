import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Morpheus - AI Agent Control From Your Phone",
  description:
    "Control your desktop AI agent from anywhere. Voice commands, encrypted pairing, and remote access — all from your mobile device.",
  openGraph: {
    title: "Morpheus - AI Agent Control From Your Phone",
    description:
      "Control your desktop AI agent from anywhere. Voice commands, encrypted pairing, and remote access.",
    type: "website",
  },
};

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-black/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-morpheus glow-green">
          morpheus<span className="cursor-blink" />
        </Link>
        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <Link href="/download" className="hover:text-morpheus transition-colors">
            Download
          </Link>
          <Link href="/privacy" className="hover:text-morpheus transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-morpheus transition-colors">
            Terms
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-black py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-semibold text-morpheus">morpheus</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Open-source AI agent control from your mobile device.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-400">Links</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-600">
              <li>
                <Link href="/download" className="hover:text-morpheus transition-colors">
                  Download
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-400">Legal</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-600">
              <li>
                <Link href="/privacy" className="hover:text-morpheus transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-morpheus transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-zinc-700">
          <span className="text-morpheus-dark">&gt;</span> &copy; {new Date().getFullYear()} Shakeel Bhamani. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrains.variable} font-sans bg-[#0a0a0a] text-white antialiased`}
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
