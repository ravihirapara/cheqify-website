import { getTranslations } from "next-intl/server";
import { UserPlus, Building2, Printer } from "lucide-react";

const STEPS = [
  { key: "step1", icon: UserPlus },
  { key: "step2", icon: Building2 },
  { key: "step3", icon: Printer },
] as const;

export async function OnlineChequePrintingSteps({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "onlineChequePrinting.steps" });

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#eff4ff" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{t("subheading")}</p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {STEPS.map(({ key, icon: Icon }, i) => (
            <div
              key={key}
              className="relative rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <span className="absolute right-6 top-6 text-3xl font-bold text-primary/20">
                0{i + 1}
              </span>
              <h3 className="mb-2 text-lg font-bold text-foreground">{t(`${key}Title`)}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t(`${key}Body`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
