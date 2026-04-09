"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export function AboutStory() {
  const t = useTranslations("about.story");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text Column */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t("heading")}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <div className="rounded-xl border-l-4 border-primary bg-muted/50 p-8">
                <p className="font-medium italic text-primary">
                  &ldquo;{t("quote")}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div>
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/images/why-we-built-cheqify.webp"
                alt={t("imageAlt")}
                width={600}
                height={400}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
