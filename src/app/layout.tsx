import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
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
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          Morpheus
        </Link>
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <Link href="/download" className="hover:text-white transition-colors">
            Download
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
          <a
            href="https://github.com/shaktech786/morpheus"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-semibold text-white">Morpheus</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Open-source AI agent control from your mobile device.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Links</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-500">
              <li>
                <Link href="/download" className="hover:text-zinc-300">
                  Download
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/shaktech786/morpheus"
                  className="hover:text-zinc-300"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Legal</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-500">
              <li>
                <Link href="/privacy" className="hover:text-zinc-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-zinc-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} Shakeel Bhamani. MIT License.
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
        className={`${inter.variable} ${jetbrains.variable} font-sans bg-black text-white antialiased`}
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
