import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { Hero } from "~/components/sections/hero";
import { TrustBar } from "~/components/sections/trust-bar";
import { BankLogos } from "~/components/sections/bank-logos";
import { HowItWorks } from "~/components/sections/how-it-works";
import { DemoVideo } from "~/components/sections/demo-video";
import { FeaturesTabs } from "~/components/sections/features-tabs";
import { StatsBar } from "~/components/sections/stats-bar";
import { Testimonials } from "~/components/sections/testimonials";
import { CtaSection } from "~/components/sections/cta-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.meta" });

  return buildSeoMetadata({
    title: t("title"),
    description: t("description"),
    locale,
  });
}

const JSONLD_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cheqify.app",
  url: "https://cheqify.app",
  description:
    "Cheque printing and lifecycle management platform for Indian businesses.",
};

const JSONLD_WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cheqify.app",
  url: "https://cheqify.app",
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([JSONLD_ORGANIZATION, JSONLD_WEBSITE]),
        }}
      />
      <Hero />
      <TrustBar />
      <BankLogos />
      <HowItWorks />
      <DemoVideo />
      <FeaturesTabs />
      <StatsBar />
      <Testimonials />
      <CtaSection />
    </>
  );
}
