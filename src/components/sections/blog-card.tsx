"use client";

import Image from "next/image";
import { Link } from "~/i18n/navigation";
import { Printer } from "lucide-react";
import { cn } from "~/lib/utils";
import type { BlogPostMeta } from "~/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
}

function BlogImage({ post, className }: { post: BlogPostMeta; className?: string }) {
  if (post.image) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5", className)}>
      <Printer className="h-16 w-16 text-primary/40" />
    </div>
  );
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString(post.lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <article className="group relative flex min-h-[450px] flex-col overflow-hidden rounded-[2rem] bg-card transition-all hover:shadow-lg md:flex-row">
        <div className="relative w-full overflow-hidden md:w-3/5">
          <BlogImage post={post} className="h-full min-h-[250px] w-full" />
        </div>
        <div className="flex w-full flex-col justify-center p-8 md:w-2/5 md:p-12">
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                {tag}
              </span>
            ))}
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
      <div className="mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
        <BlogImage post={post} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
            {tag}
          </span>
        ))}
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
