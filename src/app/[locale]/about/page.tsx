import { getTranslations } from "next-intl/server";
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

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCta />
    </>
  );
}
