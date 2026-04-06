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
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t("hero.headline")}
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
          <div className="mt-12 lg:mt-0">
            <div
              className="mx-auto aspect-video max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-lg lg:max-w-none"
              role="img"
              aria-label={t("hero.productScreenshotAlt")}
            >
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
                {/* Placeholder styled as app preview */}
                <div className="h-3 w-3/4 rounded-full bg-primary/20" />
                <div className="h-3 w-1/2 rounded-full bg-primary/10" />
                <div className="mt-4 grid w-full grid-cols-3 gap-3">
                  <div className="aspect-square rounded-xl bg-primary/10" />
                  <div className="aspect-square rounded-xl bg-primary/15" />
                  <div className="aspect-square rounded-xl bg-primary/10" />
                </div>
                <div className="mt-2 h-3 w-2/3 rounded-full bg-muted" />
                <div className="h-3 w-1/3 rounded-full bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
