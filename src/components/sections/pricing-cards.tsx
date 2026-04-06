"use client";

import { useTranslations } from "next-intl";
import { CheckCircle } from "lucide-react";
import { Button } from "~/components/ui/button";

const FEATURE_KEYS = [
  "feature1",
  "feature2",
  "feature3",
  "feature4",
  "feature5",
  "feature6",
  "feature7",
  "feature8",
  "feature9",
  "feature10",
  "feature11",
  "feature12",
  "feature13",
  "feature14",
] as const;

export function PricingCards() {
  const t = useTranslations("pricing.allFeatures");

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-4xl rounded-2xl border-2 border-primary bg-background p-8 shadow-lg md:p-12">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
          {t("label")}
        </span>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
        <ul className="mb-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_KEYS.map((key) => (
            <li key={key} className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm">{t(key)}</span>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <a
            href="https://app.cheqify.app/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-12 px-8 text-base font-semibold">
              {t("cta")}
            </Button>
          </a>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {t("note")}
          </p>
        </div>
      </div>
    </section>
  );
}
