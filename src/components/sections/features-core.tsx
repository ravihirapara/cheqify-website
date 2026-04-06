"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "~/lib/utils";
import { CheckCircle } from "lucide-react";

const TABS = ["printing", "tracking", "dashboard"] as const;

type TabKey = (typeof TABS)[number];

export function FeaturesCore() {
  const t = useTranslations("features.core");
  const [activeTab, setActiveTab] = useState<TabKey>("printing");

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
            {t("heading")}
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
        </div>

        {/* Tabs */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-wrap justify-center gap-4 border-b border-border/30 pb-4">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 py-3 font-medium transition-all",
                  activeTab === tab
                    ? "border-b-2 border-primary bg-background font-bold text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {t(tab)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left: text + feature list */}
            <div className="space-y-8 lg:col-span-5">
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-foreground">
                  {t(`${activeTab}Title`)}
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {t(`${activeTab}Description`)}
                </p>
              </div>
              <ul className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <span className="block font-bold text-foreground">
                        {t(`${activeTab}Feature${i}Title`)}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {t(`${activeTab}Feature${i}Description`)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: screenshot placeholder */}
            <div className="lg:col-span-7">
              <div className="rounded-xl bg-muted/50 p-8 lg:p-12">
                <div
                  className="w-full overflow-hidden rounded-lg bg-background shadow-xl ring-1 ring-border/5"
                  role="img"
                  aria-label={t(`${activeTab}ScreenshotAlt`)}
                >
                  <div className="p-5">
                    {/* Mock header bar */}
                    <div className="flex items-center gap-2 border-b border-border pb-4">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                      <div className="ml-4 h-4 w-32 rounded bg-muted" />
                      <div className="ml-auto h-8 w-24 rounded-lg bg-primary/10" />
                    </div>
                    {/* Mock stat cards */}
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <div className="rounded-lg bg-primary/10 p-4">
                        <div className="h-2 w-2/3 rounded bg-primary/30" />
                        <div className="mt-2 h-5 w-3/4 rounded bg-primary/20" />
                      </div>
                      <div className="rounded-lg bg-accent p-4">
                        <div className="h-2 w-2/3 rounded bg-primary/30" />
                        <div className="mt-2 h-5 w-3/4 rounded bg-primary/20" />
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
                        <div className="mt-2 h-5 w-3/4 rounded bg-muted-foreground/10" />
                      </div>
                    </div>
                    {/* Mock rows */}
                    <div className="mt-4 space-y-3 rounded-lg border border-border p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-primary/10" />
                        <div className="flex-1 space-y-1">
                          <div className="h-3 w-3/4 rounded bg-muted" />
                          <div className="h-2 w-1/2 rounded bg-muted/60" />
                        </div>
                        <div className="h-6 w-20 rounded-full bg-green-100 dark:bg-green-900/30" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-accent" />
                        <div className="flex-1 space-y-1">
                          <div className="h-3 w-2/3 rounded bg-muted" />
                          <div className="h-2 w-1/3 rounded bg-muted/60" />
                        </div>
                        <div className="h-6 w-20 rounded-full bg-yellow-100 dark:bg-yellow-900/30" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-primary/10" />
                        <div className="flex-1 space-y-1">
                          <div className="h-3 w-4/5 rounded bg-muted" />
                          <div className="h-2 w-2/5 rounded bg-muted/60" />
                        </div>
                        <div className="h-6 w-20 rounded-full bg-green-100 dark:bg-green-900/30" />
                      </div>
                    </div>
                    {/* Mock chart */}
                    <div className="mt-4 flex items-end gap-1 border-t border-border pt-4">
                      <div className="h-10 flex-1 rounded-t bg-primary/20" />
                      <div className="h-16 flex-1 rounded-t bg-primary/30" />
                      <div className="h-24 flex-1 rounded-t bg-primary/40" />
                      <div className="h-14 flex-1 rounded-t bg-primary/25" />
                      <div className="h-28 flex-1 rounded-t bg-primary" />
                      <div className="h-20 flex-1 rounded-t bg-primary/35" />
                      <div className="h-8 flex-1 rounded-t bg-primary/15" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
