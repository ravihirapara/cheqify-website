import { getTranslations } from "next-intl/server";
import { getBlogPosts } from "~/lib/blog";
import { BlogHero } from "~/components/sections/blog-hero";
import { BlogCard } from "~/components/sections/blog-card";

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

  const [featured, ...rest] = posts;

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <BlogHero />

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
      </div>
    </section>
  );
}
