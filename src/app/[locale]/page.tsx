import { useTranslations } from "next-intl";
import { ThemeToggle } from "~/components/layout/theme-toggle";
import { LanguageSwitcher } from "~/components/layout/language-switcher";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Cheqify<span className="text-primary">.app</span>
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          {t("hero.headline")}
        </p>
        <p className="text-sm text-muted-foreground">
          {t("placeholder.comingSoon")}
        </p>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </main>
    </div>
  );
}
