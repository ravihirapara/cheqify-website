"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Sparkles, Heart, Globe } from "lucide-react";

export function AboutValues() {
  const t = useTranslations("about.values");

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            {t("heading")}
          </h2>
          <p className="text-muted-foreground">{t("subheading")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Simplicity First — 2-col span */}
          <div className="group rounded-xl bg-card p-10 transition-all duration-300 hover:shadow-lg md:col-span-2">
            <Sparkles className="mb-6 h-10 w-10 text-primary" />
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              {t("value1Title")}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {t("value1Description")}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t("value1Description2")}
            </p>
          </div>

          {/* Card 2: Absolute Accuracy — dark bg */}
          <div className="flex flex-col justify-between rounded-xl bg-primary p-10 text-center text-primary-foreground">
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                {t("value2Title")}
              </h3>
              <p className="leading-relaxed opacity-90">
                {t("value2Description")}
              </p>
            </div>
            <div className="relative mt-6 overflow-hidden rounded-lg">
              <Image
                src="/images/absolute-accuracy.webp"
                alt={t("value2Title")}
                width={800}
                height={533}
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>

          {/* Card 3: Free for Everyone — highlighted surface */}
          <div className="group flex flex-col justify-between rounded-xl bg-muted p-10 transition-all duration-300 hover:shadow-lg">
            <Heart className="mb-6 h-10 w-10 text-primary" />
            <div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                {t("value3Title")}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {t("value3Description")}
              </p>
            </div>
          </div>

          {/* Card 4: Built for India — 2-col span */}
          <div className="group flex flex-col items-center gap-10 rounded-xl bg-card p-10 transition-all duration-300 hover:shadow-lg sm:flex-row md:col-span-2">
            <div className="hidden h-48 w-48 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-primary/5 sm:flex sm:items-center sm:justify-center">
              <Globe className="h-20 w-20 text-primary/60" />
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                {t("value4Title")}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {t("value4Description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
