"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    // Lock body scroll
    document.body.style.overflow = "hidden";

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
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const menu = open && mounted ? createPortal(
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        style={{ zIndex: 9998 }}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Nav panel */}
      <div
        ref={navRef}
        id="mobile-nav"
        role="dialog"
        aria-label="Navigation menu"
        className="fixed right-0 top-0 flex h-full w-64 flex-col border-l border-border bg-[#0a0a0a] p-6 shadow-2xl"
        style={{ zIndex: 9999 }}
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
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-zinc-400 transition-colors hover:text-morpheus"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>,
    document.body
  ) : null;

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

      {menu}
    </div>
  );
}
