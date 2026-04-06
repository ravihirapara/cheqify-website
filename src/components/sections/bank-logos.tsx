"use client";

import { useTranslations } from "next-intl";

const BANK_NAMES = [
  "SBI",
  "HDFC",
  "ICICI",
  "Axis",
  "PNB",
  "Kotak",
  "BOB",
  "Yes Bank",
  "IndusInd",
];

export function BankLogos() {
  const t = useTranslations("home.bankLogos");

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
          {t("heading")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {BANK_NAMES.map((bank) => (
            <span
              key={bank}
              className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground"
            >
              {bank}
            </span>
          ))}
          <span className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            {t("moreBanks")}
          </span>
        </div>
      </div>
    </section>
  );
}
