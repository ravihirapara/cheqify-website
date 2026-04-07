"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/navigation";

const SLIDE_COUNT = 3;
const SLIDE_INTERVAL = 5000;

export function Hero() {
  const t = useTranslations("home");
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((p) => (p + 1) % SLIDE_COUNT), []);

  useEffect(() => {
    const timer = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Slides — fade transition */}
        <div className="relative">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <div
              key={i}
              className={`${i === 0 ? "" : "absolute inset-0"} transition-opacity duration-700 ease-in-out ${
                i === active ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
                {/* Text Content */}
                <div className="text-center lg:text-left">
                  <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
                    {t(`hero.slides.${i}.badge`)}
                  </div>
                  <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                    {t(`hero.slides.${i}.part1`)}
                    <span className="text-primary">{t(`hero.slides.${i}.highlight`)}</span>
                    {t(`hero.slides.${i}.part2`)}
                  </h1>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    {t(`hero.slides.${i}.description`)}
                  </p>
                  <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                    <a
                      href={t(`hero.slides.${i}.ctaLink`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button variant="default" className="h-12 w-full px-8 text-base sm:w-auto">
                        {t(`hero.slides.${i}.cta`)}
                      </Button>
                    </a>
                    <Link href={t(`hero.slides.${i}.cta2Link`)} className="w-full sm:w-auto">
                      <Button variant="outline" className="h-12 w-full px-8 text-base sm:w-auto">
                        {t(`hero.slides.${i}.cta2`)}
                      </Button>
                    </Link>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {t("hero.noCreditCard")}
                  </p>
                </div>

                {/* Product Visual */}
                <div className="relative mt-12 lg:mt-0">
                  <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl" />
                  <div
                    className="w-full overflow-hidden rounded-xl border border-border/10 bg-background p-2 shadow-[0_20px_40px_rgba(8,28,50,0.06)]"
                    role="img"
                    aria-label={t("hero.productScreenshotAlt")}
                  >
                    <div className="rounded-lg bg-card p-5">
                      {/* Top bar */}
                      <div className="flex items-center gap-2 border-b border-border pb-4">
                        <div className="h-3 w-3 rounded-full bg-red-400" />
                        <div className="h-3 w-3 rounded-full bg-yellow-400" />
                        <div className="h-3 w-3 rounded-full bg-green-400" />
                        <div className="ml-4 h-4 w-48 rounded bg-muted" />
                        <div className="ml-auto h-4 w-20 rounded bg-muted" />
                      </div>
                      {/* Sidebar + content */}
                      <div className="mt-5 flex gap-5">
                        <div className="hidden w-36 space-y-4 sm:block">
                          <div className="h-4 w-full rounded bg-primary/20" />
                          <div className="h-3 w-3/4 rounded bg-muted" />
                          <div className="h-3 w-full rounded bg-muted" />
                          <div className="h-3 w-2/3 rounded bg-muted" />
                          <div className="mt-6 h-3 w-full rounded bg-muted" />
                          <div className="h-3 w-4/5 rounded bg-muted" />
                          <div className="h-3 w-3/5 rounded bg-muted" />
                        </div>
                        <div className="flex-1 space-y-4">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="rounded-lg bg-primary/10 p-5">
                              <div className="h-2 w-2/3 rounded bg-primary/30" />
                              <div className="mt-3 h-6 w-3/4 rounded bg-primary/20" />
                            </div>
                            <div className="rounded-lg bg-accent p-5">
                              <div className="h-2 w-2/3 rounded bg-primary/30" />
                              <div className="mt-3 h-6 w-3/4 rounded bg-primary/20" />
                            </div>
                            <div className="rounded-lg bg-muted p-5">
                              <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
                              <div className="mt-3 h-6 w-3/4 rounded bg-muted-foreground/10" />
                            </div>
                          </div>
                          <div className="rounded-lg border border-border p-4">
                            <div className="mb-3 flex items-center gap-3 border-b border-border pb-3">
                              <div className="h-3 w-20 rounded bg-muted-foreground/20" />
                              <div className="h-3 w-24 rounded bg-muted-foreground/20" />
                              <div className="ml-auto h-3 w-16 rounded bg-muted-foreground/20" />
                            </div>
                            <div className="space-y-3">
                              {[1, 2, 3, 4].map((r) => (
                                <div key={r} className="flex items-center gap-3">
                                  <div className="h-8 w-8 rounded bg-primary/10" />
                                  <div className="flex-1 space-y-1">
                                    <div className="h-3 w-3/4 rounded bg-muted" />
                                    <div className="h-2 w-1/2 rounded bg-muted/60" />
                                  </div>
                                  <div className="h-6 w-20 rounded-full bg-green-100 dark:bg-green-900/30" />
                                </div>
                              ))}
                            </div>
                          </div>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === active ? "w-10 bg-primary" : "w-2.5 bg-muted-foreground/30"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
