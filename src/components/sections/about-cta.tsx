"use client";

import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";

export function AboutCta() {
  const t = useTranslations("about.cta");
  const tCta = useTranslations("common.cta");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-foreground p-12 text-center md:p-20">
          <div className="relative z-10">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-background md:text-5xl">
              {t("heading")}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-background/70 md:text-xl">
              {t("subheading")}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://app.cheqify.app/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-12 px-10 text-base font-bold shadow-xl">
                  {tCta("startFree")}
                </Button>
              </a>
              <a
                href="https://app.cheqify.app/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="h-12 border-2 border-background/20 bg-transparent px-10 text-base font-bold text-background hover:bg-background/10"
                >
                  {t("scheduleDemo")}
                </Button>
              </a>
            </div>
          </div>
          {/* Decorative gradient blurs */}
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary opacity-20 blur-[100px]" />
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/50 opacity-10 blur-[100px]" />
        </div>
      </div>
    </section>
  );
}
