import { sanityClient } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { PortableTextBlock } from "@portabletext/react";
const builder = imageUrlBuilder(sanityClient);

export function estimateReadingTime(blocks: PortableTextBlock[]): number {
  let wordCount = 0;
  for (const block of blocks) {
    if (block._type === "block" && Array.isArray(block.children)) {
      for (const child of block.children) {
        if (typeof child.text === "string") {
          wordCount += child.text.split(/\s+/).filter(Boolean).length;
        }
      }
    }
  }
  return Math.max(1, Math.round(wordCount / 200));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function urlFor(source: any) {
  return builder.image(source);
}

export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  lang: string;
  tags: string[];
  image: string;
  order: number;
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: PortableTextBlock[];
}

const LOCALE_FIELDS: Record<string, { title: string; description: string; body: string }> = {
  en: { title: "title_en", description: "description_en", body: "body_en" },
  hi: { title: "title_hi", description: "description_hi", body: "body_hi" },
  gu: { title: "title_gu", description: "description_gu", body: "body_gu" },
};

function getFields(locale: string) {
  return LOCALE_FIELDS[locale] || LOCALE_FIELDS.en;
}

export async function getBlogPosts(locale: string): Promise<BlogPostMeta[]> {
  const f = getFields(locale);

  const query = `*[_type == "blogPost"] | order(order asc) {
    "title": ${f.title},
    "description": ${f.description},
    "slug": slug.current,
    image,
    tags,
    order,
    author,
    _createdAt
  }`;

  const posts = await sanityClient.fetch(query);

  return (posts || [])
    .filter((p: Record<string, string>) => p.title && p.slug)
    .map((p: Record<string, unknown>) => ({
      title: (p.title as string) || "",
      description: (p.description as string) || "",
      date: (p._createdAt as string) || "",
      author: (p.author as string) || "Cheqify Team",
      slug: (p.slug as string) || "",
      lang: locale,
      tags: (p.tags as string[]) || [],
      image: p.image ? urlFor(p.image as Record<string, unknown>).width(800).url() : "",
      order: (p.order as number) || 999,
    }));
}

export async function getBlogPost(
  locale: string,
  slug: string
): Promise<BlogPost | null> {
  const f = getFields(locale);

  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    "title": ${f.title},
    "description": ${f.description},
    "body": ${f.body},
    "slug": slug.current,
    image,
    tags,
    order,
    author,
    _createdAt
  }`;

  const post = await sanityClient.fetch(query, { slug });

  if (!post) return null;

  return {
    meta: {
      title: post.title || "",
      description: post.description || "",
      date: post._createdAt || "",
      author: post.author || "Cheqify Team",
      slug: post.slug,
      lang: locale,
      tags: post.tags || [],
      image: post.image ? urlFor(post.image).width(1200).url() : "",
      order: post.order || 999,
    },
    content: post.body || [],
  };
}
