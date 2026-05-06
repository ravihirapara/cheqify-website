import { useTranslations } from "next-intl";
import { Check, X } from "lucide-react";

const FEATURE_NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

interface ComparisonTableProps {
  namespace?: string;
  competitorKey?: string;
  competitorLoses?: number[];
}

export function ComparisonTable({
  namespace = "comparison",
  competitorKey = "chequepot",
  competitorLoses = [4, 6, 7, 8, 11],
}: ComparisonTableProps) {
  const t = useTranslations(`${namespace}.table`);
  const losesSet = new Set(competitorLoses);

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
          <table
            className="w-full min-w-[500px] border-collapse overflow-hidden rounded-2xl border border-border shadow-sm"
            aria-label={t("heading")}
          >
            <thead>
              <tr className="bg-muted/50 text-sm font-bold uppercase tracking-wider">
                <th scope="col" className="px-4 py-4 text-left text-muted-foreground md:px-6">
                  Feature
                </th>
                <th scope="col" className="px-4 py-4 text-center text-primary md:px-6">
                  {t("cheqify")}
                </th>
                <th scope="col" className="px-4 py-4 text-center text-muted-foreground md:px-6">
                  {t(competitorKey)}
                </th>
              </tr>
            </thead>
            <tbody>
              {FEATURE_NUMS.map((num, i) => (
                <tr
                  key={num}
                  className={`text-sm ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`}
                >
                  <td className="px-4 py-3.5 font-medium text-foreground md:px-6">
                    {t(`feature${num}`)}
                  </td>
                  <td className="px-4 py-3.5 text-center md:px-6">
                    <Check className="mr-1 inline h-5 w-5 text-green-500" />
                    <span className="font-semibold text-foreground">
                      {t(`cheqify${num}`)}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center md:px-6">
                    {losesSet.has(num) ? (
                      <X className="mr-1 inline h-5 w-5 text-red-500" />
                    ) : (
                      <Check className="mr-1 inline h-5 w-5 text-muted-foreground" />
                    )}
                    <span className="text-muted-foreground">
                      {t(`${competitorKey}${num}`)}
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
