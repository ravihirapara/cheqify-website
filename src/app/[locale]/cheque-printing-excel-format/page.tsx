import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
import { routing } from "~/i18n/routing";
import { ExcelFormatHero } from "~/components/sections/excel-format-hero";
import { ExcelFormatLimitations } from "~/components/sections/excel-format-limitations";
import { ExcelFormatComparison } from "~/components/sections/excel-format-comparison";
import { LandingFaq } from "~/components/sections/landing-faq";
import { LandingCta } from "~/components/sections/landing-cta";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "excelFormat.meta" });

  return buildSeoMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/cheque-printing-excel-format",
  });
}

export default async function ExcelFormatPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "excelFormat" });

  const breadcrumbs = buildBreadcrumbJsonLd(locale, [
    { name: t("breadcrumb"), path: "/cheque-printing-excel-format" },
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
      <ExcelFormatHero locale={locale} />
      <ExcelFormatLimitations locale={locale} />
      <ExcelFormatComparison locale={locale} />
      <LandingFaq namespace="excelFormat.faq" faqCount={6} />
      <LandingCta namespace="excelFormat.cta" />
    </>
  );
}
