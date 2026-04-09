"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "~/i18n/navigation";
import { Globe, Mail, ArrowRight, Printer, Shield, Clock } from "lucide-react";
import { Button } from "~/components/ui/button";

const FOOTER_LINKS = [
  {
    titleKey: "product",
    links: [
      { labelKey: "nav.features", href: "/features" },
      { labelKey: "nav.pricing", href: "/pricing" },
      { labelKey: "footer.compare", href: "/comparison" },
    ],
  },
  {
    titleKey: "resources",
    links: [
      { labelKey: "nav.blog", href: "/blog" },
    ],
  },
  {
    titleKey: "company",
    links: [
      { labelKey: "nav.about", href: "/about" },
      { labelKey: "nav.contact", href: "/contact" },
    ],
  },
  {
    titleKey: "legal",
    links: [
      { labelKey: "footer.privacy", href: "/privacy" },
    ],
  },
] as const;

export function Footer() {
  const t = useTranslations("common");
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* CTA Banner */}
      <div className="bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary-foreground">
              {t("footer.tagline")}
            </h3>
            <p className="mt-2 text-primary-foreground/80">
              {t("footer.ctaSubtext")}
            </p>
          </div>
          <a
            href="https://app.cheqify.app/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="secondary"
              className="h-12 gap-2 px-8 text-base font-semibold"
            >
              {t("footer.ctaButton")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="border-b border-border/30 bg-muted/50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 py-6 sm:px-6 md:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <Printer className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">{t("footer.stat1")}</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">{t("footer.stat2")}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">{t("footer.stat3")}</span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
            {/* Logo + Description + Social */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo.png"
                  alt="Cheqify.app logo"
                  width={160}
                  height={45}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="mt-6 max-w-xs leading-relaxed text-muted-foreground">
                {t("footer.description")}
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://cheqify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                  aria-label="Website"
                >
                  <Globe className="h-5 w-5" />
                </a>
                <a
                  href="mailto:contact.cheqify@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Link Columns */}
            {FOOTER_LINKS.map((column) => (
              <div key={column.titleKey}>
                <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-foreground">
                  {t(`footer.${column.titleKey}`)}
                </h3>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        {t(link.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              {t("footer.copyright", { year })}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("footer.madeIn")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
