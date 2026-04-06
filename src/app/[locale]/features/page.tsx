import { getTranslations } from "next-intl/server";
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

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <FeaturesCore />
      <FeatureHighlights />
      <CtaSection />
    </>
  );
}
