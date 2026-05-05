import { getTranslations } from "next-intl/server";
import { AmountInWordsTool } from "./amount-in-words-tool";

export async function AmountInWordsHero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "amountInWords.hero" });

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            {t("badge")}
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t("headlinePart1")}
            <span className="text-primary">{t("headlineHighlight")}</span>
            {t("headlinePart2")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t("subheading")}
          </p>
        </div>
        <AmountInWordsTool />
      </div>
    </section>
  );
}
