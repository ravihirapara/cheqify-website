import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  lang: string;
  tags: string[];
  image: string;
}

export interface BlogPost {
  meta: BlogPostMeta;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getBlogPosts(locale: string): BlogPostMeta[] {
  const dir = path.join(BLOG_DIR, locale);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      title: data.title ?? "",
      description: data.description ?? "",
      date: data.date ?? "",
      author: data.author ?? "",
      slug: data.slug ?? filename.replace(/\.md$/, ""),
      lang: data.lang ?? locale,
      tags: data.tags ?? [],
      image: data.image ?? "",
    } satisfies BlogPostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getBlogPost(
  locale: string,
  slug: string
): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, locale, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content: markdown } = matter(fileContent);

  const processed = await remark().use(remarkGfm).use(html).process(markdown);
  const contentHtml = processed.toString();

  return {
    meta: {
      title: data.title ?? "",
      description: data.description ?? "",
      date: data.date ?? "",
      author: data.author ?? "",
      slug: data.slug ?? slug,
      lang: data.lang ?? locale,
      tags: data.tags ?? [],
      image: data.image ?? "",
    },
    content: contentHtml,
  };
}
