import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
import { getBlogPosts } from "~/lib/blog";
import { BlogHero } from "~/components/sections/blog-hero";
import { BlogListing } from "~/components/sections/blog-listing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.meta" });

  return buildSeoMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/blog",
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const posts = getBlogPosts(locale);
  const breadcrumbs = buildBreadcrumbJsonLd(locale, [{ name: "Blog", path: "/blog" }]);

  return (
    <section className="px-6 py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <div className="mx-auto max-w-7xl">
        <BlogHero />
        <BlogListing posts={posts} />
      </div>
    </section>
  );
}
