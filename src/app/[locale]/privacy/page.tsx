import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { routing } from "~/i18n/routing";
import { PrivacyHero } from "~/components/sections/privacy-hero";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
import { PrivacyContent } from "~/components/sections/privacy-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy.meta" });

  return buildSeoMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/privacy",
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
    </>
  );
}
