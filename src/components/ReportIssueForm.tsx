"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import Script from "next/script";

const MAX_DESCRIPTION_LEN = 8000;
const MAX_SCREENSHOTS = 5;
const MAX_SCREENSHOT_BYTES = 5 * 1024 * 1024;
const ALLOWED_MIME = ["image/png", "image/jpeg", "image/webp", "image/gif"];

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; issueUrl: string; issueNumber: number }
  | { kind: "error"; message: string };

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        options: { sitekey: string; callback?: (token: string) => void; theme?: "dark" | "light" | "auto" }
      ) => string;
      reset: (id?: string) => void;
    };
  }
}

export default function ReportIssueForm() {
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [screenshots, setScreenshots] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const turnstileEl = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  const turnstileEnabled = TURNSTILE_SITE_KEY.length > 0;

  useEffect(() => {
    if (!turnstileEnabled) return;
    const tryRender = () => {
      if (window.turnstile && turnstileEl.current && !turnstileWidgetId.current) {
        turnstileWidgetId.current = window.turnstile.render(turnstileEl.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: "dark",
          callback: (token) => setTurnstileToken(token),
        });
      } else if (!window.turnstile) {
        setTimeout(tryRender, 200);
      }
    };
    tryRender();
  }, [turnstileEnabled]);

  function handleScreenshotChange(e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    const valid: File[] = [];
    for (const f of files) {
      if (!ALLOWED_MIME.includes(f.type)) {
        setStatus({ kind: "error", message: `Unsupported file type: ${f.name}` });
        return;
      }
      if (f.size > MAX_SCREENSHOT_BYTES) {
        setStatus({ kind: "error", message: `${f.name} exceeds 5 MB` });
        return;
      }
      valid.push(f);
    }
    if (valid.length > MAX_SCREENSHOTS) {
      setStatus({ kind: "error", message: `Maximum ${MAX_SCREENSHOTS} screenshots` });
      return;
    }
    setScreenshots(valid);
    if (status.kind === "error") setStatus({ kind: "idle" });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!description.trim()) return;

    setStatus({ kind: "loading" });

    try {
      const fd = new FormData();
      fd.append("description", description.trim());
      fd.append("source", "website");
      if (email.trim()) fd.append("email", email.trim());
      fd.append("userAgent", navigator.userAgent);
      if (turnstileEnabled) fd.append("cf-turnstile-response", turnstileToken);
      for (const file of screenshots) {
        fd.append("screenshots", file);
      }

      const res = await fetch("/api/report-issue", { method: "POST", body: fd });
      const data = await res.json();

      if (res.ok) {
        setStatus({
          kind: "success",
          issueUrl: data.issueUrl,
          issueNumber: data.issueNumber,
        });
        setDescription("");
        setEmail("");
        setScreenshots([]);
        setTurnstileToken("");
        if (turnstileEnabled && window.turnstile && turnstileWidgetId.current) {
          window.turnstile.reset(turnstileWidgetId.current);
        }
      } else {
        setStatus({ kind: "error", message: data.error ?? "Something went wrong." });
        if (turnstileEnabled && window.turnstile && turnstileWidgetId.current) {
          window.turnstile.reset(turnstileWidgetId.current);
          setTurnstileToken("");
        }
      }
    } catch {
      setStatus({ kind: "error", message: "Network error. Please try again." });
    }
  }

  if (status.kind === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border border-morpheus/40 bg-morpheus/5 p-6 text-center"
      >
        <p className="text-sm text-morpheus font-bold tracking-wider">
          &gt; ISSUE LOGGED
        </p>
        <p className="mt-2 text-sm text-zinc-400">
          Thanks for the report. Tracking as #{status.issueNumber}.
        </p>
        <a
          href={status.issueUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm text-morpheus hover:underline"
        >
          View on GitHub →
        </a>
        <button
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-4 block mx-auto text-xs text-zinc-500 hover:text-morpheus transition-colors"
        >
          Submit another report
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-zinc-300 mb-2">
          What happened?
        </label>
        <textarea
          id="description"
          required
          rows={8}
          maxLength={MAX_DESCRIPTION_LEN}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            if (status.kind === "error") setStatus({ kind: "idle" });
          }}
          placeholder="Describe the issue. What were you doing? What did you expect? What happened instead?"
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-morpheus focus:outline-none focus:ring-1 focus:ring-morpheus/30 transition-colors resize-y"
        />
        <p className="mt-1 text-xs text-zinc-500">
          {description.length} / {MAX_DESCRIPTION_LEN}
        </p>
      </div>

      <div>
        <label htmlFor="screenshots" className="block text-sm font-semibold text-zinc-300 mb-2">
          Screenshots <span className="text-zinc-500 font-normal">(optional, up to {MAX_SCREENSHOTS})</span>
        </label>
        <input
          id="screenshots"
          type="file"
          accept={ALLOWED_MIME.join(",")}
          multiple
          onChange={handleScreenshotChange}
          className="block w-full text-sm text-zinc-400 file:mr-4 file:rounded-lg file:border file:border-morpheus/40 file:bg-morpheus/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-morpheus hover:file:bg-morpheus/20 file:transition-colors file:cursor-pointer"
        />
        {screenshots.length > 0 && (
          <ul className="mt-2 space-y-1 text-xs text-zinc-500">
            {screenshots.map((f, i) => (
              <li key={i}>
                {f.name} <span className="text-zinc-600">({(f.size / 1024).toFixed(0)} KB)</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-zinc-300 mb-2">
          Email <span className="text-zinc-500 font-normal">(optional, for follow-up)</span>
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-morpheus focus:outline-none focus:ring-1 focus:ring-morpheus/30 transition-colors"
        />
      </div>

      {turnstileEnabled && (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
          <div ref={turnstileEl} className="cf-turnstile" />
        </>
      )}

      {status.kind === "error" && (
        <p role="alert" aria-live="assertive" className="text-xs text-red-400">
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={
          status.kind === "loading" ||
          !description.trim() ||
          (turnstileEnabled && !turnstileToken)
        }
        className="w-full rounded-lg border border-morpheus bg-morpheus/10 px-6 py-3 text-sm font-semibold text-morpheus transition-all hover:bg-morpheus/20 hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status.kind === "loading" ? (
          <span className="inline-flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border-2 border-morpheus border-t-transparent animate-spin" />
            Submitting...
          </span>
        ) : (
          "Submit report"
        )}
      </button>

      <p className="text-xs text-zinc-500">
        Reports are filed as public GitHub issues. Don&apos;t include passwords, tokens, or sensitive data.
      </p>
    </form>
  );
}
