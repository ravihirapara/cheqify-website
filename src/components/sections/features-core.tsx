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
  Briefcase,
  Users,
  FileSpreadsheet,
  Smartphone,
} from "lucide-react";
import { cn } from "~/lib/utils";

const FEATURES = [
  { index: 1, icon: Building2 },
  { index: 2, icon: Wand2 },
  { index: 3, icon: BookOpen },
  { index: 5, icon: GitGraph },
  { index: 6, icon: Bell },
  { index: 7, icon: BarChart3 },
  { index: 8, icon: Briefcase },
  { index: 9, icon: Users },
  { index: 10, icon: FileSpreadsheet },
  { index: 11, icon: Smartphone },
] as const;

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
                    {(() => {
                      const images: Record<number, { src: string; alt: string }> = {
                        1: { src: "/images/browse-cheque-templates-bank-layouts.webp", alt: "Browse 300+ pre-built Indian bank cheque templates in Cheqify" },
                        3: { src: "/images/chequebook-management.webp", alt: t("feature3ScreenshotAlt") },
                        8: { src: "/images/multi-company.webp", alt: t("feature8ScreenshotAlt") },
                        9: { src: "/images/team-management.webp", alt: t("feature9ScreenshotAlt") },
                      };
                      const img = images[feature.index];
                      return img ? (
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                          <Image src={img.src} alt={img.alt} fill className="object-contain" />
                        </div>
                      ) : (
                        <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-muted/30">
                          <Icon className="h-12 w-12 text-muted-foreground/30" />
                        </div>
                      );
                    })()}
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
