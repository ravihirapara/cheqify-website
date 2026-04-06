"use client";

import { useTranslations } from "next-intl";

export function BlogHero() {
  const t = useTranslations("blog.hero");

  return (
    <header className="mb-16">
      <div className="mx-auto max-w-2xl text-center">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-primary">
          {t("badge")}
        </span>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl">
          {t("heading")}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t("subheading")}
        </p>
      </div>
    </header>
  );
}
