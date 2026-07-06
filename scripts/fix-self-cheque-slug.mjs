#!/usr/bin/env node
// One-off: fix the corrupted slug on post #32 (self-cheque).
// The slug was pasted as "self-cheque-rules-withdrawal-limitsBanking & RBI"
// (the "Banking & RBI" tag leaked into the slug field). That raw " & " is
// invalid XML in the sitemap and 404s the live URL. Correct it to the clean slug.
//
// Usage:
//   node scripts/fix-self-cheque-slug.mjs          # dry run (read-only)
//   node scripts/fix-self-cheque-slug.mjs --apply   # write the fix
import { readFileSync } from "node:fs";
import { createClient } from "@sanity/client";

// Load SANITY_API_TOKEN from .env.local (scripts don't auto-load it).
try {
  for (const line of readFileSync(".env.local", "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
} catch {}

const token = process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error("SANITY_API_TOKEN missing in .env.local");
  process.exit(1);
}

const BAD = "self-cheque-rules-withdrawal-limitsBanking & RBI";
const GOOD = "self-cheque-rules-withdrawal-limits";
const apply = process.argv.includes("--apply");

const client = createClient({
  projectId: "4lvsthqk",
  dataset: "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const docs = await client.fetch(
  `*[_type=="blogPost" && slug.current==$bad]{ _id, "slug": slug.current, title }`,
  { bad: BAD },
);

if (docs.length === 0) {
  console.log(`No document found with slug "${BAD}". Nothing to do.`);
  process.exit(0);
}

for (const d of docs) {
  console.log(`${d._id}\n  title: ${d.title}\n  slug:  "${d.slug}" -> "${GOOD}"`);
}

if (!apply) {
  console.log("\nDRY RUN. Re-run with --apply to write the fix.");
  process.exit(0);
}

const tx = client.transaction();
for (const d of docs) tx.patch(d._id, { set: { "slug.current": GOOD } });
await tx.commit();
console.log(`\nPatched ${docs.length} document(s). Rebuild Netlify to regenerate the sitemap.`);
