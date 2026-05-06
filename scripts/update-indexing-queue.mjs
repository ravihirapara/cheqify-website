#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const PROJECT_ID = "4lvsthqk";
const DATASET = "production";
const QUERY = `*[_type=="blogPost"]{"slug": slug.current} | order(_createdAt asc)`;
const LOCALES = ["en", "hi", "gu"];
const SITE = "https://cheqify.app";
const NEWLY_ADDED_MARKER = "## Newly Added — Pending Indexing";

const __dirname = dirname(fileURLToPath(import.meta.url));
const queuePath = resolve(__dirname, "..", "_bmad-output", "seo", "gsc-indexing-queue.md");

const url = new URL(`https://${PROJECT_ID}.api.sanity.io/v2023-10-01/data/query/${DATASET}`);
url.searchParams.set("query", QUERY);

const res = await fetch(url);
if (!res.ok) {
  console.error(`Sanity query failed: ${res.status} ${res.statusText}`);
  process.exit(1);
}
const { result } = await res.json();
if (!Array.isArray(result)) {
  console.error("Unexpected Sanity response.");
  process.exit(1);
}

const liveBlogSlugs = result.map((p) => p.slug).filter(Boolean);

const queue = readFileSync(queuePath, "utf8");
const queueUrls = new Set(
  (queue.match(/https:\/\/cheqify\.app\/[^\s)]+/g) || []).map((u) => u.replace(/[)\s]+$/, ""))
);

const missing = [];
for (const slug of liveBlogSlugs) {
  for (const loc of LOCALES) {
    const u = `${SITE}/${loc}/blog/${slug}`;
    if (!queueUrls.has(u)) missing.push(u);
  }
}

if (missing.length === 0) {
  console.log("Indexing queue is up to date — every live blog URL is already represented.");
} else {
  const today = new Date().toISOString().slice(0, 10);

  const block = `${NEWLY_ADDED_MARKER}

> Auto-appended by \`scripts/update-indexing-queue.mjs\` on ${today}. Move these URLs into a Day block (or new day) before submitting, then delete this section.

\`\`\`
${missing.join("\n")}
\`\`\`

---

`;

  let updated;
  const markerIndex = queue.indexOf(NEWLY_ADDED_MARKER);
  if (markerIndex >= 0) {
    const afterMarker = queue.indexOf("\n## ", markerIndex + NEWLY_ADDED_MARKER.length);
    const end = afterMarker >= 0 ? afterMarker + 1 : queue.length;
    updated = queue.slice(0, markerIndex) + block + queue.slice(end);
  } else {
    const insertAfter = queue.indexOf("\n## ");
    if (insertAfter < 0) {
      console.error("Could not find a heading to insert before — queue file is malformed.");
      process.exit(1);
    }
    updated = queue.slice(0, insertAfter + 1) + block + queue.slice(insertAfter + 1);
  }

  writeFileSync(queuePath, updated);

  console.log(`Appended ${missing.length} URL${missing.length === 1 ? "" : "s"} to ${queuePath}:`);
  for (const u of missing) console.log(`  + ${u}`);
  console.log(`\nNext: open the file, move these into a day block, then submit in GSC.`);
}
