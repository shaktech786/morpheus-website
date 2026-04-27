#!/usr/bin/env node
import { existsSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const REQUIRED = ["GITHUB_ISSUE_TOKEN", "GITHUB_ISSUE_REPO", "SUPABASE_SERVICE_ROLE_KEY"];

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const marker = resolve(root, "SETUP_REQUIRED.md");

const missing = REQUIRED.filter((k) => !process.env[k] || process.env[k].trim() === "");

if (missing.length === 0) {
  if (existsSync(marker)) {
    rmSync(marker);
    console.log("[check-setup] All required env vars present. Removed SETUP_REQUIRED.md.");
  }
  process.exit(0);
}

const banner = "═".repeat(78);
const onVercel = process.env.VERCEL === "1";
const lines = [
  "",
  banner,
  "  SETUP REQUIRED — /api/report-issue cannot ship without these env vars:",
  "",
  ...missing.map((k) => `    ✗ ${k}`),
  "",
  "  See SETUP_REQUIRED.md at the repo root for setup steps.",
  banner,
  "",
];
console.error(lines.join("\n"));

if (onVercel) {
  console.error(
    "Set these in Vercel: Project Settings → Environment Variables, then redeploy.\n"
  );
  process.exit(1);
}

console.error(
  "Skipping check for local build (env vars only required in production).\n" +
    "Set them in .env.local to remove this warning.\n"
);
process.exit(0);
