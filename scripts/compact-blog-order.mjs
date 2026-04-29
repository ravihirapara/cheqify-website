#!/usr/bin/env node
import { compactBlogOrder, makeWriteClient } from "./lib/compact-blog-order.mjs";

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error(
    "SANITY_WRITE_TOKEN env var is required.\n" +
      "Create a token with Editor or higher at https://sanity.io/manage → API → Tokens.",
  );
  process.exit(1);
}

const client = makeWriteClient(token);
const { total, changes } = await compactBlogOrder(client);

console.log(`Scanned ${total} published blogPost documents.`);
if (changes.length === 0) {
  console.log("Order is already contiguous — nothing to patch.");
  process.exit(0);
}

console.log(`Patched ${changes.length} document(s):`);
for (const c of changes) {
  console.log(`  ${c.slug ?? c._id}: ${c.oldOrder ?? "—"} → ${c.newOrder}`);
}
