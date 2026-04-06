"use client";

import { useTranslations } from "next-intl";
import { Link } from "~/i18n/navigation";

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
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo + Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-foreground">
                Cheqify<span className="text-primary">.app</span>
              </span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((column) => (
            <div key={column.titleKey}>
              <h3 className="text-sm font-semibold text-foreground">
                {t(`footer.${column.titleKey}`)}
              </h3>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {t("footer.copyright", { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}
