"use client";

import { useTranslations } from "next-intl";
import { CheckCircle, Printer, BarChart3, LayoutDashboard } from "lucide-react";
import { cn } from "~/lib/utils";

const PILLARS = [
  { key: "printing", icon: Printer, count: 11 },
  { key: "tracking", icon: BarChart3, count: 10 },
  { key: "dashboard", icon: LayoutDashboard, count: 10 },
] as const;

export function FeaturesCore() {
  const t = useTranslations("features.core");

  return (
    <>
      {PILLARS.map((pillar, idx) => {
        const Icon = pillar.icon;
        const isAlt = idx % 2 === 1;

        return (
          <section
            key={pillar.key}
            className={cn("py-16 md:py-24", isAlt ? "bg-card" : "")}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Pillar Header */}
              <div className="mb-12 max-w-3xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {t(`${pillar.key}Title`)}
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t(`${pillar.key}Description`)}
                </p>
              </div>

              {/* Feature Cards Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: pillar.count }, (_, i) => i + 1).map(
                  (i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-border/50 bg-background p-5 transition-shadow hover:shadow-md"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {t(`${pillar.key}Feature${i}Title`)}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {t(`${pillar.key}Feature${i}Description`)}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
