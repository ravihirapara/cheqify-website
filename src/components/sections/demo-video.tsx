"use client";

import { useTranslations } from "next-intl";

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
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/DiihuB-hEiY"
                title="Cheqify Demo — Free Cheque Printing Software for Indian Businesses"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
