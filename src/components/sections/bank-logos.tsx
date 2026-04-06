"use client";

import { useTranslations } from "next-intl";

const BANKS = [
  { name: "SBI", color: "#1a4b8c" },
  { name: "HDFC Bank", color: "#004b87" },
  { name: "ICICI Bank", color: "#f58220" },
  { name: "Axis Bank", color: "#97144d" },
  { name: "PNB", color: "#cc0000" },
  { name: "Kotak", color: "#ed1c24" },
  { name: "BOB", color: "#f47920" },
  { name: "Yes Bank", color: "#0066b3" },
  { name: "IndusInd", color: "#1a3f6f" },
];

export function BankLogos() {
  const t = useTranslations("home.bankLogos");

  const allBanks = [...BANKS, ...BANKS];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {t("heading")}
        </p>
        <div className="overflow-hidden">
          <div className="flex animate-[marquee_20s_linear_infinite] items-center gap-12 whitespace-nowrap hover:[animation-play-state:paused] md:gap-16">
            {allBanks.map((bank, idx) => (
              <span
                key={`${bank.name}-${idx}`}
                className="text-xl font-bold opacity-50 transition-opacity hover:opacity-100"
                style={{ color: bank.color }}
              >
                {bank.name}
              </span>
            ))}
            <span className="text-lg font-bold text-primary">
              {t("moreBanks")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
