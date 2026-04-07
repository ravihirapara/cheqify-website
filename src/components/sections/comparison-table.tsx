"use client";

import { useTranslations } from "next-intl";
import { Check, X } from "lucide-react";

const FEATURES = [
  { num: 1, cheqifyWins: false },
  { num: 2, cheqifyWins: true },
  { num: 3, cheqifyWins: true },
  { num: 4, cheqifyWins: true },
  { num: 5, cheqifyWins: true },
  { num: 6, cheqifyWins: true },
  { num: 7, cheqifyWins: true },
  { num: 8, cheqifyWins: true },
  { num: 9, cheqifyWins: true },
  { num: 10, cheqifyWins: true },
  { num: 11, cheqifyWins: true },
  { num: 12, cheqifyWins: true },
] as const;

// ChequePot loses on these features (shows X icon)
const CHEQUEPOT_LOSES = new Set([4, 6, 7, 8, 11]);

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

        <div className="mx-auto max-w-4xl overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse overflow-hidden rounded-2xl border border-border shadow-sm" aria-label={t("heading")}>
            <thead>
              <tr className="bg-muted/50 text-sm font-bold uppercase tracking-wider">
                <th scope="col" className="px-4 py-4 text-left text-muted-foreground md:px-6">Feature</th>
                <th scope="col" className="px-4 py-4 text-center text-primary md:px-6">{t("cheqify")}</th>
                <th scope="col" className="px-4 py-4 text-center text-muted-foreground md:px-6">{t("chequepot")}</th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map(({ num, cheqifyWins }, i) => (
                <tr
                  key={num}
                  className={`text-sm ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`}
                >
                  <td className="px-4 py-3.5 font-medium text-foreground md:px-6">
                    {t(`feature${num}`)}
                  </td>
                  <td className="px-4 py-3.5 text-center md:px-6">
                    <Check className="mr-1 inline h-5 w-5 text-green-500" />
                    <span className={cheqifyWins ? "font-semibold text-foreground" : "text-muted-foreground"}>
                      {t(`cheqify${num}`)}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center md:px-6">
                    {CHEQUEPOT_LOSES.has(num) ? (
                      <X className="mr-1 inline h-5 w-5 text-red-500" />
                    ) : (
                      <Check className="mr-1 inline h-5 w-5 text-muted-foreground" />
                    )}
                    <span className="text-muted-foreground">
                      {t(`chequepot${num}`)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
