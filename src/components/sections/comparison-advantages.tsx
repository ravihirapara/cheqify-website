"use client";

import { useTranslations } from "next-intl";
import { Wallet, Monitor, Building2, GitGraph, Bell, Globe } from "lucide-react";

const CARDS = [
  { key: "card1", icon: Wallet },
  { key: "card2", icon: Monitor },
  { key: "card3", icon: Building2 },
  { key: "card4", icon: GitGraph },
  { key: "card5", icon: Bell },
  { key: "card6", icon: Globe },
] as const;

export function ComparisonAdvantages() {
  const t = useTranslations("comparison.advantages");

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#eff4ff" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            {t("subheading")}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold">{t(`${key}Title`)}</h3>
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
