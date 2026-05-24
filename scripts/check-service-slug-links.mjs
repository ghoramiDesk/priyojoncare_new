#!/usr/bin/env node
/**
 * Guardrail: ensure no source file outside `src/lib/routes.ts` hand-rolls
 * service-slug link patterns like `/services/$slug` or
 * `to: "/services/$slug"`. All such navigation must go through the
 * helpers in `src/lib/routes.ts` (serviceLinkProps, careAtHomeLinkProps,
 * residenceLinkProps, blogLinkProps).
 *
 * Run via `npm run check:routes` or in CI. Exits non-zero on violations.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");

// Files that are allowed to reference these patterns.
const ALLOWLIST = new Set(
  [
    "src/lib/routes.ts",
    "src/routeTree.gen.ts",
    // Route file definitions themselves legitimately declare these paths.
    "src/routes/services.$slug.tsx",
    "src/routes/care-at-home.$slug.tsx",
    "src/routes/residences.$slug.tsx",
    "src/routes/blog.$slug.tsx",
  ].map((p) => p.split("/").join(sep)),
);

// Patterns that indicate a hand-rolled dynamic slug link.
const PATTERNS = [
  /["'`]\/services\/\$slug["'`]/,
  /["'`]\/care-at-home\/\$slug["'`]/,
  /["'`]\/residences\/\$slug["'`]/,
  /["'`]\/blog\/\$slug["'`]/,
];

const EXTS = new Set([".ts", ".tsx", ".js", ".jsx"]);

/** @type {{ file: string; line: number; text: string }[]} */
const violations = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      walk(full);
      continue;
    }
    const ext = entry.slice(entry.lastIndexOf("."));
    if (!EXTS.has(ext)) continue;
    const rel = relative(ROOT, full);
    if (ALLOWLIST.has(rel)) continue;
    const lines = readFileSync(full, "utf8").split("\n");
    lines.forEach((text, i) => {
      if (PATTERNS.some((p) => p.test(text))) {
        violations.push({ file: rel, line: i + 1, text: text.trim() });
      }
    });
  }
}

walk(SRC);

if (violations.length > 0) {
  console.error(
    `\n✗ Found ${violations.length} hand-rolled slug link(s) outside src/lib/routes.ts:\n`,
  );
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line}`);
    console.error(`    ${v.text}`);
  }
  console.error(
    "\nUse the helpers from src/lib/routes.ts instead:\n" +
      "  serviceLinkProps(slug)      → service pages\n" +
      "  careAtHomeLinkProps(slug)   → /care-at-home/:slug\n" +
      "  residenceLinkProps(id)      → /residences/:locationId\n" +
      "  blogLinkProps(slug)         → /blog/:slug\n",
  );
  process.exit(1);
}

console.log("✓ No hand-rolled service-slug links found.");
