"use client";

import { useTranslations } from "next-intl";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Printer, BarChart3, LayoutDashboard, Check } from "lucide-react";

const TABS = [
  { key: "printing", icon: Printer },
  { key: "tracking", icon: BarChart3 },
  { key: "dashboard", icon: LayoutDashboard },
] as const;

export function FeaturesTabs() {
  const t = useTranslations("home.featuresTabs");

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {t("heading")}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            {t("subheading")}
          </p>
        </div>
        <div className="mt-12">
          <Tabs defaultValue="printing">
            <div className="flex justify-center">
              <TabsList variant="line" className="h-auto gap-2">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <TabsTrigger
                      key={tab.key}
                      value={tab.key}
                      className="h-10 px-4 text-base"
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {t(tab.key)}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>
            {TABS.map((tab) => (
              <TabsContent key={tab.key} value={tab.key} className="mt-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
                  <div>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {t(`${tab.key}Description`)}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {t(`${tab.key}Features`)
                        .split(",")
                        .map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-sm text-foreground"
                          >
                            <Check className="h-4 w-4 shrink-0 text-primary" />
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>
                  {/* Placeholder for product screenshot */}
                  <div className="mt-8 lg:mt-0">
                    <div className="aspect-video overflow-hidden rounded-xl border border-border bg-background shadow-sm">
                      <div className="flex h-full items-center justify-center">
                        <div className="text-center">
                          {(() => {
                            const Icon = tab.icon;
                            return <Icon className="mx-auto h-12 w-12 text-primary/30" />;
                          })()}
                          <p className="mt-2 text-sm text-muted-foreground">
                            {t(tab.key)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
