"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "~/i18n/navigation";
import { Button } from "~/components/ui/button";

const STORAGE_KEY = "cheqify-cookie-consent";

export function CookieConsent() {
  const t = useTranslations("common.cookies");
  const [consent, setConsent] = useState<string | null>("pending");

  useEffect(() => {
    function read() {
      setConsent(localStorage.getItem(STORAGE_KEY));
    }

    read();
    window.addEventListener("cookie-consent-change", read);
    return () => window.removeEventListener("cookie-consent-change", read);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    window.dispatchEvent(new Event("cookie-consent-change"));
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    window.dispatchEvent(new Event("cookie-consent-change"));
  }

  if (consent !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-4">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-lg dark:bg-card sm:flex-row sm:gap-6">
        <p className="flex-1 text-sm text-muted-foreground">
          {t("message")}{" "}
          <Link
            href="/privacy"
            className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
          >
            {t("privacy")}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <Button variant="outline" size="sm" onClick={decline}>
            {t("decline")}
          </Button>
          <Button variant="default" size="sm" onClick={accept}>
            {t("accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
