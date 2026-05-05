import { getTranslations } from "next-intl/server";
import { rupeesToWords, formatIndianNumber } from "~/lib/amount-in-words";

const COMMON_AMOUNTS = [
  100, 500, 1000, 5000, 10000, 50000, 100000, 200000, 500000,
  1000000, 1500000, 2500000, 10000000,
];

const STEP_KEYS = ["step1", "step2", "step3", "step4", "step5"] as const;

export async function AmountInWordsGuide({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "amountInWords.guide" });

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#eff4ff" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("heading")}
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">{t("subheading")}</p>

          <ol className="space-y-4">
            {STEP_KEYS.map((key, i) => (
              <li key={key} className="flex gap-4 rounded-xl bg-background p-5 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{t(`${key}Title`)}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t(`${key}Body`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {t("tableHeading")}
          </h3>
          <p className="mb-6 text-base text-muted-foreground">{t("tableSubheading")}</p>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-sm">
            <table className="w-full min-w-[500px] border-collapse" aria-label={t("tableHeading")}>
              <thead>
                <tr className="bg-muted/50 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  <th scope="col" className="px-4 py-3 text-left md:px-6">{t("colNumber")}</th>
                  <th scope="col" className="px-4 py-3 text-left md:px-6">{t("colIndian")}</th>
                  <th scope="col" className="px-4 py-3 text-left md:px-6">{t("colWords")}</th>
                </tr>
              </thead>
              <tbody>
                {COMMON_AMOUNTS.map((n, i) => (
                  <tr key={n} className={`text-sm ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`}>
                    <td className="px-4 py-3 font-mono text-muted-foreground md:px-6">
                      {n.toLocaleString("en-US")}
                    </td>
                    <td className="px-4 py-3 font-mono font-semibold text-foreground md:px-6">
                      ₹{formatIndianNumber(n)}
                    </td>
                    <td className="px-4 py-3 text-foreground md:px-6">
                      {rupeesToWords(n)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
