import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
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

  return buildSeoMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/pricing",
  });
}

const PRICING_FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Cheqify really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Cheqify is 100% free. Every feature is included with no credit card required, no hidden costs, and no paywalls. The core product will always remain free.",
      },
    },
    {
      "@type": "Question",
      name: "What banks does Cheqify support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cheqify supports 300+ pre-built bank layouts covering all major Indian banks including SBI, HDFC, ICICI, Axis, PNB, Bank of Baroda, and many more.",
      },
    },
    {
      "@type": "Question",
      name: "How is Cheqify different from ChequePot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike ChequePot which charges for basic cheque printing, Cheqify gives you everything for free — including batch printing, MICR validation, lifecycle tracking, and multi-language support.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to install any software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No installation required. Cheqify is a web application that works on any device with a browser — desktop, laptop, tablet, or mobile.",
      },
    },
    {
      "@type": "Question",
      name: "Can I print cheques in bulk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Cheqify supports batch printing. You can import cheque data from Excel or CSV files and print multiple cheques at once.",
      },
    },
  ],
};

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const breadcrumbs = buildBreadcrumbJsonLd(locale, [{ name: "Pricing", path: "/pricing" }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_FAQ_JSONLD) }}
      />
      <PricingHero />
      <PricingCards />
      <WhyFree />
      <CtaSection />
    </>
  );
}
