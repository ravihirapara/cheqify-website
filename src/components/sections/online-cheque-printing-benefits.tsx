import { getTranslations } from "next-intl/server";
import { Cloud, Zap, ShieldCheck, Smartphone, Users, RefreshCcw } from "lucide-react";

const BENEFITS = [
  { key: "card1", icon: Cloud },
  { key: "card2", icon: Zap },
  { key: "card3", icon: ShieldCheck },
  { key: "card4", icon: Smartphone },
  { key: "card5", icon: Users },
  { key: "card6", icon: RefreshCcw },
] as const;

export async function OnlineChequePrintingBenefits({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "onlineChequePrinting.benefits" });

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{t("subheading")}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
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
