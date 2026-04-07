import type { Metadata } from "next";

const BASE_URL = "https://cheqify.app";
const OG_IMAGE = "/images/og-cheqify.jpg";
const LOCALES = ["en", "hi", "gu"] as const;

export function buildSeoMetadata({
  title,
  description,
  locale,
  pathname = "",
}: {
  title: string;
  description: string;
  locale: string;
  pathname?: string;
}): Metadata {
  const url = `${BASE_URL}/${locale}${pathname}`;

  const languages: Record<string, string> = {};
  for (const loc of LOCALES) {
    languages[loc] = `${BASE_URL}/${loc}${pathname}`;
  }

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Cheqify.app",
      locale,
      type: "website",
      images: [
        {
          url: `${BASE_URL}${OG_IMAGE}`,
          width: 1200,
          height: 630,
          alt: `${title} — Free cheque printing software for Indian businesses`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: `${BASE_URL}${OG_IMAGE}`,
          alt: `${title} — Free cheque printing software for Indian businesses`,
        },
      ],
    },
  };
}
