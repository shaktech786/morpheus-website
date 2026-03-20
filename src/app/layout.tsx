import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "Morpheus - Your AI Assistant, In Your Pocket",
    template: "%s | Morpheus",
  },
  description:
    "Control your entire computer from your phone. Send emails, research anything, manage files, automate tasks — all with voice commands and end-to-end encryption.",
  keywords: [
    "AI assistant",
    "personal assistant",
    "remote control",
    "voice commands",
    "productivity",
    "mobile control",
    "automation",
    "Morpheus",
  ],
  authors: [{ name: "Shakeel Bhamani" }],
  creator: "Shakeel Bhamani",
  metadataBase: new URL("https://getmorphe.us"),
  openGraph: {
    title: "Morpheus - Your AI Assistant, In Your Pocket",
    description:
      "Control your entire computer from your phone. Send emails, research anything, manage files, and automate tasks with AI.",
    url: "https://getmorphe.us",
    siteName: "Morpheus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morpheus - Your AI Assistant, In Your Pocket",
    description:
      "Control your entire computer from your phone. Send emails, research anything, manage files, and automate tasks with AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://getmorphe.us",
  },
};

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-black/90 backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Morpheus home" className="flex items-center gap-3 text-xl font-bold tracking-tight text-morpheus glow-green">
          <Image src="/logo-transparent.png" alt="Morpheus logo" width={56} height={26} style={{ verticalAlign: 'middle' }} />
          <span>morpheus<span className="cursor-blink" aria-hidden="true" /></span>
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-sm text-zinc-400">
          <Link href="/download" className="py-2 hover:text-morpheus transition-colors">
            Download
          </Link>
          <Link href="/pricing" className="py-2 hover:text-morpheus transition-colors">
            Pricing
          </Link>
          <Link href="/docs" className="py-2 hover:text-morpheus transition-colors">
            Docs
          </Link>
          <Link href="/marketplace" className="py-2 hover:text-morpheus transition-colors">
            Marketplace
          </Link>
          <Link href="/blog" className="py-2 hover:text-morpheus transition-colors">
            Blog
          </Link>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-black py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
          <div>
            <h3 className="font-semibold text-morpheus">morpheus</h3>
            <p className="mt-2 text-sm text-zinc-400">
              AI agent control from your mobile device.
            </p>
          </div>
          <nav aria-label="Product links">
            <h3 className="font-semibold text-zinc-400">Product</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-500">
              <li>
                <Link href="/download" className="hover:text-morpheus transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-morpheus transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-morpheus transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="hover:text-morpheus transition-colors">
                  MCP Marketplace
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Resources">
            <h3 className="font-semibold text-zinc-400">Resources</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-500">
              <li>
                <Link href="/blog" className="hover:text-morpheus transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="mailto:team@getmorphe.us" className="hover:text-morpheus transition-colors">
                  Contact Sales
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Legal links">
            <h3 className="font-semibold text-zinc-400">Legal</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-500">
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
          </nav>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-zinc-500">
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:border focus:border-morpheus focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:text-morpheus"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
