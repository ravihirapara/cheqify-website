"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Building2,
  Wand2,
  BookOpen,
  GitGraph,
  Bell,
  BarChart3,
  Users,
  FileSpreadsheet,
  Smartphone,
  Network,
} from "lucide-react";
import { cn } from "~/lib/utils";

const FEATURES = [
  { index: 1, icon: Building2 },
  { index: 2, icon: Wand2 },
  { index: 3, icon: BookOpen },
  { index: 5, icon: GitGraph },
  { index: 6, icon: Bell },
  { index: 7, icon: BarChart3 },
  { index: 9, icon: Users },
  { index: 10, icon: FileSpreadsheet },
  { index: 12, icon: Network },
  { index: 11, icon: Smartphone },
] as const;

const FEATURE_IMAGES: Record<number, { src: string; width: number; height: number }> = {
  1: { src: "/images/browse-cheque-templates-bank-layouts.webp", width: 1200, height: 800 },
  2: { src: "/images/smart-auto-fill.webp", width: 1875, height: 1875 },
  3: { src: "/images/chequebook-management.webp", width: 800, height: 600 },
  5: { src: "/images/complete-lifecycle-tracking.webp", width: 1875, height: 1875 },
  7: { src: "/images/owner-dashboard-analytics.webp", width: 1875, height: 1875 },
  9: { src: "/images/team-management.webp", width: 800, height: 600 },
  10: { src: "/images/export-bank-reconciliation.webp", width: 1875, height: 1875 },
  11: { src: "/images/mobile-friendly-access.webp", width: 1875, height: 1875 },
  12: { src: "/images/multi-organization.webp", width: 1875, height: 1875 },
};

export function FeaturesCore() {
  const t = useTranslations("features.core");

  return (
    <section className="bg-card py-4 md:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-4 max-w-3xl text-center">
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
            const isOdd = idx % 2 === 0;
            const isLast = idx === FEATURES.length - 1;

            return (
              <div
                key={feature.index}
                className={cn(
                  "py-6",
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
                    {FEATURE_IMAGES[feature.index] ? (
                      <div className="w-full">
                        <Image
                          src={FEATURE_IMAGES[feature.index].src}
                          alt={t(`feature${feature.index}ScreenshotAlt`)}
                          width={FEATURE_IMAGES[feature.index].width}
                          height={FEATURE_IMAGES[feature.index].height}
                          className="h-auto w-full"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[3/2] max-h-[300px] items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-muted/30">
                        <Icon className="h-12 w-12 text-muted-foreground/30" />
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
