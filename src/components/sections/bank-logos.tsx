"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const BANKS = [
  { name: "SBI", src: "/images/banks/sbi.svg" },
  { name: "HDFC", src: "/images/banks/hdfc.svg" },
  { name: "ICICI", src: "/images/banks/icici.svg" },
  { name: "Axis", src: "/images/banks/axis.svg" },
  { name: "PNB", src: "/images/banks/pnb.svg" },
  { name: "Kotak", src: "/images/banks/kotak.svg" },
  { name: "BOB", src: "/images/banks/bob.svg" },
  { name: "Yes Bank", src: "/images/banks/yesbank.svg" },
  { name: "IndusInd", src: "/images/banks/indusind.svg" },
];

export function BankLogos() {
  const t = useTranslations("home.bankLogos");

  // Duplicate the list for seamless infinite scroll
  const allBanks = [...BANKS, ...BANKS];

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
          <div className="marquee-track flex items-center gap-8 whitespace-nowrap md:gap-16">
            {allBanks.map((bank, idx) => (
              <div
                key={`${bank.name}-${idx}`}
                className="opacity-60 transition-opacity hover:opacity-100"
              >
                <Image
                  src={bank.src}
                  alt={bank.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto dark:invert"
                />
              </div>
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
