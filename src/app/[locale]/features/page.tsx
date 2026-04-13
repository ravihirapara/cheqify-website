import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
import { routing } from "~/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
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
  const breadcrumbs = buildBreadcrumbJsonLd(locale, [{ name: "Features", path: "/features" }]);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Cheqify.app",
    description: "Cheque printing and lifecycle management software for Indian businesses. 300+ bank layouts, MICR validation, batch printing.",
    brand: { "@type": "Brand", name: "Cheqify" },
    url: "https://cheqify.app/en/features",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <FeaturesHero />
      <FeaturesCore />
      <FeatureHighlights />
      <CtaSection />
    </>
  );
}
