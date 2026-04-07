"use client";

import { useTranslations } from "next-intl";
import { Check, X, Minus } from "lucide-react";

const FEATURE_COUNT = 12;

const CHEQIFY_STATUS: Record<number, "win" | "tie"> = {
  1: "tie",
  2: "win",
  3: "win",
  4: "win",
  5: "win",
  6: "win",
  7: "win",
  8: "win",
  9: "win",
  10: "win",
  11: "win",
  12: "win",
};

function StatusIcon({ value, isWin }: { value: string; isWin: boolean }) {
  const lower = value.toLowerCase();
  if (lower === "no" || lower === "नहीं" || lower === "ना") {
    return <X className="mr-2 inline h-5 w-5 text-red-500" />;
  }
  if (isWin) {
    return <Check className="mr-2 inline h-5 w-5 text-green-500" />;
  }
  return <Minus className="mr-2 inline h-5 w-5 text-muted-foreground" />;
}

export function ComparisonTable() {
  const t = useTranslations("comparison.table");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            {t("subheading")}
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-3 bg-muted/50 px-4 py-4 text-sm font-bold uppercase tracking-wider md:px-6">
            <div className="text-muted-foreground">Feature</div>
            <div className="text-center text-primary">{t("cheqify")}</div>
            <div className="text-center text-muted-foreground">{t("chequepot")}</div>
          </div>

          {/* Rows */}
          {Array.from({ length: FEATURE_COUNT }).map((_, i) => {
            const num = i + 1;
            const status = CHEQIFY_STATUS[num];
            return (
              <div
                key={num}
                className={`grid grid-cols-3 items-center px-4 py-3.5 text-sm md:px-6 ${
                  i % 2 === 0 ? "bg-background" : "bg-muted/20"
                }`}
              >
                <div className="font-medium text-foreground">
                  {t(`feature${num}`)}
                </div>
                <div className="text-center">
                  <StatusIcon value={t(`cheqify${num}`)} isWin={status === "win"} />
                  <span className={status === "win" ? "font-semibold text-foreground" : "text-muted-foreground"}>
                    {t(`cheqify${num}`)}
                  </span>
                </div>
                <div className="text-center">
                  <StatusIcon value={t(`chequepot${num}`)} isWin={false} />
                  <span className="text-muted-foreground">
                    {t(`chequepot${num}`)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
