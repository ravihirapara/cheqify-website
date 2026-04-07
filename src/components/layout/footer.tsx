"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "~/i18n/navigation";
import { Globe, Mail } from "lucide-react";

const FOOTER_LINKS = [
  {
    titleKey: "product",
    links: [
      { labelKey: "nav.features", href: "/features" },
      { labelKey: "nav.pricing", href: "/pricing" },
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
    <footer className="border-t border-border/30 py-16" style={{ backgroundColor: "#eff4ff" }}>
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
            <div className="mt-8 flex gap-5">
              <a
                href="https://cheqify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact.cheqify@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
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

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
