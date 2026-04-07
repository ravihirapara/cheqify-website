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
const LOCALES = ["en", "hi", "gu"];

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
        date: data.date || "",
        body: body.trim(),
      };
    });
}

// Convert markdown to Sanity Portable Text blocks (simple version)
function markdownToBlocks(md) {
  const lines = md.split("\n");
  const blocks = [];
  let currentList = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (currentList) {
        blocks.push(currentList);
        currentList = null;
      }
      continue;
    }

    // Headings
    const h2Match = trimmed.match(/^## (.+)/);
    if (h2Match) {
      if (currentList) { blocks.push(currentList); currentList = null; }
      blocks.push({
        _type: "block",
        _key: crypto.randomUUID().slice(0, 12),
        style: "h2",
        children: [{ _type: "span", _key: crypto.randomUUID().slice(0, 12), text: h2Match[1].replace(/\*\*/g, "") }],
      });
      continue;
    }

    const h3Match = trimmed.match(/^### (.+)/);
    if (h3Match) {
      if (currentList) { blocks.push(currentList); currentList = null; }
      blocks.push({
        _type: "block",
        _key: crypto.randomUUID().slice(0, 12),
        style: "h3",
        children: [{ _type: "span", _key: crypto.randomUUID().slice(0, 12), text: h3Match[1].replace(/\*\*/g, "") }],
      });
      continue;
    }

    // List items
    const listMatch = trimmed.match(/^[-*] (.+)/);
    if (listMatch) {
      blocks.push({
        _type: "block",
        _key: crypto.randomUUID().slice(0, 12),
        style: "normal",
        listItem: "bullet",
        level: 1,
        children: [{ _type: "span", _key: crypto.randomUUID().slice(0, 12), text: listMatch[1].replace(/\*\*/g, "") }],
      });
      continue;
    }

    // Table rows (skip tables for now, convert to text)
    if (trimmed.startsWith("|")) {
      if (trimmed.match(/^\|[-\s|]+\|$/)) continue; // separator
      const cells = trimmed.split("|").filter(Boolean).map(c => c.trim());
      blocks.push({
        _type: "block",
        _key: crypto.randomUUID().slice(0, 12),
        style: "normal",
        children: [{ _type: "span", _key: crypto.randomUUID().slice(0, 12), text: cells.join(" | ") }],
      });
      continue;
    }

    // Links
    if (currentList) { blocks.push(currentList); currentList = null; }

    // Regular paragraph
    blocks.push({
      _type: "block",
      _key: crypto.randomUUID().slice(0, 12),
      style: "normal",
      children: [{ _type: "span", _key: crypto.randomUUID().slice(0, 12), text: trimmed.replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") }],
    });
  }

  if (currentList) blocks.push(currentList);
  return blocks;
}

async function migrate() {
  console.log("Reading posts from markdown files...\n");

  // Read all English posts to get slugs
  const enPosts = readPosts("en");
  const hiPosts = readPosts("hi");
  const guPosts = readPosts("gu");

  console.log(`Found: ${enPosts.length} EN, ${hiPosts.length} HI, ${guPosts.length} GU posts\n`);

  for (let i = 0; i < enPosts.length; i++) {
    const en = enPosts[i];
    const hi = hiPosts.find((p) => p.slug === en.slug);
    const gu = guPosts.find((p) => p.slug === en.slug);

    const doc = {
      _id: `blog-${en.slug}`,
      _type: "blogPost",
      slug: { _type: "slug", current: en.slug },
      title_en: en.title,
      title_hi: hi?.title || en.title,
      title_gu: gu?.title || en.title,
      description_en: en.description,
      description_hi: hi?.description || en.description,
      description_gu: gu?.description || en.description,
      body_en: markdownToBlocks(en.body),
      body_hi: markdownToBlocks(hi?.body || en.body),
      body_gu: markdownToBlocks(gu?.body || en.body),
      author: en.author,
      tags: en.tags,
      order: i + 1,
    };

    console.log(`Migrating: ${en.slug} (order: ${i + 1})`);
    await client.createOrReplace(doc);
    console.log(`  ✓ Done\n`);
  }

  console.log("Migration complete!");
}

migrate().catch(console.error);
