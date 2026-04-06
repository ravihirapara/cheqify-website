"use client";

import { useTranslations } from "next-intl";

export function ContactHero() {
  const t = useTranslations("contact.hero");

  return (
    <section className="mx-auto mb-12 max-w-7xl px-6 pt-16 text-center md:pt-24">
      <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-primary">
        {t("badge")}
      </span>
      <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
        {t("heading")}
        <br />
        <span className="text-primary">{t("headlineHighlight")}</span>
      </h1>
      <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {t("subheading")}
      </p>
    </section>
  );
}
