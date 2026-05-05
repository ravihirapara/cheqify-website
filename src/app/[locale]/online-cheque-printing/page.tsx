import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
import { routing } from "~/i18n/routing";
import { OnlineChequePrintingHero } from "~/components/sections/online-cheque-printing-hero";
import { OnlineChequePrintingSteps } from "~/components/sections/online-cheque-printing-steps";
import { OnlineChequePrintingBenefits } from "~/components/sections/online-cheque-printing-benefits";
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
  const t = await getTranslations({ locale, namespace: "onlineChequePrinting.meta" });

  return buildSeoMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/online-cheque-printing",
  });
}

export default async function OnlineChequePrintingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "onlineChequePrinting" });

  const breadcrumbs = buildBreadcrumbJsonLd(locale, [
    { name: t("breadcrumb"), path: "/online-cheque-printing" },
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
      <OnlineChequePrintingHero locale={locale} />
      <OnlineChequePrintingSteps locale={locale} />
      <OnlineChequePrintingBenefits locale={locale} />
      <LandingFaq namespace="onlineChequePrinting.faq" faqCount={6} />
      <LandingCta namespace="onlineChequePrinting.cta" />
    </>
  );
}
