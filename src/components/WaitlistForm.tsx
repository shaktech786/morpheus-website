"use client";

import { useState, type FormEvent } from "react";

interface WaitlistFormProps {
  id?: string;
  source?: string;
  compact?: boolean;
}

export default function WaitlistForm({
  id = "waitlist",
  source = "website",
  compact = false,
}: WaitlistFormProps) {
  const inputId = `${id}-email`;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "duplicate"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("You're in! Check your email for confirmation.");
        setEmail("");
      } else if (res.status === 409) {
        setStatus("duplicate");
        setMessage(data.error);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`rounded-lg border border-morpheus/40 bg-morpheus/5 ${compact ? "p-3" : "p-6"} text-center`}
      >
        <p className="text-sm text-morpheus font-bold tracking-wider">
          &gt; SIGNAL RECEIVED
        </p>
        <p className="mt-2 text-sm text-zinc-400">{message}</p>
        <p className="mt-1 text-xs text-morpheus-muted">
          You&apos;ll be the first to hear about new features.
        </p>
      </div>
    );
  }

  if (status === "duplicate") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`rounded-lg border border-morpheus-dark/40 bg-morpheus/5 ${compact ? "p-3" : "p-6"} text-center`}
      >
        <p className="text-sm text-morpheus-muted font-bold tracking-wider">
          &gt; ALREADY REGISTERED
        </p>
        <p className="mt-2 text-sm text-zinc-400">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "" : "max-w-md mx-auto"}>
      <div
        className={`flex ${compact ? "flex-col sm:flex-row" : "flex-col sm:flex-row"} gap-3`}
      >
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@example.com"
          required
          className="flex-1 rounded-lg border border-border bg-surface px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-morpheus focus:outline-none focus:ring-1 focus:ring-morpheus/30 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg border border-morpheus bg-morpheus/10 px-6 py-3 text-sm font-semibold text-morpheus transition-all hover:bg-morpheus/20 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === "loading" ? (
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full border-2 border-morpheus border-t-transparent animate-spin" />
              Subscribing...
            </span>
          ) : (
            "Get Updates"
          )}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" aria-live="assertive" className="mt-2 text-xs text-red-400">{message}</p>
      )}
      <p className="mt-2 text-xs text-zinc-500">
        No spam. Product updates only. Unsubscribe anytime.
      </p>
    </form>
  );
}
