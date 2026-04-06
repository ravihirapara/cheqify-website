"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "~/lib/utils";
import { Printer, BarChart3, LayoutDashboard } from "lucide-react";

const FEATURES = [
  { key: "printing", icon: Printer },
  { key: "tracking", icon: BarChart3 },
  { key: "dashboard", icon: LayoutDashboard },
] as const;

export function FeaturesTabs() {
  const t = useTranslations("home.featuresTabs");
  const [active, setActive] = useState<string>("printing");

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            {t("heading")}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            {t("subheading")}
          </p>
        </div>
        <div className="mt-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Left side: accordion feature cards */}
          <div className="space-y-4">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              const isActive = active === feature.key;
              return (
                <button
                  key={feature.key}
                  type="button"
                  onClick={() => setActive(feature.key)}
                  className={cn(
                    "w-full rounded-lg border p-5 text-left transition-all",
                    isActive
                      ? "border-l-4 border-primary bg-primary/5"
                      : "border-border hover:bg-muted/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={cn(
                        "h-5 w-5 shrink-0",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    />
                    <h3
                      className={cn(
                        "text-base font-semibold",
                        isActive ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {t(feature.key)}
                    </h3>
                  </div>
                  {isActive && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {t(`${feature.key}Description`)}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right side: product screenshot placeholder */}
          <div className="mt-8 lg:mt-0">
            <div className="w-full overflow-hidden rounded-xl border border-border/10 bg-background p-4 shadow-xl">
              <div className="rounded-lg bg-card p-4">
                {FEATURES.map((feature) => {
                  const Icon = feature.icon;
                  if (feature.key !== active) return null;
                  return (
                    <div key={feature.key} className="space-y-4">
                      {/* Mock header */}
                      <div className="flex items-center gap-3 border-b border-border pb-4">
                        <Icon className="h-5 w-5 text-primary" />
                        <div className="h-4 w-32 rounded bg-muted" />
                        <div className="ml-auto h-8 w-24 rounded-lg bg-primary/10" />
                      </div>
                      {/* Stat cards */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-lg bg-primary/10 p-4">
                          <div className="h-2 w-2/3 rounded bg-primary/30" />
                          <div className="mt-2 h-5 w-3/4 rounded bg-primary/20" />
                        </div>
                        <div className="rounded-lg bg-accent p-4">
                          <div className="h-2 w-2/3 rounded bg-primary/30" />
                          <div className="mt-2 h-5 w-3/4 rounded bg-primary/20" />
                        </div>
                        <div className="rounded-lg bg-muted p-4">
                          <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
                          <div className="mt-2 h-5 w-3/4 rounded bg-muted-foreground/10" />
                        </div>
                      </div>
                      {/* Mock content rows */}
                      <div className="space-y-3 rounded-lg border border-border p-4">
                        <div className="mb-3 flex items-center gap-3 border-b border-border pb-3">
                          <div className="h-3 w-20 rounded bg-muted-foreground/20" />
                          <div className="h-3 w-24 rounded bg-muted-foreground/20" />
                          <div className="ml-auto h-3 w-16 rounded bg-muted-foreground/20" />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-primary/10" />
                          <div className="flex-1 space-y-1">
                            <div className="h-3 w-3/4 rounded bg-muted" />
                            <div className="h-2 w-1/2 rounded bg-muted/60" />
                          </div>
                          <div className="h-6 w-20 rounded-full bg-green-100 dark:bg-green-900/30" />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-accent" />
                          <div className="flex-1 space-y-1">
                            <div className="h-3 w-2/3 rounded bg-muted" />
                            <div className="h-2 w-1/3 rounded bg-muted/60" />
                          </div>
                          <div className="h-6 w-20 rounded-full bg-yellow-100 dark:bg-yellow-900/30" />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-primary/10" />
                          <div className="flex-1 space-y-1">
                            <div className="h-3 w-4/5 rounded bg-muted" />
                            <div className="h-2 w-2/5 rounded bg-muted/60" />
                          </div>
                          <div className="h-6 w-20 rounded-full bg-green-100 dark:bg-green-900/30" />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-muted" />
                          <div className="flex-1 space-y-1">
                            <div className="h-3 w-3/5 rounded bg-muted" />
                            <div className="h-2 w-1/4 rounded bg-muted/60" />
                          </div>
                          <div className="h-6 w-20 rounded-full bg-primary/10" />
                        </div>
                      </div>
                      {/* Mock chart area */}
                      <div className="flex items-end gap-1 border-t border-border pt-4">
                        <div className="h-10 flex-1 rounded-t bg-primary/20" />
                        <div className="h-16 flex-1 rounded-t bg-primary/30" />
                        <div className="h-24 flex-1 rounded-t bg-primary/40" />
                        <div className="h-14 flex-1 rounded-t bg-primary/25" />
                        <div className="h-28 flex-1 rounded-t bg-primary" />
                        <div className="h-20 flex-1 rounded-t bg-primary/35" />
                        <div className="h-8 flex-1 rounded-t bg-primary/15" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
