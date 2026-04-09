"use client";

import { useTranslations } from "next-intl";
import {
  Gavel,
  Database,
  User,
  Monitor,
  Eye,
  CheckCircle,
  Shield,
  Pencil,
  Trash2,
  Download,
  Ban,
} from "lucide-react";

export function PrivacyContent() {
  const t = useTranslations("privacy");

  return (
    <article className="mx-auto max-w-5xl space-y-16 px-4 pb-24 sm:px-6 lg:px-8">
      {/* Section 1: Introduction */}
      <section className="space-y-6">
        <div className="mb-2 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <Gavel className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t("sections.introTitle")}
          </h2>
        </div>
        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>{t("sections.introP1")}</p>
          <p>{t("sections.introP2")}</p>
        </div>
      </section>

      {/* Section 2: Information Collection */}
      <section className="space-y-8">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <Database className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t("sections.collectionTitle")}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="group rounded-xl border border-border/50 bg-card p-8 transition-all hover:bg-muted/50">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <User className="h-5 w-5" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">
              {t("sections.directTitle")}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("sections.directDescription")}
            </p>
          </div>
          <div className="group rounded-xl border border-border/50 bg-card p-8 transition-all hover:bg-muted/50">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Monitor className="h-5 w-5" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">
              {t("sections.automatedTitle")}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("sections.automatedDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How We Use Data */}
      <section className="space-y-6">
        <div className="mb-2 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <Eye className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t("sections.usageTitle")}
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t("sections.usageIntro")}
        </p>
        <ul className="space-y-4">
          {(["usage1", "usage2", "usage3", "usage4"] as const).map((key) => (
            <li key={key} className="flex items-start gap-4">
              <CheckCircle className="mt-1 h-5 w-5 shrink-0 fill-primary text-primary-foreground" />
              <span className="text-lg text-muted-foreground">
                {t(`sections.${key}`)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 4: Data Security */}
      <section className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16">
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            {t("sections.securityTitle")}
          </h2>
          <p className="text-lg leading-relaxed opacity-90">
            {t("sections.securityP1")}
          </p>
          <p className="text-sm opacity-70">
            {t("sections.securityP2")}
          </p>
        </div>
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary opacity-20 blur-[100px]" />
      </section>

      {/* Section 5: Your Privacy Rights */}
      <section className="space-y-6">
        <div className="mb-2 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t("sections.rightsTitle")}
          </h2>
        </div>
        <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
          {t("sections.rightsIntro")}
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { key: "right1", icon: Pencil },
            { key: "right2", icon: Trash2 },
            { key: "right3", icon: Download },
            { key: "right4", icon: Ban },
          ].map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="flex items-center gap-3 rounded-xl bg-muted/50 p-4"
            >
              <Icon className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium text-foreground">
                {t(`sections.${key}`)}
              </span>
            </div>
          ))}
        </div>
      </section>

    </article>
  );
}
