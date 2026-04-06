"use client";

import { useTranslations } from "next-intl";
import { Shield, Building2, Smartphone, Sparkles } from "lucide-react";

const TRUST_ITEMS = [
  { key: "bankSecurity", icon: Shield },
  { key: "indianBanks", icon: Building2 },
  { key: "anyDevice", icon: Smartphone },
  { key: "freeForever", icon: Sparkles },
] as const;

export function TrustBar() {
  const t = useTranslations("home.trustBar");

  return (
    <section className="border-y border-border bg-card py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Icon className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {t(item.key)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
