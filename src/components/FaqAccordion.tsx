"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="mt-12 space-y-3">
      {items.map((faq) => {
        const slug = faq.q.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        const isOpen = openFaq === slug;
        const buttonId = `faq-btn-${slug}`;
        const panelId = `faq-panel-${slug}`;

        return (
          <div
            key={slug}
            className="rounded-xl border border-border bg-surface overflow-hidden"
          >
            <button
              id={buttonId}
              onClick={() => setOpenFaq(isOpen ? null : slug)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-surface-hover"
            >
              <span className="text-sm font-semibold text-zinc-300">
                <span className="text-morpheus mr-2" aria-hidden="true">&gt;</span>
                {faq.q}
              </span>
              <span
                aria-hidden="true"
                className={`text-morpheus transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="border-t border-border px-6 py-4"
              >
                <p className="text-sm leading-relaxed text-zinc-400">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
