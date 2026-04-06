import { getTranslations } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { ContactHero } from "~/components/sections/contact-hero";
import { ContactInfo } from "~/components/sections/contact-info";
import { ContactForm } from "~/components/sections/contact-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });

  return buildSeoMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/contact",
  });
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
