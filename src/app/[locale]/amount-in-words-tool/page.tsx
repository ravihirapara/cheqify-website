import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
import { routing } from "~/i18n/routing";
import { AmountInWordsHero } from "~/components/sections/amount-in-words-hero";
import { AmountInWordsGuide } from "~/components/sections/amount-in-words-guide";
import { AmountInWordsFaq } from "~/components/sections/amount-in-words-faq";
import { AmountInWordsCta } from "~/components/sections/amount-in-words-cta";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "amountInWords.meta" });

  return buildSeoMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/amount-in-words-tool",
  });
}

export default async function AmountInWordsToolPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "amountInWords" });

  const breadcrumbs = buildBreadcrumbJsonLd(locale, [
    { name: t("breadcrumb"), path: "/amount-in-words-tool" },
  ]);

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: t("meta.title"),
    url: `https://cheqify.app/${locale}/amount-in-words-tool`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <AmountInWordsHero locale={locale} />
      <AmountInWordsGuide locale={locale} />
      <AmountInWordsFaq />
      <AmountInWordsCta />
    </>
  );
}
