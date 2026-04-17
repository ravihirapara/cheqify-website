import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BlogFaq } from "~/components/blog/blog-faq";
import { Link } from "~/i18n/navigation";
import { getBlogPost, getBlogPosts, estimateReadingTime, tagToSlug } from "~/lib/blog";
import { buildSeoMetadata } from "~/lib/seo";
import { routing } from "~/i18n/routing";
import { Clock } from "lucide-react";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of routing.locales) {
    const posts = await getBlogPosts(locale);
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
  let post;
  try {
    post = await getBlogPost(locale, slug);
  } catch {
    return {};
  }

  if (!post) {
    return {};
  }

  const seo = buildSeoMetadata({
    title: `${post.meta.title} | Cheqify.app`,
    description: post.meta.description,
    locale,
    pathname: `/blog/${slug}`,
    image: post.meta.image || undefined,
  });

  return {
    ...seo,
    openGraph: {
      ...seo.openGraph,
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

  const readingTime = estimateReadingTime(post.content);

  // Get all posts to find prev/next and related
  const allPosts = await getBlogPosts(locale);
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  // Related posts: same tags, excluding current post
  const currentTags = new Set(post.meta.tags);
  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug && p.tags.some((tag) => currentTags.has(tag)))
    .slice(0, 3);

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

  const faqJsonLd = post.meta.hasFaq && post.meta.faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.meta.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  const howToJsonLd = post.meta.isHowTo && post.meta.howToSteps.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: post.meta.title,
    description: post.meta.description,
    step: post.meta.howToSteps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  } : null;

  return (
    <section className="px-6 py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {howToJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      )}
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <div className="mx-auto max-w-5xl">
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
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {t("readingTime", { minutes: readingTime })}
            </span>
            {post.meta.tags.length > 0 && (
              <>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                <div className="flex gap-2">
                  {post.meta.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tagToSlug(tag)}`}
                      className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Cover Image */}
          {post.meta.image && (
            <div className="mb-10 overflow-hidden rounded-2xl">
              <Image
                src={post.meta.image}
                alt={post.meta.title}
                width={1200}
                height={630}
                className="h-auto w-full"
              />
            </div>
          )}

          {/* Content */}
          <div className="blog-content max-w-none text-foreground/90">
            <PortableText value={post.content} />
          </div>
        </article>

        {/* FAQ Section */}
        {post.meta.hasFaq && post.meta.faqItems.length > 0 && (
          <BlogFaq items={post.meta.faqItems} heading={t("faqHeading")} />
        )}

        {/* Explore More — Internal Links */}
        <section className="mt-12 rounded-xl border border-border bg-muted/30 p-6 md:p-8">
          <h2 className="mb-6 text-xl font-bold text-foreground">{t("exploreMore")}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href="/features"
              className="group flex items-start gap-3 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground group-hover:text-primary">{t("linkFeatures")}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t("linkFeaturesDesc")}</p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
            </Link>
            <Link
              href="/pricing"
              className="group flex items-start gap-3 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground group-hover:text-primary">{t("linkPricing")}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t("linkPricingDesc")}</p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
            </Link>
            <Link
              href="/glossary"
              className="group flex items-start gap-3 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground group-hover:text-primary">{t("linkGlossary")}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t("linkGlossaryDesc")}</p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
            </Link>
            <Link
              href="/comparison"
              className="group flex items-start gap-3 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground group-hover:text-primary">{t("linkComparison")}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t("linkComparisonDesc")}</p>
              </div>
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
            </Link>
          </div>
          <div className="mt-4">
            <a
              href="https://app.cheqify.app/register"
              className="group flex items-center gap-3 rounded-lg bg-primary/5 border border-primary/20 p-4 transition-all hover:bg-primary/10 hover:border-primary/40"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-primary">{t("linkStartFree")}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t("linkStartFreeDesc")}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
            </a>
          </div>
        </section>

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

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-foreground">{t("relatedPosts")}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group overflow-hidden rounded-xl border border-border transition-all hover:border-primary/30 hover:shadow-md"
                >
                  {rp.image && (
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={rp.image}
                        alt={rp.title}
                        width={400}
                        height={225}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <p className="line-clamp-2 text-sm font-semibold text-foreground group-hover:text-primary">
                      {rp.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                      {rp.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
