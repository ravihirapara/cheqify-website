"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

interface BankEntry {
  name: string;
  logo?: string;
  color: string;
}

const BANKS: BankEntry[] = [
  { name: "SBI", logo: "/images/banks/sbi.png", color: "#1a4b8c" },
  { name: "HDFC", color: "#004b87" },
  { name: "ICICI", color: "#f58220" },
  { name: "Axis", color: "#97144d" },
  { name: "PNB", color: "#cc0000" },
  { name: "Kotak", color: "#ed1c24" },
  { name: "BOB", color: "#f47920" },
  { name: "Yes Bank", color: "#0066b3" },
  { name: "IndusInd", color: "#1a3f6f" },
];

function BankLogo({ bank }: { bank: BankEntry }) {
  if (bank.logo) {
    return (
      <Image
        src={bank.logo}
        alt={bank.name}
        width={140}
        height={40}
        unoptimized
        className="h-10 w-auto object-contain"
      />
    );
  }

  return (
    <svg
      viewBox="0 0 140 40"
      className="h-10 w-auto"
      role="img"
      aria-label={bank.name}
    >
      <circle cx="16" cy="20" r="10" fill={bank.color} />
      <text
        x="82"
        y="26"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="16"
        fontWeight="bold"
        fill={bank.color}
      >
        {bank.name}
      </text>
    </svg>
  );
}

export function BankLogos() {
  const t = useTranslations("home.bankLogos");

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
                <BankLogo bank={bank} />
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
