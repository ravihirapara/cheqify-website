"use client";

import { useTranslations } from "next-intl";
import {
  ShieldCheck,
  Wallet,
  BellRing,
  GraduationCap,
  Monitor,
  Lock,
} from "lucide-react";

const CARDS = [
  { key: "card1", icon: ShieldCheck },
  { key: "card2", icon: Wallet },
  { key: "card3", icon: BellRing },
  { key: "card4", icon: GraduationCap },
  { key: "card5", icon: Monitor },
  { key: "card6", icon: Lock },
] as const;

export function FeatureHighlights() {
  const t = useTranslations("features.highlights");

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            {t("heading")}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t("subheading")}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:grid-rows-2">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.key}
                className="group rounded-xl border border-border/10 bg-background p-10 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-foreground">
                  {t(`${card.key}Title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`${card.key}Description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
