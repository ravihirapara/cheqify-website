"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface LandingFaqProps {
  namespace: string;
  faqCount: number;
}

export function LandingFaq({ namespace, faqCount }: LandingFaqProps) {
  const t = useTranslations(namespace);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const keys = Array.from({ length: faqCount }, (_, i) => `faq${i + 1}`);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight text-foreground">
          {t("heading")}
        </h2>
        <p className="mb-10 text-center text-muted-foreground">{t("subheading")}</p>
        <div className="divide-y divide-border rounded-xl border border-border">
          {keys.map((key, i) => (
            <div key={key}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium text-foreground transition-colors hover:bg-muted/50"
                aria-expanded={openIndex === i}
              >
                {t(`${key}Question`)}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {t(`${key}Answer`)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
