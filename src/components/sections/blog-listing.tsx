"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "~/lib/utils";
import { BlogCard } from "~/components/sections/blog-card";
import type { BlogPostMeta } from "~/lib/blog";

interface BlogListingProps {
  posts: BlogPostMeta[];
}

export function BlogListing({ posts }: BlogListingProps) {
  const t = useTranslations("blog");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    for (const post of posts) {
      for (const tag of post.tags) {
        tagSet.add(tag);
      }
    }
    return Array.from(tagSet).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!activeTag) return posts;
    return posts.filter((post) => post.tags.includes(activeTag));
  }, [posts, activeTag]);

  const [featured, ...rest] = filteredPosts;

  return (
    <>
      <nav className="mb-12 flex gap-2 overflow-x-auto" aria-label="Filter by tag">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          className={cn(
            "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
            activeTag === null
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          {t("allPosts")}
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeTag === tag
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {tag}
          </button>
        ))}
      </nav>

      {featured && (
        <div className="mb-16">
          <BlogCard post={featured} featured />
        </div>
      )}

      {rest.length > 0 && (
        <div>
          <div className="mb-8 flex items-center">
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
