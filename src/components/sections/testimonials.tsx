"use client";

import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

const TESTIMONIALS = ["t1", "t2", "t3"] as const;

function StarRating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

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
              className="flex flex-col rounded-xl bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <StarRating />
              <blockquote className="mt-4 flex-1 italic leading-relaxed text-muted-foreground">
                {t(`${key}Quote`)}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t(`${key}Name`).charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {t(`${key}Name`)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t(`${key}Role`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
