"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import posthog from "posthog-js";
import Image from "next/image";
import { Link, usePathname } from "~/i18n/navigation";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "~/components/ui/sheet";
import { ThemeToggle } from "~/components/layout/theme-toggle";
import { LanguageSwitcher } from "~/components/layout/language-switcher";
import { NAV_ITEMS } from "~/lib/navigation";
import { Menu } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("common");
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="icon"
        className="h-11 w-11 lg:hidden"
        onClick={() => setOpen(true)}
        aria-label={t("header.openMenu")}
      >
        <Menu className="h-5 w-5" />
      </Button>
      <SheetContent side="right" showCloseButton>
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/images/logo.png"
              alt={t("header.logoAlt")}
              width={120}
              height={34}
              className="h-7 w-auto"
            />
          </SheetTitle>
        </SheetHeader>
        <nav
          className="flex flex-col gap-1 px-4"
          aria-label={t("header.navigation")}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-muted",
                  isActive
                    ? "bg-muted text-primary"
                    : "text-foreground"
                )}
              >
                {t(`nav.${item.key}`)}
              </Link>
            );
          })}
        </nav>
        <div className="mt-4 flex flex-col gap-3 border-t border-border px-4 pt-4">
          <a
            href="https://app.cheqify.app/register"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              posthog.capture("cta_signup_clicked", { location: "mobile_nav" });
              setOpen(false);
            }}
          >
            <Button variant="default" className="h-11 w-full">
              {t("cta.startFree")}
            </Button>
          </a>
          <a
            href="https://app.cheqify.app/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              posthog.capture("cta_login_clicked", { location: "mobile_nav" });
              setOpen(false);
            }}
          >
            <Button variant="ghost" className="h-11 w-full">
              {t("cta.login")}
            </Button>
          </a>
        </div>
        <div className="flex items-center gap-2 border-t border-border px-4 pt-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
