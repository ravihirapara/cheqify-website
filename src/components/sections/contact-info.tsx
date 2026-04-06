"use client";

import { useTranslations } from "next-intl";
import { Headset, Briefcase, MapPin, Phone, Clock, Mail } from "lucide-react";

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
            href={`tel:${t("supportPhone")}`}
          >
            {t("supportPhone")}
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

      {/* Office Card */}
      <div className="relative overflow-hidden rounded-xl bg-foreground p-10 text-background">
        <div className="relative z-10">
          <h3 className="mb-6 text-2xl font-bold">{t("officeTitle")}</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm">{t("officeAddress")}</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <a href={`tel:${t("officePhone")}`} className="text-sm hover:text-primary">{t("officePhone")}</a>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm">{t("officeHours")}</p>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <a href={`mailto:${t("officeEmail")}`} className="text-sm text-primary hover:underline">
                {t("officeEmail")}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
      </div>
    </div>
  );
}
