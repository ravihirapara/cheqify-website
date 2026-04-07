import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
import { ComparisonHero } from "~/components/sections/comparison-hero";
import { ComparisonTable } from "~/components/sections/comparison-table";
import { ComparisonAdvantages } from "~/components/sections/comparison-advantages";
import { ComparisonVerdict } from "~/components/sections/comparison-verdict";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "comparison.meta" });

  return buildSeoMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/comparison",
  });
}

const COMPARISON_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Cheqify really free compared to ChequePot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Cheqify is 100% free with all features included. ChequePot charges for basic cheque printing functionality. Cheqify offers 300+ bank formats, lifecycle tracking, batch printing, and team management at zero cost.",
      },
    },
    {
      "@type": "Question",
      name: "How does Cheqify compare to ChequePot in features?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cheqify offers significantly more features than ChequePot including automatic MICR validation, lifecycle tracking, owner dashboard, team management, multi-language support (English, Hindi, Gujarati), mobile responsive design, and export reports in PDF, Excel, and CSV formats.",
      },
    },
    {
      "@type": "Question",
      name: "Can I switch from ChequePot to Cheqify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, switching is easy. Sign up for free at Cheqify, select your bank from 300+ pre-loaded formats, and start printing cheques immediately. No data migration needed — just start fresh with better tools at zero cost.",
      },
    },
  ],
};

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const breadcrumbs = buildBreadcrumbJsonLd(locale, [
    { name: "Comparison", path: "/comparison" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(COMPARISON_FAQ_JSONLD) }}
      />
      <ComparisonHero />
      <ComparisonTable />
      <ComparisonAdvantages />
      <ComparisonVerdict />
    </>
  );
}
