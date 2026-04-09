"use client";

import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/navigation";

export function ComparisonHero() {
  const t = useTranslations("comparison.hero");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            {t("badge")}
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t("headlinePart1")}
            <span className="text-primary">{t("headlineHighlight")}</span>
            {t("headlinePart2")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t("subheading")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://app.cheqify.app/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" className="h-12 px-8 text-base">
                {t("cta")}
              </Button>
            </a>
            <Link href="/features">
              <Button variant="outline" className="h-12 px-8 text-base">
                {t("cta2")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
