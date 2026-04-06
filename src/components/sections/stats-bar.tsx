"use client";

import { useTranslations } from "next-intl";

const STATS = [
  { valueKey: "chequesPrinted", labelKey: "chequesPrintedLabel" },
  { valueKey: "activeUsers", labelKey: "activeUsersLabel" },
  { valueKey: "banksSupported", labelKey: "banksSupportedLabel" },
] as const;

export function StatsBar() {
  const t = useTranslations("home.stats");

  return (
    <section className="border-y border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.valueKey}>
              <p className="text-3xl font-bold text-primary md:text-4xl">
                {t(stat.valueKey)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
