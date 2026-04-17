import type { MetadataRoute } from "next";
import { getBlogPosts, tagToSlug } from "~/lib/blog";

export const dynamic = "force-static";

const BASE_URL = "https://cheqify.app";
const LOCALES = ["en", "hi", "gu"];
const STATIC_PAGES = ["", "/features", "/pricing", "/blog", "/contact", "/about", "/privacy", "/terms", "/comparison", "/glossary"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of STATIC_PAGES) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
      });
    }
  }

  const allTags = new Set<string>();

  for (const locale of LOCALES) {
    const posts = await getBlogPosts(locale);
    for (const post of posts) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
      });
      for (const tag of post.tags) {
        allTags.add(tag);
      }
    }
  }

  for (const tag of allTags) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/tag/${tagToSlug(tag)}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
