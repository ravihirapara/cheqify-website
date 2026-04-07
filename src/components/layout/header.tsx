"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "~/i18n/navigation";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { ThemeToggle } from "~/components/layout/theme-toggle";
import { LanguageSwitcher } from "~/components/layout/language-switcher";
import { MobileNav } from "~/components/layout/mobile-nav";
import { NAV_ITEMS } from "~/lib/navigation";

export function Header() {
  const t = useTranslations("common");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/70 shadow-sm backdrop-blur-md dark:bg-card/70">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
      >
        {t("header.skipToContent")}
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label={t("header.logoAlt")}>
          <Image
            src="/images/logo.png"
            alt={t("header.logoAlt")}
            width={180}
            height={50}
            priority
            className="h-10 w-auto md:h-11"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.key}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {t(`nav.${item.key}`)}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Controls + CTAs */}
        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileNav />
          <a
            href="https://app.cheqify.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex"
          >
            <Button variant="ghost" size="default" className="h-9">
              {t("cta.login")}
            </Button>
          </a>
          <a
            href="https://app.cheqify.app/register"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex"
          >
            <Button variant="default" size="default" className="h-9">
              {t("cta.startFree")}
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
