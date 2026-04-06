"use client";

import { useTranslations } from "next-intl";
import { Play } from "lucide-react";

export function DemoVideo() {
  const t = useTranslations("home.demoVideo");

  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {t("heading")}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            {t("subheading")}
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-3xl">
            {/* Video placeholder — replace with real embed when video is available */}
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <div className="flex h-full flex-col items-center justify-center gap-4">
                <button
                  type="button"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
                  aria-label={t("playButton")}
                >
                  <Play className="ml-1 h-7 w-7" />
                </button>
                <p className="text-sm text-muted-foreground">
                  {t("placeholder")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
