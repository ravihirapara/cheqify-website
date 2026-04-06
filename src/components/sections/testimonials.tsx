"use client";

import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";

const TESTIMONIALS = ["t1", "t2", "t3"] as const;

export function Testimonials() {
  const t = useTranslations("home.testimonials");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
          {t("heading")}
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((key) => (
            <div
              key={key}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(`${key}Quote`)}
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">
                  {t(`${key}Name`)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t(`${key}Role`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
