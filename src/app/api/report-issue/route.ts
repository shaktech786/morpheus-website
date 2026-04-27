import { NextRequest, NextResponse } from "next/server";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { Octokit } from "@octokit/rest";

const MAX_DESCRIPTION_LEN = 8000;
const MAX_SCREENSHOT_BYTES = 5 * 1024 * 1024;
const MAX_SCREENSHOTS = 5;
const ALLOWED_MIME = new Set(["image/png", "image/jpeg", "image/webp", "image/gif"]);
const SCREENSHOT_BUCKET = "issue-screenshots";

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

function deriveTitle(description: string): string {
  const firstLine = description.split("\n")[0]?.trim() ?? "User report";
  const truncated = firstLine.length > 80 ? `${firstLine.slice(0, 77)}…` : firstLine;
  return truncated || "User report";
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

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    if (formData.get("website")) {
      return NextResponse.json({ message: "Thanks!" });
    }

    const description = String(formData.get("description") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const userAgentField = String(formData.get("userAgent") ?? "").trim();

    if (!description) {
      return NextResponse.json(
        { error: "Description is required" },
        { status: 400 }
      );
    }
    if (description.length > MAX_DESCRIPTION_LEN) {
      return NextResponse.json(
        { error: `Description exceeds ${MAX_DESCRIPTION_LEN} characters` },
        { status: 400 }
      );
    }
    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    const screenshots = formData.getAll("screenshots").filter((v): v is File => v instanceof File && v.size > 0);
    if (screenshots.length > MAX_SCREENSHOTS) {
      return NextResponse.json(
        { error: `Maximum ${MAX_SCREENSHOTS} screenshots allowed` },
        { status: 400 }
      );
    }
    for (const file of screenshots) {
      if (!ALLOWED_MIME.has(file.type)) {
        return NextResponse.json(
          { error: `Unsupported file type: ${file.type}` },
          { status: 400 }
        );
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

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";
    const userAgent = userAgentField || request.headers.get("user-agent") || "unknown";

    const bodyParts: string[] = [];
    bodyParts.push(description);
    if (screenshotUrls.length > 0) {
      bodyParts.push("\n---\n\n### Screenshots\n");
      screenshotUrls.forEach((url, i) => {
        bodyParts.push(`![screenshot-${i + 1}](${url})`);
      });
    }
    bodyParts.push("\n---\n\n<details><summary>Submission metadata</summary>\n");
    bodyParts.push(`- **Source:** getmorphe.us /report`);
    if (email) bodyParts.push(`- **Reporter email:** ${email}`);
    bodyParts.push(`- **User agent:** \`${userAgent}\``);
    bodyParts.push(`- **IP hash:** \`${ip === "unknown" ? "unknown" : Buffer.from(ip).toString("base64").slice(0, 12)}\``);
    bodyParts.push(`- **Submitted:** ${new Date().toISOString()}`);
    bodyParts.push(`- **Report ID:** ${reportId}`);
    bodyParts.push("\n</details>");

    const octokit = getOctokit();
    const { owner, repo } = getIssueRepo();
    const { data: issue } = await octokit.issues.create({
      owner,
      repo,
      title: deriveTitle(description),
      body: bodyParts.join("\n"),
      labels: ["user-report", "needs-triage"],
    });

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
