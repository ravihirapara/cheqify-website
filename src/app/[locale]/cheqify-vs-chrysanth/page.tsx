import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
import { routing } from "~/i18n/routing";
import { ComparisonHero } from "~/components/sections/comparison-hero";
import { ComparisonTable } from "~/components/sections/comparison-table";
import { ComparisonAdvantages } from "~/components/sections/comparison-advantages";
import { ComparisonVerdict } from "~/components/sections/comparison-verdict";
import { LandingFaq } from "~/components/sections/landing-faq";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "comparisonChrysanth.meta" });

  return buildSeoMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/cheqify-vs-chrysanth",
  });
}

export default async function CheqifyVsChrysanthPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "comparisonChrysanth" });

  const breadcrumbs = buildBreadcrumbJsonLd(locale, [
    { name: t("breadcrumb"), path: "/cheqify-vs-chrysanth" },
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [1, 2, 3, 4, 5, 6].map((n) => ({
      "@type": "Question",
      name: t(`faq.faq${n}Question`),
      acceptedAnswer: { "@type": "Answer", text: t(`faq.faq${n}Answer`) },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ComparisonHero namespace="comparisonChrysanth" />
      <ComparisonTable
        namespace="comparisonChrysanth"
        competitorKey="chrysanth"
        competitorLoses={[1, 2, 4, 6, 7, 8, 9, 11]}
      />
      <ComparisonAdvantages namespace="comparisonChrysanth" />
      <LandingFaq namespace="comparisonChrysanth.faq" faqCount={6} />
      <ComparisonVerdict namespace="comparisonChrysanth" />
    </>
  );
}
