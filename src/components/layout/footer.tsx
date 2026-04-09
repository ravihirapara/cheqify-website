"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Link } from "~/i18n/navigation";
import { Globe, Mail } from "lucide-react";

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
      { labelKey: "footer.terms", href: "/terms" },
    ],
  },
] as const;

export function Footer() {
  const t = useTranslations("common");
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 bg-gradient-to-b from-primary/5 to-background py-16">
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@cheqify"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href="mailto:contact.cheqify@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md"
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
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        pathname.endsWith(link.href) ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Punchline */}
        <div className="pb-6 text-center">
          <p className="text-lg font-semibold italic text-foreground/70">
            {t("footer.punchline")}
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright", { year })}
          </p>
          <p className="text-sm font-medium text-muted-foreground/70">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
}
