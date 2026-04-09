"use client";

import { useTranslations } from "next-intl";
import { Badge } from "~/components/ui/badge";

export function TermsHero() {
  const t = useTranslations("terms.hero");

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Badge
          variant="outline"
          className="mb-4 text-xs font-bold uppercase tracking-widest text-primary"
        >
          {t("badge")}
        </Badge>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
          {t("title")}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t("lastUpdated")}. {t("description")}
        </p>
      </div>
    </section>
  );
}
