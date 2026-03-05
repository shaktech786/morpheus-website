"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const links = [
  { href: "/download", label: "Download" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }

      // Focus trap
      if (e.key === "Tab" && navRef.current) {
        const focusable = navRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-zinc-400 transition-colors hover:text-morpheus"
      >
        <span aria-hidden="true" className="text-lg leading-none">
          {open ? "\u00d7" : "\u2261"}
        </span>
      </button>

      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Nav panel */}
          <div
            ref={navRef}
            id="mobile-nav"
            role="dialog"
            aria-label="Navigation menu"
            className="fixed right-0 top-0 z-50 flex h-full w-64 flex-col border-l border-border bg-[#0a0a0a] p-6"
          >
            <button
              onClick={() => {
                setOpen(false);
                buttonRef.current?.focus();
              }}
              aria-label="Close navigation menu"
              className="mb-8 self-end text-2xl text-zinc-400 hover:text-morpheus"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <nav aria-label="Mobile navigation">
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm text-zinc-400 transition-colors hover:text-morpheus"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
