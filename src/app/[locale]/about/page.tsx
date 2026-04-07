import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { AboutHero } from "~/components/sections/about-hero";
import { AboutStory } from "~/components/sections/about-story";
import { AboutValues } from "~/components/sections/about-values";
import { AboutCta } from "~/components/sections/about-cta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.meta" });

  return buildSeoMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCta />
    </>
  );
}
