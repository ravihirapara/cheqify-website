import { getTranslations } from "next-intl/server";
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

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = getBlogPosts(locale);

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <BlogHero />
        <BlogListing posts={posts} />
      </div>
    </section>
  );
}
