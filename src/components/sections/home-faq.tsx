"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_KEYS = ["faq1", "faq2", "faq3", "faq4", "faq5", "faq6", "faq7"] as const;

export function HomeFaq() {
  const t = useTranslations("home.faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h2 className="mb-2 text-center text-3xl font-bold tracking-tight text-foreground">
        {t("heading")}
      </h2>
      <p className="mb-10 text-center text-muted-foreground">
        {t("subheading")}
      </p>
      <div className="divide-y divide-border rounded-xl border border-border">
        {FAQ_KEYS.map((key, i) => (
          <div key={key}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium text-foreground hover:bg-muted/50 transition-colors"
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
    </section>
  );
}
