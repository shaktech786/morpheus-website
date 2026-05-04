import { NextRequest, NextResponse } from "next/server";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { Octokit } from "@octokit/rest";
import { Resend } from "resend";

const MAX_DESCRIPTION_LEN = 8000;
const MAX_TITLE_LEN = 200;
const MAX_STEPS_LEN = 4000;
const MAX_SCREENSHOT_BYTES = 5 * 1024 * 1024;
const MAX_SCREENSHOTS = 5;
const ALLOWED_MIME = new Set(["image/png", "image/jpeg", "image/webp", "image/gif"]);
const SCREENSHOT_BUCKET = "issue-screenshots";

const ALLOWED_CATEGORIES = new Set(["bug", "feature", "ux", "other"]);
const ALLOWED_SOURCES = new Set(["website", "mobile", "desktop"]);

const CATEGORY_LABELS: Record<string, string[]> = {
  bug: ["bug"],
  feature: ["enhancement"],
  ux: ["ux"],
  other: [],
};

const CATEGORY_DISPLAY: Record<string, string> = {
  bug: "Bug Report",
  feature: "Feature Request",
  ux: "UX Issue",
  other: "General Feedback",
};

function getSupabase() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

function getOctokit() {
  const token = process.env.GITHUB_ISSUE_TOKEN;
  if (!token) throw new Error("GITHUB_ISSUE_TOKEN not configured");
  return new Octokit({ auth: token });
}

function getIssueRepo(): { owner: string; repo: string } {
  const slug = process.env.GITHUB_ISSUE_REPO ?? "shaktech786/morpheus";
  const [owner, repo] = slug.split("/");
  if (!owner || !repo) throw new Error(`Invalid GITHUB_ISSUE_REPO: ${slug}`);
  return { owner, repo };
}

function deriveTitle(description: string, prefix?: string): string {
  const firstLine = description.split("\n")[0]?.trim() ?? "User report";
  const truncated = firstLine.length > 80 ? `${firstLine.slice(0, 77)}…` : firstLine;
  const base = truncated || "User report";
  return prefix ? `${prefix} ${base}`.slice(0, MAX_TITLE_LEN) : base;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function uploadScreenshot(
  supabase: SupabaseClient,
  file: File,
  reportId: string,
  index: number
): Promise<string> {
  const ext = file.type.split("/")[1] ?? "png";
  const path = `${reportId}/${index}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage
    .from(SCREENSHOT_BUCKET)
    .upload(path, buffer, { contentType: file.type, upsert: false });

  if (error) throw new Error(`Screenshot upload failed: ${error.message}`);

  const { data } = supabase.storage.from(SCREENSHOT_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error("[turnstile] verify failed:", err);
    return false;
  }
}

async function sendConfirmationEmail(
  email: string,
  issueNumber: number,
  issueUrl: string
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Morpheus <noreply@getmorphe.us>",
      to: email,
      subject: `Got your report — tracking as #${issueNumber}`,
      html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#0a0a0a;font-family:'Courier New',monospace;color:#b0b0b0;">
<div style="max-width:600px;margin:0 auto;padding:40px 24px;">
  <div style="text-align:center;margin-bottom:32px;">
    <h1 style="color:#00ff88;font-size:28px;margin:0;text-shadow:0 0 10px rgba(0,255,136,0.5);">morpheus</h1>
  </div>
  <div style="background:#141414;border:1px solid #333;border-radius:12px;padding:32px;">
    <p style="color:#00ff88;font-size:14px;margin:0 0 16px 0;letter-spacing:2px;">&gt; REPORT RECEIVED</p>
    <h2 style="color:#fff;font-size:22px;margin:0 0 16px 0;">Thanks for the report.</h2>
    <p style="color:#b0b0b0;font-size:15px;line-height:1.6;margin:0 0 24px 0;">
      We're tracking your issue as <strong style="color:#00ff88;">#${issueNumber}</strong>.
      You can follow updates on GitHub:
    </p>
    <div style="text-align:center;">
      <a href="${issueUrl}" style="display:inline-block;background:#0a0a0a;border:1px solid #00ff88;color:#00ff88;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">View issue →</a>
    </div>
  </div>
  <div style="text-align:center;padding:16px 0;border-top:1px solid #333;margin-top:24px;">
    <p style="color:#666;font-size:12px;margin:0;">&copy; ${new Date().getFullYear()} Morpheus &mdash; <a href="https://getmorphe.us" style="color:#004400;">getmorphe.us</a></p>
  </div>
</div>
</body></html>`,
    });
  } catch (err) {
    console.error("[report-issue] confirmation email failed:", err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    if (formData.get("website")) {
      return NextResponse.json({ message: "Thanks!" });
    }

    const description = String(formData.get("description") ?? "").trim();
    const customTitle = String(formData.get("title") ?? "").trim();
    const stepsToReproduce = String(formData.get("stepsToReproduce") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const userAgentField = String(formData.get("userAgent") ?? "").trim();
    const turnstileToken = String(formData.get("cf-turnstile-response") ?? "").trim();

    const sourceRaw = String(formData.get("source") ?? "website").trim();
    const source = ALLOWED_SOURCES.has(sourceRaw) ? sourceRaw : "website";

    const categoryRaw = String(formData.get("category") ?? "").trim();
    const category = ALLOWED_CATEGORIES.has(categoryRaw) ? categoryRaw : "";

    const platform = String(formData.get("platform") ?? "").trim();
    const osVersion = String(formData.get("osVersion") ?? "").trim();
    const appVersion = String(formData.get("appVersion") ?? "").trim();
    const buildNumber = String(formData.get("buildNumber") ?? "").trim();
    const connectionStatus = String(formData.get("connectionStatus") ?? "").trim();

    if (!description) {
      return NextResponse.json({ error: "Description is required" }, { status: 400 });
    }
    if (description.length > MAX_DESCRIPTION_LEN) {
      return NextResponse.json(
        { error: `Description exceeds ${MAX_DESCRIPTION_LEN} characters` },
        { status: 400 }
      );
    }
    if (customTitle.length > MAX_TITLE_LEN) {
      return NextResponse.json({ error: "Title too long" }, { status: 400 });
    }
    if (stepsToReproduce.length > MAX_STEPS_LEN) {
      return NextResponse.json({ error: "Steps too long" }, { status: 400 });
    }
    if (email && !isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    const turnstileOk = await verifyTurnstile(turnstileToken, ip);
    if (!turnstileOk) {
      return NextResponse.json(
        { error: "Bot verification failed. Please refresh and try again." },
        { status: 400 }
      );
    }

    const screenshots = formData
      .getAll("screenshots")
      .filter((v): v is File => v instanceof File && v.size > 0);
    if (screenshots.length > MAX_SCREENSHOTS) {
      return NextResponse.json(
        { error: `Maximum ${MAX_SCREENSHOTS} screenshots allowed` },
        { status: 400 }
      );
    }
    for (const file of screenshots) {
      if (!ALLOWED_MIME.has(file.type)) {
        return NextResponse.json({ error: `Unsupported file type: ${file.type}` }, { status: 400 });
      }
      if (file.size > MAX_SCREENSHOT_BYTES) {
        return NextResponse.json(
          { error: `Screenshot exceeds ${MAX_SCREENSHOT_BYTES / 1024 / 1024}MB` },
          { status: 400 }
        );
      }
    }

    const reportId = crypto.randomUUID();
    const screenshotUrls: string[] = [];
    if (screenshots.length > 0) {
      const supabase = getSupabase();
      for (let i = 0; i < screenshots.length; i++) {
        const url = await uploadScreenshot(supabase, screenshots[i], reportId, i);
        screenshotUrls.push(url);
      }
    }

    const userAgent = userAgentField || request.headers.get("user-agent") || "unknown";

    const bodyParts: string[] = [];
    if (category) {
      bodyParts.push(`## ${CATEGORY_DISPLAY[category]}`);
      bodyParts.push("");
      bodyParts.push("### Description");
    }
    bodyParts.push(description);

    if (stepsToReproduce) {
      bodyParts.push("");
      bodyParts.push("### Steps to reproduce");
      bodyParts.push(stepsToReproduce);
    }

    if (screenshotUrls.length > 0) {
      bodyParts.push("\n---\n\n### Screenshots\n");
      screenshotUrls.forEach((url, i) => {
        bodyParts.push(`![screenshot-${i + 1}](${url})`);
      });
    }

    bodyParts.push("\n---\n\n<details><summary>Submission metadata</summary>\n");
    bodyParts.push(`- **Source:** ${source}`);
    if (email) bodyParts.push(`- **Reporter email:** ${email}`);
    if (platform) bodyParts.push(`- **Platform:** ${platform}`);
    if (osVersion) bodyParts.push(`- **OS version:** ${osVersion}`);
    if (appVersion) {
      bodyParts.push(
        `- **App version:** ${appVersion}${buildNumber ? ` (build ${buildNumber})` : ""}`
      );
    }
    if (connectionStatus) bodyParts.push(`- **Connection:** ${connectionStatus}`);
    bodyParts.push(`- **User agent:** \`${userAgent}\``);
    bodyParts.push(
      `- **IP hash:** \`${ip === "unknown" ? "unknown" : Buffer.from(ip).toString("base64").slice(0, 12)}\``
    );
    bodyParts.push(`- **Submitted:** ${new Date().toISOString()}`);
    bodyParts.push(`- **Report ID:** ${reportId}`);
    bodyParts.push("\n</details>");

    const titlePrefix = source === "mobile" ? "[Mobile]" : undefined;
    const title = customTitle
      ? `${titlePrefix ? `${titlePrefix} ` : ""}${customTitle}`.slice(0, MAX_TITLE_LEN)
      : deriveTitle(description, titlePrefix);

    const labels = ["user-report", "needs-triage"];
    if (category && CATEGORY_LABELS[category]) labels.push(...CATEGORY_LABELS[category]);
    if (source === "mobile") labels.push("mobile");

    const octokit = getOctokit();
    const { owner, repo } = getIssueRepo();
    const { data: issue } = await octokit.issues.create({
      owner,
      repo,
      title,
      body: bodyParts.join("\n"),
      labels: Array.from(new Set(labels)),
    });

    if (email) {
      await sendConfirmationEmail(email, issue.number, issue.html_url);
    }

    return NextResponse.json({
      message: "Issue submitted",
      issueUrl: issue.html_url,
      issueNumber: issue.number,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("[report-issue] failed:", msg);
    return NextResponse.json(
      { error: "Failed to submit issue. Please try again." },
      { status: 500 }
    );
  }
}
