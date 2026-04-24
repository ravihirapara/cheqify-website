"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";
import { Link } from "~/i18n/navigation";
import { Play } from "lucide-react";

export function FeaturesHero() {
  const t = useTranslations("features.hero");
  const tCta = useTranslations("common.cta");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <span className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              {t("badge")}
            </span>
            <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t("headlinePart1")}
              <span className="text-primary">{t("headlineHighlight")}</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t("subheadline")}
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
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
              <Link href="/#demo" className="w-full sm:w-auto">
                <Button variant="outline" className="h-12 w-full px-8 text-base sm:w-auto">
                  <Play className="mr-2 h-4 w-4" />
                  {tCta("watchDemo")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Product Visual */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-primary/10 to-transparent blur-3xl" />
            <Image
              src="/images/features-hero.webp"
              alt={t("screenshotAlt")}
              width={1310}
              height={1201}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
