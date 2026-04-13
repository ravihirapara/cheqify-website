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
import { FeaturesFaq } from "~/components/sections/features-faq";
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
  const featuresFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many bank layouts does Cheqify support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cheqify supports 300+ pre-built bank layouts covering all major Indian banks including SBI, HDFC, ICICI, Axis, PNB, Bank of Baroda, Kotak Mahindra, and many more.",
        },
      },
      {
        "@type": "Question",
        name: "Can I import cheque data from Excel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Cheqify supports batch importing from Excel and CSV files. Simply upload your file with payee names, amounts, and dates — Cheqify handles the rest.",
        },
      },
      {
        "@type": "Question",
        name: "How does cheque lifecycle tracking work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every cheque is tracked through its complete journey: Unused → Prepared → Signed → Issued → Cleared or Bounced. You get real-time status updates, alerts for bounced cheques, and reminders for post-dated cheques.",
        },
      },
      {
        "@type": "Question",
        name: "Is my financial data secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cheqify uses 256-bit encryption for all data in transit and at rest. Your financial data is never shared with third parties. Every action is logged for complete audit readiness.",
        },
      },
      {
        "@type": "Question",
        name: "Can multiple team members use Cheqify?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Cheqify supports multi-user access with role-based permissions. You can control who can print, approve, and monitor cheques.",
        },
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresFaqJsonLd) }} />
      <FeaturesHero />
      <FeaturesCore />
      <FeatureHighlights />
      <FeaturesFaq />
      <CtaSection />
    </>
  );
}
