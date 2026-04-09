"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck } from "lucide-react";

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
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-xl bg-muted shadow-2xl">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="text-center text-muted-foreground">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-primary/10 p-6">
                    <ShieldCheck className="h-full w-full text-primary" />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative badge card */}
            <div className="absolute -bottom-10 -left-10 hidden max-w-xs rounded-xl bg-card p-8 shadow-xl md:block">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-foreground">{t("badgeTitle")}</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("badgeDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
