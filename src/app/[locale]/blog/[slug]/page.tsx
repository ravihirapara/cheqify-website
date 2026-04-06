import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "~/i18n/navigation";
import { getBlogPost, getBlogPosts } from "~/lib/blog";
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
    title: `${post.meta.title} | Cheqify.app`,
    description: post.meta.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const tCta = await getTranslations({ locale, namespace: "common.cta" });
  const post = await getBlogPost(locale, slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.meta.date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="px-6 pb-20 pt-32">
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

        {/* In-article CTA */}
        <div className="mt-12 overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-center">
          <div className="pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative mx-auto max-w-xl">
            <h3 className="text-2xl font-bold tracking-tight text-primary-foreground">
              {t("cta.heading")}
            </h3>
            <p className="mt-3 text-primary-foreground/70">
              {t("cta.description")}
            </p>
            <a
              href="https://app.cheqify.app/register"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-white px-8 py-3 font-bold text-primary hover:shadow-lg"
            >
              {tCta("startFree")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
