"use client";

import { useTranslations } from "next-intl";
import { Heart, ShieldCheck, Gift, Scale } from "lucide-react";
import { cn } from "~/lib/utils";

const CARDS = [
  { key: "card1", icon: Heart },
  { key: "card2", icon: ShieldCheck },
  { key: "card3", icon: Gift },
  { key: "card4", icon: Scale },
] as const;

export function WhyFree() {
  const t = useTranslations("pricing.whyFree");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t("heading")}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className={cn(
                "rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
              )}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">
                {t(`${key}Title`)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(`${key}Description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
