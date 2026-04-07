import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
import { routing } from "~/i18n/routing";
import { ComparisonHero } from "~/components/sections/comparison-hero";
import { ComparisonTable } from "~/components/sections/comparison-table";
import { ComparisonAdvantages } from "~/components/sections/comparison-advantages";
import { ComparisonVerdict } from "~/components/sections/comparison-verdict";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "comparison" });

  const breadcrumbs = buildBreadcrumbJsonLd(locale, [
    { name: t("breadcrumb"), path: "/comparison" },
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: t("faq.q1"),
        acceptedAnswer: { "@type": "Answer", text: t("faq.a1") },
      },
      {
        "@type": "Question",
        name: t("faq.q2"),
        acceptedAnswer: { "@type": "Answer", text: t("faq.a2") },
      },
      {
        "@type": "Question",
        name: t("faq.q3"),
        acceptedAnswer: { "@type": "Answer", text: t("faq.a3") },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ComparisonHero />
      <ComparisonTable />
      <ComparisonAdvantages />
      <ComparisonVerdict />
    </>
  );
}
