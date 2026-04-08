"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
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
                  {i === 1 ? (
                    <div className="w-full scale-110 lg:scale-125">
                      <Image
                        src="/images/indian-bank-cheque-formats-hdfc-axis-baroda.png"
                        alt="Indian bank cheque formats — HDFC, Axis Bank, Bank of Baroda printed cheques"
                        width={1200}
                        height={800}
                        className="h-auto w-full"
                      />
                    </div>
                  ) : i === 2 ? (
                    <div className="w-full">
                      <Image
                        src="/images/cheque-lifecycle-tracking-dashboard.png"
                        alt="Cheqify cheque lifecycle tracking dashboard — track cheques from issue to clearance"
                        width={1200}
                        height={800}
                        className="h-auto w-full"
                      />
                    </div>
                  ) : (
                    <div className="w-full">
                      <Image
                        src="/images/print-error-free-cheque-in-minutes.png"
                        alt="Print error-free cheques in under 2 minutes with Cheqify"
                        width={1200}
                        height={800}
                        className="h-auto w-full"
                        priority
                      />
                    </div>
                  )}
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
