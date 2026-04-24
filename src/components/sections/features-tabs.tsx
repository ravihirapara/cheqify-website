"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "~/lib/utils";
import { Printer, BarChart3, LayoutDashboard } from "lucide-react";

const FEATURES = [
  { key: "printing", icon: Printer },
  { key: "tracking", icon: BarChart3 },
  { key: "dashboard", icon: LayoutDashboard },
] as const;

export function FeaturesTabs() {
  const t = useTranslations("home.featuresTabs");
  const [active, setActive] = useState<string>("printing");

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            {t("heading")}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            {t("subheading")}
          </p>
        </div>
        <div className="mt-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Left side: accordion feature cards */}
          <div className="space-y-4">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              const isActive = active === feature.key;
              return (
                <button
                  key={feature.key}
                  type="button"
                  onClick={() => setActive(feature.key)}
                  className={cn(
                    "w-full rounded-lg border p-5 text-left transition-all",
                    isActive
                      ? "border-l-4 border-primary bg-primary/5"
                      : "border-border hover:bg-muted/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={cn(
                        "h-5 w-5 shrink-0",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    />
                    <h3
                      className={cn(
                        "text-base font-semibold",
                        isActive ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {t(feature.key)}
                    </h3>
                  </div>
                  {isActive && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {t(`${feature.key}Description`)}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right side: product screenshot */}
          <div className="mt-8 lg:mt-0">
            <div
              key={active}
              className="animate-laptop-zoom-out mx-auto w-full max-w-[600px]"
            >
              {active === "tracking" ? (
                <Image
                  src="/images/cheque-lifecycle-tracking-screenshot.webp"
                  alt="Cheque lifecycle tracking dashboard showing issue, deposit, and clearance status"
                  width={1823}
                  height={1059}
                  className="h-auto w-full rounded-lg"
                />
              ) : active === "dashboard" ? (
                <Image
                  src="/images/owner-dashboard-screenshot.webp"
                  alt="Owner dashboard with business overview, team activity, and outstanding payments"
                  width={1853}
                  height={1077}
                  className="h-auto w-full rounded-lg"
                />
              ) : (
                <Image
                  src="/images/cheque-printing-screenshot.webp"
                  alt="Cheque printing software preview with payee, amount, and MICR auto-fill"
                  width={585}
                  height={341}
                  className="h-auto w-full rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
