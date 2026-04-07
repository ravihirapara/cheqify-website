import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const client = createClient({
  projectId: "4lvsthqk",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readPosts(locale) {
  const dir = path.join(BLOG_DIR, locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const content = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, content: body } = matter(content);
      return {
        slug: data.slug || filename.replace(/\.md$/, ""),
        title: data.title || "",
        description: data.description || "",
        author: data.author || "Cheqify Team",
        tags: data.tags || [],
        body: body.trim(),
      };
    });
}

function markdownToBlocks(md) {
  const lines = md.split("\n");
  const blocks = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const h2 = trimmed.match(/^## (.+)/);
    if (h2) {
      blocks.push({ _type: "block", _key: crypto.randomUUID().slice(0, 12), style: "h2", children: [{ _type: "span", _key: crypto.randomUUID().slice(0, 12), text: h2[1].replace(/\*\*/g, "") }] });
      continue;
    }
    const h3 = trimmed.match(/^### (.+)/);
    if (h3) {
      blocks.push({ _type: "block", _key: crypto.randomUUID().slice(0, 12), style: "h3", children: [{ _type: "span", _key: crypto.randomUUID().slice(0, 12), text: h3[1].replace(/\*\*/g, "") }] });
      continue;
    }
    const li = trimmed.match(/^[-*] (.+)/);
    if (li) {
      blocks.push({ _type: "block", _key: crypto.randomUUID().slice(0, 12), style: "normal", listItem: "bullet", level: 1, children: [{ _type: "span", _key: crypto.randomUUID().slice(0, 12), text: li[1].replace(/\*\*/g, "") }] });
      continue;
    }
    if (trimmed.startsWith("|")) {
      if (trimmed.match(/^\|[-\s|]+\|$/)) continue;
      const cells = trimmed.split("|").filter(Boolean).map(c => c.trim());
      blocks.push({ _type: "block", _key: crypto.randomUUID().slice(0, 12), style: "normal", children: [{ _type: "span", _key: crypto.randomUUID().slice(0, 12), text: cells.join(" | ") }] });
      continue;
    }
    blocks.push({ _type: "block", _key: crypto.randomUUID().slice(0, 12), style: "normal", children: [{ _type: "span", _key: crypto.randomUUID().slice(0, 12), text: trimmed.replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") }] });
  }
  return blocks;
}

async function migrate() {
  console.log("Reading posts...\n");
  const enPosts = readPosts("en");
  const hiPosts = readPosts("hi");
  const guPosts = readPosts("gu");
  console.log(`Found: ${enPosts.length} EN, ${hiPosts.length} HI, ${guPosts.length} GU\n`);

  for (let i = 0; i < enPosts.length; i++) {
    const en = enPosts[i];
    const hi = hiPosts.find((p) => p.slug === en.slug);
    const gu = guPosts.find((p) => p.slug === en.slug);

    const doc = {
      _id: `blog-${en.slug}`,
      _type: "blogPost",
      slug: { _type: "slug", current: en.slug },
      title_en: en.title, title_hi: hi?.title || en.title, title_gu: gu?.title || en.title,
      description_en: en.description, description_hi: hi?.description || en.description, description_gu: gu?.description || en.description,
      body_en: markdownToBlocks(en.body), body_hi: markdownToBlocks(hi?.body || en.body), body_gu: markdownToBlocks(gu?.body || en.body),
      author: en.author, tags: en.tags, order: i + 1,
    };

    console.log(`Migrating: ${en.slug} (order: ${i + 1})`);
    await client.createOrReplace(doc);
    console.log(`  Done\n`);
  }
  console.log("Migration complete!");
}

migrate().catch(console.error);
