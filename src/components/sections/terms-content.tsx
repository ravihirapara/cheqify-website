"use client";

import { useTranslations } from "next-intl";
import {
  Gavel,
  UserCheck,
  FileText,
  ShieldAlert,
  Ban,
  Scale,
  RefreshCw,
  CheckCircle,
  Mail,
  MapPin,
} from "lucide-react";

export function TermsContent() {
  const t = useTranslations("terms");

  return (
    <article className="mx-auto max-w-5xl space-y-16 px-4 pb-24 sm:px-6 lg:px-8">
      {/* Section 1: Acceptance */}
      <section className="space-y-6">
        <div className="mb-2 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <Gavel className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t("sections.acceptanceTitle")}
          </h2>
        </div>
        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>{t("sections.acceptanceP1")}</p>
          <p>{t("sections.acceptanceP2")}</p>
        </div>
      </section>

      {/* Section 2: Eligibility */}
      <section className="space-y-6">
        <div className="mb-2 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <UserCheck className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t("sections.eligibilityTitle")}
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t("sections.eligibilityP1")}
        </p>
      </section>

      {/* Section 3: Use of Service */}
      <section className="space-y-6">
        <div className="mb-2 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t("sections.useTitle")}
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t("sections.useIntro")}
        </p>
        <ul className="space-y-4">
          {(["use1", "use2", "use3", "use4"] as const).map((key) => (
            <li key={key} className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-5 w-5 shrink-0 fill-primary text-primary-foreground" />
              <span className="text-lg text-muted-foreground">
                {t(`sections.${key}`)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 4: Prohibited Activities */}
      <section className="space-y-6">
        <div className="mb-2 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <Ban className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t("sections.prohibitedTitle")}
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t("sections.prohibitedIntro")}
        </p>
        <ul className="space-y-4">
          {(["prohibited1", "prohibited2", "prohibited3", "prohibited4"] as const).map((key) => (
            <li key={key} className="flex items-start gap-4">
              <Ban className="mt-1 h-5 w-5 shrink-0 text-destructive/60" />
              <span className="text-lg text-muted-foreground">
                {t(`sections.${key}`)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 5: Disclaimer */}
      <section className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            {t("sections.disclaimerTitle")}
          </h2>
          <p className="text-lg leading-relaxed opacity-90">
            {t("sections.disclaimerP1")}
          </p>
          <p className="text-sm opacity-70">
            {t("sections.disclaimerP2")}
          </p>
        </div>
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary opacity-20 blur-[100px]" />
      </section>

      {/* Section 6: Limitation of Liability */}
      <section className="space-y-6">
        <div className="mb-2 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <ShieldAlert className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t("sections.liabilityTitle")}
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t("sections.liabilityP1")}
        </p>
      </section>

      {/* Section 7: Governing Law */}
      <section className="space-y-6">
        <div className="mb-2 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <Scale className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t("sections.governingTitle")}
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t("sections.governingP1")}
        </p>
      </section>

      {/* Section 8: Changes */}
      <section className="space-y-6">
        <div className="mb-2 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <RefreshCw className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t("sections.changesTitle")}
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t("sections.changesP1")}
        </p>
      </section>

      {/* Contact Section */}
      <section className="space-y-8 border-t border-border/50 pt-12 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
          {t("contact.heading")}
        </h2>
        <p className="text-lg text-muted-foreground">
          {t("contact.description")}
        </p>
        <div className="inline-flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <a
            href={`mailto:${t("contact.email")}`}
            className="flex items-center gap-3 rounded-full border border-border/50 bg-card px-6 py-4 shadow-sm transition-colors hover:bg-muted"
          >
            <Mail className="h-5 w-5 text-primary" />
            <span className="font-bold text-foreground">
              {t("contact.email")}
            </span>
          </a>
          <div className="flex items-center gap-3 rounded-full border border-border/50 bg-card px-6 py-4 shadow-sm">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-bold text-foreground">
              {t("contact.address")}
            </span>
          </div>
        </div>
      </section>
    </article>
  );
}
