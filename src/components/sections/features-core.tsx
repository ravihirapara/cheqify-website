"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Building2,
  Wand2,
  BookOpen,
  Layers,
  GitGraph,
  Bell,
  BarChart3,
  Briefcase,
  Users,
  FileSpreadsheet,
} from "lucide-react";
import { cn } from "~/lib/utils";

const FEATURES = [
  { index: 1, icon: Building2 },
  { index: 2, icon: Wand2 },
  { index: 3, icon: BookOpen },
  { index: 4, icon: Layers },
  { index: 5, icon: GitGraph },
  { index: 6, icon: Bell },
  { index: 7, icon: BarChart3 },
  { index: 8, icon: Briefcase },
  { index: 9, icon: Users },
  { index: 10, icon: FileSpreadsheet },
] as const;

export function FeaturesCore() {
  const t = useTranslations("features.core");

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {t("subheading")}
          </p>
        </div>

        {/* Alternating Feature Rows */}
        <div className="space-y-0">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            const isOdd = feature.index % 2 === 1;
            const isLast = idx === FEATURES.length - 1;

            return (
              <div
                key={feature.index}
                className={cn(
                  "py-12",
                  !isLast && "border-b border-border/30"
                )}
              >
                <div className="items-center lg:grid lg:grid-cols-2 lg:gap-16">
                  {/* Screenshot Placeholder - first on odd, second on even (desktop) */}
                  <div
                    className={cn(
                      "order-2 mt-8 lg:mt-0",
                      isOdd ? "lg:order-1" : "lg:order-2"
                    )}
                  >
                    {feature.index === 1 ? (
                      <div className="w-full">
                        <Image
                          src="/images/browse-cheque-templates-bank-layouts.webp"
                          alt="Browse 300+ pre-built Indian bank cheque templates in Cheqify"
                          width={1200}
                          height={800}
                          className="h-auto w-full"
                        />
                      </div>
                    ) : feature.index === 3 ? (
                      <div className="w-full">
                        <Image
                          src="/images/chequebook-management.webp"
                          alt={t("feature3ScreenshotAlt")}
                          width={800}
                          height={600}
                          className="h-auto w-full"
                        />
                      </div>
                    ) : (
                    <div className="overflow-hidden rounded-xl border border-border/50 bg-background p-6 shadow-sm">
                      <div className="flex aspect-video items-center justify-center rounded-lg bg-muted/50">
                        <Icon className="h-12 w-12 text-muted-foreground/40" />
                      </div>
                      <p className="mt-3 text-center text-xs text-muted-foreground/60">
                        {t(`feature${feature.index}ScreenshotAlt`)}
                      </p>
                    </div>
                    )}
                  </div>

                  {/* Text Content - always on top on mobile */}
                  <div
                    className={cn(
                      "order-1",
                      isOdd ? "lg:order-2" : "lg:order-1"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {t(`feature${feature.index}Title`)}
                      </h3>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {t(`feature${feature.index}Description`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
