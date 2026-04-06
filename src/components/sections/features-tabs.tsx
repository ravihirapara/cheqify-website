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
            <div className="aspect-video overflow-hidden rounded-xl border border-border bg-background shadow-sm">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  {FEATURES.map((feature) => {
                    const Icon = feature.icon;
                    if (feature.key !== active) return null;
                    return (
                      <div key={feature.key}>
                        <Icon className="mx-auto h-12 w-12 text-primary/30" />
                        <p className="mt-2 text-sm text-muted-foreground">
                          {t(feature.key)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
