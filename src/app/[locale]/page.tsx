import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { routing } from "~/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
import { Hero } from "~/components/sections/hero";
import { TrustBar } from "~/components/sections/trust-bar";
import { BankLogos } from "~/components/sections/bank-logos";
import { HowItWorks } from "~/components/sections/how-it-works";
import { DemoVideo } from "~/components/sections/demo-video";
import { FeaturesTabs } from "~/components/sections/features-tabs";
import { StatsBar } from "~/components/sections/stats-bar";
import { Testimonials } from "~/components/sections/testimonials";
import { HomeFaq } from "~/components/sections/home-faq";
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
  logo: "https://cheqify.app/images/logo.png",
  description:
    "Cheque printing and lifecycle management platform for Indian businesses.",
  areaServed: "IN",
};

const JSONLD_WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cheqify.app",
  url: "https://cheqify.app",
};

const JSONLD_SOFTWARE = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Cheqify.app",
  description:
    "Print error-free cheques in under 2 minutes. 300+ bank layouts, MICR validation, batch printing, and lifecycle tracking.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://app.cheqify.app",
  author: {
    "@type": "Organization",
    name: "Cheqify.app",
    url: "https://cheqify.app",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ramesh Patel", jobTitle: "Trading Business Owner", address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressCountry: "IN" } },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Cheqify eliminated cheque errors completely. We used to have 2-3 bounced cheques a month due to handwriting mistakes. Now zero.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Haresh Gediya", jobTitle: "Owner, Embroidery Machine Business", address: { "@type": "PostalAddress", addressLocality: "Surat", addressCountry: "IN" } },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "The lifecycle tracking saved us hours every week. I no longer need to call vendors to ask if they deposited the cheque.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Amit Desai", jobTitle: "Individual User", address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" } },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "I only print 2-3 cheques a year but Cheqify makes it effortless. The free plan is perfect for personal use.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Vikram Shah", jobTitle: "Chartered Accountant", address: { "@type": "PostalAddress", addressLocality: "Rajkot", addressCountry: "IN" } },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "As a CA handling 50+ client accounts, Cheqify is a lifesaver. Batch printing vendor cheques used to take half a day. Now it's done in 20 minutes.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Neha Gupta", jobTitle: "Finance Head", address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" } },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "We switched from a paid desktop tool to Cheqify. Same features, better UX, and completely free. The MICR auto-validation catches errors before printing.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Vaishali Hirapara", jobTitle: "Partner, CA Firm", address: { "@type": "PostalAddress", addressLocality: "Surat", addressCountry: "IN" } },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Multi-user access lets my team of 3 work on cheques simultaneously without confusion. The audit trail on every issued cheque is a huge compliance win.",
    },
  ],
  featureList:
    "Cheque Printing, MICR Validation, Batch Printing, Lifecycle Tracking, Bank Reconciliation, Multi-Language Support",
};

const JSONLD_VIDEO = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Cheqify Demo — Free Cheque Printing Software for Indian Businesses",
  description:
    "See how Cheqify prints error-free cheques in under 2 minutes — 300+ bank layouts, MICR validation, batch printing, and lifecycle tracking.",
  thumbnailUrl: "https://i.ytimg.com/vi/DiihuB-hEiY/maxresdefault.jpg",
  uploadDate: "2026-04-07",
  embedUrl: "https://www.youtube.com/embed/DiihuB-hEiY",
  contentUrl: "https://www.youtube.com/watch?v=DiihuB-hEiY",
  publisher: {
    "@type": "Organization",
    name: "Cheqify.app",
    logo: {
      "@type": "ImageObject",
      url: "https://cheqify.app/images/logo.png",
    },
  },
};

const JSONLD_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is cheque printing software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cheque printing software lets you print cheques directly on bank cheque leaves using a regular printer. Instead of handwriting details, the software auto-fills payee name, amount, amount in words, date, and MICR code — eliminating errors that cause bounces.",
      },
    },
    {
      "@type": "Question",
      name: "Can I print cheques on any Indian bank's cheque leaf?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cheqify supports 300+ Indian bank layouts including SBI, HDFC, ICICI, Axis, PNB, Bank of Baroda, Kotak Mahindra, and many more. Each layout is pre-configured with correct MICR positioning for that bank's cheque format.",
      },
    },
    {
      "@type": "Question",
      name: "Is it legal to print cheques in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is completely legal to print cheques in India. The Reserve Bank of India (RBI) allows printed cheques as long as they comply with CTS 2010 standards and contain valid MICR codes. Cheqify ensures all printed cheques meet these standards.",
      },
    },
    {
      "@type": "Question",
      name: "What is MICR code and why is it important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MICR (Magnetic Ink Character Recognition) is a 9-digit code at the bottom of every cheque that identifies the bank, branch, and city. It is essential for automated cheque processing. Cheqify validates MICR codes automatically to prevent clearance failures.",
      },
    },
    {
      "@type": "Question",
      name: "How much does cheque printing software cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cheqify is 100% free — every feature included with no credit card required. You get 300+ bank layouts, batch printing, lifecycle tracking, MICR validation, and multi-user access at zero cost. There are no hidden fees or premium tiers.",
      },
    },
    {
      "@type": "Question",
      name: "What is CTS 2010 cheque format?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CTS 2010 (Cheque Truncation System) is the standard mandated by RBI for all cheques in India. It requires specific security features, standardized dimensions, and machine-readable elements. Cheqify's bank layouts are fully CTS 2010 compliant.",
      },
    },
    {
      "@type": "Question",
      name: "Can I print multiple cheques at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Cheqify supports batch printing. You can import cheque data from Excel or CSV files and print hundreds of cheques in minutes. This is especially useful for businesses that issue salary cheques, vendor payments, or monthly rent cheques.",
      },
    },
  ],
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
          __html: JSON.stringify([JSONLD_ORGANIZATION, JSONLD_WEBSITE, JSONLD_SOFTWARE, JSONLD_VIDEO]),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD_FAQ) }}
      />
      <Hero />
      <TrustBar />
      <BankLogos />
      <HowItWorks />
      <DemoVideo />
      <FeaturesTabs />
      <StatsBar />
      <Testimonials />
      <HomeFaq />
      <CtaSection />
    </>
  );
}
