"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

const TESTIMONIALS = ["t1", "t2", "t3", "t4", "t5", "t6"] as const;

function StarRating() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const t = useTranslations("home.testimonials");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-center text-3xl font-bold tracking-tight text-foreground transition-all duration-700 ease-out motion-reduce:transition-none ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {t("heading")}
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((key, index) => (
            <article
              key={key}
              style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
              className={`group flex flex-col rounded-xl bg-card p-8 shadow-sm transition-[opacity,transform,box-shadow] duration-700 ease-out will-change-transform hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none ${
                visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <StarRating />
              <blockquote className="mt-4 flex-1 italic leading-relaxed text-muted-foreground">
                {t(`${key}Quote`)}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none">
                  {t(`${key}Name`).charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {t(`${key}Name`)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t(`${key}Role`)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
