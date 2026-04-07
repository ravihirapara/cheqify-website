import type { MetadataRoute } from "next";
import { getBlogPosts } from "~/lib/blog";

export const dynamic = "force-static";

const BASE_URL = "https://cheqify.app";
const LOCALES = ["en", "hi", "gu"];
const STATIC_PAGES = ["", "/features", "/pricing", "/blog", "/contact", "/about", "/privacy", "/comparison"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages x locales
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

  // Blog posts x locales
  for (const locale of LOCALES) {
    const posts = await getBlogPosts(locale);
    for (const post of posts) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
