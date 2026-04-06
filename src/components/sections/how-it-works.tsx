"use client";

import { useTranslations } from "next-intl";
import { UserPlus, FileEdit, Printer } from "lucide-react";

const STEPS = [
  { key: "step1", icon: UserPlus, step: 1 },
  { key: "step2", icon: FileEdit, step: 2 },
  { key: "step3", icon: Printer, step: 3 },
] as const;

export function HowItWorks() {
  const t = useTranslations("home.howItWorks");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {t("heading")}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            {t("subheading")}
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.key} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <span className="mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {t(`${item.key}Title`)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(`${item.key}Description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
