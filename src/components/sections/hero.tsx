"use client";

import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { Play } from "lucide-react";

export function Hero() {
  const t = useTranslations("home");
  const tCta = useTranslations("common.cta");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
              {t("hero.badge")}
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t("hero.headlinePart1")}
              <span className="text-primary">{t("hero.headlineHighlight")}</span>
              {t("hero.headlinePart2")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("hero.subheadline")}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="https://app.cheqify.app/register"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="default" className="h-12 w-full px-8 text-base sm:w-auto">
                  {tCta("startFree")}
                </Button>
              </a>
              <a href="#demo" className="w-full sm:w-auto">
                <Button variant="outline" className="h-12 w-full px-8 text-base sm:w-auto">
                  <Play className="mr-2 h-4 w-4" />
                  {tCta("watchDemo")}
                </Button>
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {t("hero.noCreditCard")}
            </p>
          </div>

          {/* Product Visual Placeholder */}
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl" />
            <div
              className="w-full overflow-hidden rounded-xl border border-border/10 bg-background p-2 shadow-[0_20px_40px_rgba(8,28,50,0.06)]"
              role="img"
              aria-label={t("hero.productScreenshotAlt")}
            >
              {/* Mock dashboard UI */}
              <div className="rounded-lg bg-card p-4">
                {/* Top bar */}
                <div className="flex items-center gap-2 border-b border-border pb-3">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="ml-4 h-4 w-48 rounded bg-muted" />
                </div>
                {/* Sidebar + content */}
                <div className="mt-4 flex gap-4">
                  <div className="hidden w-32 space-y-3 sm:block">
                    <div className="h-3 w-full rounded bg-primary/20" />
                    <div className="h-3 w-3/4 rounded bg-muted" />
                    <div className="h-3 w-full rounded bg-muted" />
                    <div className="h-3 w-2/3 rounded bg-muted" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-lg bg-primary/10 p-4">
                        <div className="h-2 w-1/2 rounded bg-primary/30" />
                        <div className="mt-2 h-5 w-3/4 rounded bg-primary/20" />
                      </div>
                      <div className="rounded-lg bg-accent p-4">
                        <div className="h-2 w-1/2 rounded bg-primary/30" />
                        <div className="mt-2 h-5 w-3/4 rounded bg-primary/20" />
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <div className="h-2 w-1/2 rounded bg-muted-foreground/20" />
                        <div className="mt-2 h-5 w-3/4 rounded bg-muted-foreground/10" />
                      </div>
                    </div>
                    {/* Table rows */}
                    <div className="rounded-lg border border-border p-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="h-3 w-16 rounded bg-muted" />
                          <div className="h-3 flex-1 rounded bg-muted" />
                          <div className="h-5 w-16 rounded-full bg-green-100 dark:bg-green-900/30" />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-3 w-16 rounded bg-muted" />
                          <div className="h-3 flex-1 rounded bg-muted" />
                          <div className="h-5 w-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30" />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-3 w-16 rounded bg-muted" />
                          <div className="h-3 flex-1 rounded bg-muted" />
                          <div className="h-5 w-16 rounded-full bg-primary/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
