"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const STATS = [
  { valueKey: "chequesPrinted", labelKey: "chequesPrintedLabel" },
  { valueKey: "activeUsers", labelKey: "activeUsersLabel" },
  { valueKey: "banksSupported", labelKey: "banksSupportedLabel" },
] as const;

const DURATION_MS = 1800;

function parseStat(raw: string) {
  const match = raw.match(/^([\d,]+)(.*)$/);
  if (!match) return { target: 0, suffix: raw };
  const target = parseInt(match[1].replace(/,/g, ""), 10);
  return { target: Number.isNaN(target) ? 0 : target, suffix: match[2] };
}

function formatNumber(value: number, locale: string) {
  return new Intl.NumberFormat(locale).format(Math.floor(value));
}

function AnimatedStat({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - t0) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);

  return (
    <>
      {formatNumber(value, "en-IN")}
      {suffix}
    </>
  );
}

export function StatsBar() {
  const t = useTranslations("home.stats");
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <section ref={ref} className="bg-primary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {STATS.map((stat) => {
            const { target, suffix } = parseStat(t(stat.valueKey));
            return (
              <div key={stat.valueKey}>
                <p className="text-5xl font-extrabold text-primary-foreground">
                  <AnimatedStat target={target} suffix={suffix} start={visible} />
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-primary-foreground/80">
                  {t(stat.labelKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
