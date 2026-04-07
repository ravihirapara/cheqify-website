"use client";

import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";

export function ComparisonVerdict() {
  const t = useTranslations("comparison.verdict");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground shadow-lg md:px-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg opacity-90">
            {t("subheading")}
          </p>
          <div className="mt-8">
            <a
              href="https://app.cheqify.app/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                className="h-12 px-8 text-base font-semibold"
              >
                {t("cta")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
