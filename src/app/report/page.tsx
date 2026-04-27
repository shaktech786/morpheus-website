import type { Metadata } from "next";
import ReportIssueForm from "@/components/ReportIssueForm";

export const metadata: Metadata = {
  title: "Report an Issue",
  description:
    "Report a bug or issue with Morpheus. Submissions are tracked as public GitHub issues.",
  alternates: { canonical: "https://getmorphe.us/report" },
  robots: { index: true, follow: true },
};

export default function ReportPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-10">
        <p className="text-xs text-morpheus-dark tracking-widest mb-2">
          &gt; SUPPORT
        </p>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Report an issue
        </h1>
        <p className="mt-3 text-sm text-zinc-400">
          Found a bug or something not working right? Tell us about it. Reports
          go straight to our GitHub tracker.
        </p>
      </div>
      <ReportIssueForm />
    </div>
  );
}
