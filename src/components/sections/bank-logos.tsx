"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const BANKS: { name: string; logo: string; className?: string }[] = [
  { name: "State Bank of India", logo: "/images/banks/sbi.png" },
  { name: "HDFC Bank", logo: "/images/banks/hdfc.png" },
  { name: "ICICI Bank", logo: "/images/banks/icici.png" },
  { name: "Axis Bank", logo: "/images/banks/axis.png" },
  { name: "Kotak Mahindra Bank", logo: "/images/banks/kotak.png" },
  { name: "Bank of Baroda", logo: "/images/banks/bob.png" },
  { name: "Yes Bank", logo: "/images/banks/yesbank.png" },
  { name: "IDFC First Bank", logo: "/images/banks/idfc.png" },
  { name: "IndusInd Bank", logo: "/images/banks/indusind.png" },
  { name: "Varachha Co-Op Bank", logo: "/images/banks/varachha.png", className: "!w-20 md:!w-44" },
  { name: "Kalupur Bank", logo: "/images/banks/kalupur.png" },
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
          <div className="flex animate-[marquee_25s_linear_infinite] items-center gap-12 whitespace-nowrap hover:[animation-play-state:paused] md:gap-16">
            {allBanks.map((bank, idx) => (
              <Image
                key={`${bank.name}-${idx}`}
                src={bank.logo}
                alt={`${bank.name} logo — supported by Cheqify`}
                width={200}
                height={60}
                className={`h-12 w-auto opacity-80 transition-opacity hover:opacity-100 md:h-16 ${bank.className || ""}`}
              />
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
