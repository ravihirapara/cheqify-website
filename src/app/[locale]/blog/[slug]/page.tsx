import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "~/i18n/navigation";
import { getBlogPost, getBlogPosts } from "~/lib/blog";
import { buildSeoMetadata } from "~/lib/seo";
import { routing } from "~/i18n/routing";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of routing.locales) {
    const posts = getBlogPosts(locale);
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getBlogPost(locale, slug);

  if (!post) {
    return {};
  }

  return {
    ...buildSeoMetadata({
      title: `${post.meta.title} | Cheqify.app`,
      description: post.meta.description,
      locale,
      pathname: `/blog/${slug}`,
    }),
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      url: `https://cheqify.app/${locale}/blog/${slug}`,
      siteName: "Cheqify.app",
      locale,
      type: "article",
      publishedTime: post.meta.date,
      authors: [post.meta.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });
  const post = await getBlogPost(locale, slug);

  if (!post) {
    notFound();
  }

  // Get all posts to find prev/next
  const allPosts = getBlogPosts(locale);
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const formattedDate = new Date(post.meta.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const breadcrumbs = buildBreadcrumbJsonLd(locale, [
    { name: "Blog", path: "/blog" },
    { name: post.meta.title, path: `/blog/${slug}` },
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    author: {
      "@type": "Person",
      name: post.meta.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Cheqify.app",
      url: "https://cheqify.app",
    },
    mainEntityOfPage: `https://cheqify.app/${locale}/blog/${slug}`,
  };

  return (
    <section className="px-6 py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl">
        {/* Back to blog */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToBlog")}
        </Link>

        <article>
          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
            {post.meta.title}
          </h1>

          {/* Meta */}
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{formattedDate}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>{post.meta.author}</span>
            {post.meta.tags.length > 0 && (
              <>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                <div className="flex gap-2">
                  {post.meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div
            className="blog-content max-w-none text-foreground/90"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Prev / Next Navigation */}
        <nav className="mt-12 grid grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group flex items-start gap-3 rounded-xl border border-border p-4 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <ChevronLeft className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              <div className="min-w-0">
                <p className="text-xs font-medium text-muted-foreground">{t("prevPost")}</p>
                <p className="mt-1 truncate text-sm font-semibold text-foreground group-hover:text-primary">
                  {prevPost.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex items-start justify-end gap-3 rounded-xl border border-border p-4 text-right transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="min-w-0">
                <p className="text-xs font-medium text-muted-foreground">{t("nextPost")}</p>
                <p className="mt-1 truncate text-sm font-semibold text-foreground group-hover:text-primary">
                  {nextPost.title}
                </p>
              </div>
              <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </section>
  );
}
