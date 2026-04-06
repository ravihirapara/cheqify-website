"use client";

import { useTranslations } from "next-intl";
import { Link } from "~/i18n/navigation";
import type { BlogPostMeta } from "~/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const t = useTranslations("blog");

  const formattedDate = new Date(post.date).toLocaleDateString(post.lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <article className="group relative flex min-h-[450px] flex-col overflow-hidden rounded-[2rem] bg-card transition-all hover:shadow-lg md:flex-row">
        <div className="relative w-full overflow-hidden bg-muted md:w-3/5">
          <div className="flex h-full min-h-[250px] items-center justify-center text-muted-foreground">
            <svg
              className="h-16 w-16 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
        </div>
        <div className="flex w-full flex-col justify-center p-8 md:w-2/5 md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              {t("featured")}
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              5 {t("minRead")}
            </span>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h2>
          </Link>
          <p className="mb-8 line-clamp-3 text-muted-foreground">
            {post.description}
          </p>
          <div className="mt-auto flex items-center gap-4">
            <div>
              <p className="text-sm font-bold text-foreground">{post.author}</p>
              <p className="text-xs text-muted-foreground">{formattedDate}</p>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group">
      <div className="mb-6 aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
        <div className="flex h-full items-center justify-center text-muted-foreground">
          <svg
            className="h-12 w-12 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </div>
      </div>
      <div className="mb-3 flex items-center gap-3">
        {post.tags[0] && (
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            {post.tags[0]}
          </span>
        )}
        <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
        <span className="text-xs text-muted-foreground">{formattedDate}</span>
      </div>
      <Link href={`/blog/${post.slug}`}>
        <h4 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h4>
      </Link>
      <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {post.description}
      </p>
    </article>
  );
}
