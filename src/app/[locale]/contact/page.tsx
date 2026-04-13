import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
import { routing } from "~/i18n/routing";
import { ContactHero } from "~/components/sections/contact-hero";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
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

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const breadcrumbs = buildBreadcrumbJsonLd(locale, [{ name: "Contact", path: "/contact" }]);
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "Cheqify.app",
      url: "https://cheqify.app",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@cheqify.app",
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
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
