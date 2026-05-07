import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "~/lib/seo";
import { buildBreadcrumbJsonLd } from "~/lib/breadcrumbs";
import { routing } from "~/i18n/routing";
import { Button } from "~/components/ui/button";
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
  const t = await getTranslations({ locale, namespace: "demo.meta" });

  return buildSeoMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    pathname: "/demo",
  });
}

const HIGHLIGHT_KEYS = ["item1", "item2", "item3", "item4", "item5", "item6"] as const;

export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "demo" });

  const breadcrumbs = buildBreadcrumbJsonLd(locale, [
    { name: t("breadcrumb"), path: "/demo" },
  ]);

  const videoJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: t("hero.videoTitle"),
    description: t("meta.description"),
    thumbnailUrl: "https://i.ytimg.com/vi/DiihuB-hEiY/maxresdefault.jpg",
    uploadDate: "2026-04-07",
    duration: "PT2M",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />

      {/* Hero — video is the dominant element */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              {t("hero.badge")}
            </span>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className="mt-10">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/DiihuB-hEiY"
                title={t("hero.videoTitle")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://app.cheqify.app/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" className="h-12 px-8 text-base">
                {t("hero.ctaPrimary")}
              </Button>
            </a>
            <Link href="/features">
              <Button variant="outline" className="h-12 px-8 text-base">
                {t("hero.ctaSecondary")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What you'll see */}
      <section className="bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t("highlights.heading")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t("highlights.subheading")}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HIGHLIGHT_KEYS.map((key) => (
              <div
                key={key}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {t(`highlights.items.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(`highlights.items.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo highlights / transcript — text content for SEO */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {t("transcript.heading")}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>{t("transcript.p1")}</p>
            <p>{t("transcript.p2")}</p>
            <p>{t("transcript.p3")}</p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("cta.heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            {t("cta.subheading")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://app.cheqify.app/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" className="h-12 px-8 text-base">
                {t("cta.ctaPrimary")}
              </Button>
            </a>
            <Link href="/pricing">
              <Button variant="outline" className="h-12 px-8 text-base">
                {t("cta.ctaSecondary")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
