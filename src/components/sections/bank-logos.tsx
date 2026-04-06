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

  // Duplicate the list for seamless infinite scroll
  const allBanks = [...BANK_NAMES, ...BANK_NAMES];

  return (
    <section className="py-12">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 20s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {t("heading")}
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track flex items-center gap-8 whitespace-nowrap opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:gap-16">
            {allBanks.map((bank, idx) => (
              <span
                key={`${bank}-${idx}`}
                className="text-lg font-bold text-secondary"
              >
                {bank}
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
