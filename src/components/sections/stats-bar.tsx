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
    <section className="bg-primary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.valueKey}>
              <p className="text-5xl font-extrabold text-primary-foreground">
                {t(stat.valueKey)}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-primary-foreground/80">
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
