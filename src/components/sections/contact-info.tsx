"use client";

import { useTranslations } from "next-intl";
import { Headset, Briefcase, Clock } from "lucide-react";

export function ContactInfo() {
  const t = useTranslations("contact.info");

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* Support Card */}
        <div className="rounded-xl border border-border/15 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:bg-card">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Headset className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-bold">{t("supportTitle")}</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            {t("supportDescription")}
          </p>
          <a
            className="text-sm font-semibold text-primary hover:underline"
            href={`mailto:${t("supportEmail")}`}
          >
            {t("supportEmail")}
          </a>
        </div>

        {/* Sales Card */}
        <div className="rounded-xl border border-border/15 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:bg-card">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400">
            <Briefcase className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-bold">{t("salesTitle")}</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            {t("salesDescription")}
          </p>
          <a
            className="text-sm font-semibold text-primary hover:underline"
            href={`mailto:${t("salesEmail")}`}
          >
            {t("salesEmail")}
          </a>
        </div>
      </div>

      {/* Response Time Card */}
      <div className="flex items-center gap-4 rounded-xl border border-border/15 bg-card p-8">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Clock className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{t("responseTime")}</p>
          <p className="text-lg font-semibold text-primary">
            {t("responseTimeValue")}
          </p>
        </div>
      </div>
    </div>
  );
}
