import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
import { routing } from "~/i18n/routing";
import { Link } from "~/i18n/navigation";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "glossary.meta" });

  return buildSeoMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/glossary",
  });
}

interface GlossaryTerm {
  term: string;
  definition: string;
}

export default async function GlossaryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "glossary" });

  const breadcrumbs = buildBreadcrumbJsonLd(locale, [
    { name: t("breadcrumb"), path: "/glossary" },
  ]);

  const terms = t.raw("terms") as GlossaryTerm[];

  const definedTermSetJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: t("hero.heading"),
    description: t("hero.subheading"),
    url: `https://cheqify.app/${locale}/glossary`,
    definedTerm: terms.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      description: item.definition,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetJsonLd) }}
      />

      {/* Hero */}
      <section className="px-6 pt-16 pb-10 md:pt-24 md:pb-14">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {t("hero.badge")}
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {t("hero.heading")}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t("hero.subheading")}
          </p>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl">
          <dl className="divide-y divide-border rounded-xl border border-border">
            {terms.map((item) => (
              <div key={item.term} className="px-6 py-5">
                <dt className="text-base font-semibold text-foreground">
                  {item.term}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-2xl rounded-2xl bg-primary/5 p-8 text-center md:p-12">
          <h2 className="mb-3 text-2xl font-bold text-foreground">
            {t("relatedCta.heading")}
          </h2>
          <p className="mb-6 text-muted-foreground">
            {t("relatedCta.subheading")}
          </p>
          <Link
            href="https://app.cheqify.app/register"
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            {t("relatedCta.cta")}
          </Link>
        </div>
      </section>
    </>
  );
}
