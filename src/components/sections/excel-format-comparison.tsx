import { getTranslations } from "next-intl/server";
import { Check, X } from "lucide-react";

const ROWS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export async function ExcelFormatComparison({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "excelFormat.comparison" });

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t("heading")}</h2>
          <p className="mt-3 text-lg text-muted-foreground">{t("subheading")}</p>
        </div>
        <div className="mx-auto max-w-4xl overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse overflow-hidden rounded-2xl border border-border shadow-sm">
            <thead>
              <tr className="bg-muted/50 text-sm font-bold uppercase tracking-wider">
                <th scope="col" className="px-4 py-4 text-left text-muted-foreground md:px-6">{t("colFeature")}</th>
                <th scope="col" className="px-4 py-4 text-center text-muted-foreground md:px-6">{t("colExcel")}</th>
                <th scope="col" className="px-4 py-4 text-center text-primary md:px-6">{t("colCheqify")}</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((n, i) => (
                <tr key={n} className={`text-sm ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`}>
                  <td className="px-4 py-3.5 font-medium text-foreground md:px-6">{t(`feature${n}`)}</td>
                  <td className="px-4 py-3.5 text-center md:px-6">
                    <X className="mr-1 inline h-5 w-5 text-red-500" />
                    <span className="text-muted-foreground">{t(`excel${n}`)}</span>
                  </td>
                  <td className="px-4 py-3.5 text-center md:px-6">
                    <Check className="mr-1 inline h-5 w-5 text-green-500" />
                    <span className="font-semibold text-foreground">{t(`cheqify${n}`)}</span>
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
