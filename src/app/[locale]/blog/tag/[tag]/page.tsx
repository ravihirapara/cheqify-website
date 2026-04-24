import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
import { routing } from "~/i18n/routing";
import { getBlogPosts, tagToSlug } from "~/lib/blog";
import { BlogListing } from "~/components/sections/blog-listing";
import { Link } from "~/i18n/navigation";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const params: { locale: string; tag: string }[] = [];

  for (const locale of routing.locales) {
    const posts = await getBlogPosts(locale);
    const tags = new Set<string>();
    for (const post of posts) {
      for (const tag of post.tags) {
        tags.add(tag);
      }
    }
    for (const tag of tags) {
      params.push({ locale, tag: tagToSlug(tag) });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; tag: string }>;
}) {
  const { locale, tag } = await params;
  const allPosts = await getBlogPosts(locale);
  const originalTag = allPosts.flatMap((p) => p.tags).find((t) => tagToSlug(t) === tag) || tag;
  const t = await getTranslations({ locale, namespace: "blog" });

  return buildSeoMetadata({
    title: `${t("taggedWith", { tag: originalTag })} | Cheqify.app`,
    description: t("taggedWith", { tag: originalTag }),
    locale,
    pathname: `/blog/tag/${tag}`,
    noindex: true,
  });
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{ locale: string; tag: string }>;
}) {
  const { locale, tag } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });

  const allPosts = await getBlogPosts(locale);
  const originalTag = allPosts.flatMap((p) => p.tags).find((t) => tagToSlug(t) === tag) || tag;
  const filteredPosts = allPosts.filter((p) => p.tags.includes(originalTag));

  const breadcrumbs = buildBreadcrumbJsonLd(locale, [
    { name: "Blog", path: "/blog" },
    { name: originalTag, path: `/blog/tag/${tag}` },
  ]);

  return (
    <section className="px-6 py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="mx-auto max-w-7xl">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToBlog")}
        </Link>
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
          {t("taggedWith", { tag: originalTag })}
        </h1>
        <BlogListing posts={filteredPosts} />
      </div>
    </section>
  );
}
