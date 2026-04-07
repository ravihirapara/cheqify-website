import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { FeaturesHero } from "~/components/sections/features-hero";
import { FeaturesCore } from "~/components/sections/features-core";
import { FeatureHighlights } from "~/components/sections/feature-highlights";
import { CtaSection } from "~/components/sections/cta-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "features.meta" });

  return buildSeoMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/features",
  });
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <FeaturesHero />
      <FeaturesCore />
      <FeatureHighlights />
      <CtaSection />
    </>
  );
}
