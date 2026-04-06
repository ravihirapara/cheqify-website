import { getTranslations } from "next-intl/server";
import { PricingHero } from "~/components/sections/pricing-hero";
import { PricingCards } from "~/components/sections/pricing-cards";
import { WhyFree } from "~/components/sections/why-free";
import { CtaSection } from "~/components/sections/cta-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pricing.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <WhyFree />
      <CtaSection />
    </>
  );
}
