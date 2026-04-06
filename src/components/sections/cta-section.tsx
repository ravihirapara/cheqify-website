"use client";

import { useTranslations } from "next-intl";
import { Link } from "~/i18n/navigation";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const t = useTranslations("home.finalCta");
  const tCta = useTranslations("common.cta");

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center">
          {/* Radial gradient overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-primary-foreground">
              {t("heading")}
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70">
              {t("subheading")}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://app.cheqify.app/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  className="h-12 px-8 text-base font-semibold"
                >
                  {tCta("startFree")}
                </Button>
              </a>
              <Link href="/features">
                <Button
                  variant="outline"
                  className="h-12 border-primary-foreground/30 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground/10"
                >
                  {t("learnMore")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
