"use client";

import { useTranslations } from "next-intl";
import { Link } from "~/i18n/navigation";
import { Printer, AlertTriangle, ArrowLeftRight, Shield, Calendar, ScanLine } from "lucide-react";
import type { BlogPostMeta } from "~/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
}

const SLUG_ICONS: Record<string, typeof Printer> = {
  "how-to-print-cheque-at-home": Printer,
  "cheque-bounce-reasons-and-solutions": AlertTriangle,
  "cheqify-vs-manual-cheque-writing": ArrowLeftRight,
  "how-to-avoid-cheque-fraud-in-india": Shield,
  "post-dated-cheques-rules-and-best-practices": Calendar,
  "what-is-micr-code-on-cheque": ScanLine,
};

const SLUG_COLORS: Record<string, string> = {
  "how-to-print-cheque-at-home": "from-primary/20 to-primary/5",
  "cheque-bounce-reasons-and-solutions": "from-red-400/20 to-orange-400/5",
  "cheqify-vs-manual-cheque-writing": "from-blue-400/20 to-primary/5",
  "how-to-avoid-cheque-fraud-in-india": "from-red-500/20 to-red-400/5",
  "post-dated-cheques-rules-and-best-practices": "from-amber-400/20 to-yellow-400/5",
  "what-is-micr-code-on-cheque": "from-blue-500/20 to-blue-400/5",
};

function BlogImage({ slug, className }: { slug: string; className?: string }) {
  const Icon = SLUG_ICONS[slug] ?? Printer;
  const gradient = SLUG_COLORS[slug] ?? "from-primary/20 to-primary/5";

  return (
    <div className={`flex items-center justify-center bg-gradient-to-br ${gradient} ${className ?? ""}`}>
      <Icon className="h-16 w-16 text-primary/40" />
    </div>
  );
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
        <div className="relative w-full overflow-hidden md:w-3/5">
          <BlogImage slug={post.slug} className="h-full min-h-[250px] w-full" />
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
      <div className="mb-6 aspect-[16/10] overflow-hidden rounded-2xl">
        <BlogImage slug={post.slug} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
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
