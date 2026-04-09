"use client";

import { useTranslations } from "next-intl";

export function AboutHero() {
  const t = useTranslations("about.hero");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/70 py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            {t("badge")}
          </span>
          <h1 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            {t("headline")}
          </h1>
          <p className="text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            {t("subheadline")}
          </p>
        </div>
      </div>
      {/* Decorative background */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-full w-1/2 opacity-10">
        <div className="h-full w-full bg-gradient-to-tl from-white/20 to-transparent" />
      </div>
    </section>
  );
}
