"use client";

import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";

export function PricingHero() {
  const t = useTranslations("pricing.hero");

  return (
    <section className="mx-auto mb-24 max-w-7xl px-6 pt-16 text-center md:pt-24">
      <span className="mb-6 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
        {t("badge")}
      </span>
      <h1 className="mb-8 text-5xl font-extrabold leading-tight tracking-tighter md:text-7xl">
        {t("headlinePart1")} <br />
        <span className="text-primary">{t("headlineHighlight")}</span>
      </h1>
      <p className="mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground">
        {t("subheading")}
      </p>
      <div className="mt-8">
        <a
          href="https://app.cheqify.app/register"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="h-12 px-8 text-base font-semibold">
            {t("cta")}
          </Button>
        </a>
      </div>
    </section>
  );
}
