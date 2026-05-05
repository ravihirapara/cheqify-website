import { getTranslations } from "next-intl/server";
import { AlertTriangle, FileX, RefreshCcw, Users, Calculator, ShieldAlert } from "lucide-react";

const LIMITATIONS = [
  { key: "card1", icon: AlertTriangle },
  { key: "card2", icon: FileX },
  { key: "card3", icon: RefreshCcw },
  { key: "card4", icon: Users },
  { key: "card5", icon: Calculator },
  { key: "card6", icon: ShieldAlert },
] as const;

export async function ExcelFormatLimitations({
  locale,
  namespace,
}: {
  locale: string;
  namespace: string;
}) {
  const t = await getTranslations({ locale, namespace: `${namespace}.limitations` });

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#eff4ff" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{t("subheading")}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LIMITATIONS.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                <Icon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{t(`${key}Title`)}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t(`${key}Body`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
