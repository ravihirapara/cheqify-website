import { getTranslations } from "next-intl/server";
import { PrivacyHero } from "~/components/sections/privacy-hero";
import { PrivacyContent } from "~/components/sections/privacy-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy.meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
    </>
  );
}
