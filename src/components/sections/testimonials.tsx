"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

const TESTIMONIALS = ["t1", "t2", "t3", "t4", "t5", "t6"] as const;
const AUTO_SCROLL_PX_PER_SEC = 40;
const RESUME_AFTER_IDLE_MS = 1200;

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
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const dragRef = useRef<{ startX: number; startScroll: number } | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    let last = performance.now();

    function step(now: number) {
      const dt = (now - last) / 1000;
      last = now;
      if (el && !pausedRef.current) {
        el.scrollLeft += AUTO_SCROLL_PX_PER_SEC * dt;
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }
      rafId = requestAnimationFrame(step);
    }
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  function pauseAutoScroll() {
    pausedRef.current = true;
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }

  function scheduleResume() {
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
      resumeTimerRef.current = null;
    }, RESUME_AFTER_IDLE_MS);
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = scrollRef.current;
    if (!el) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pauseAutoScroll();
    dragRef.current = { startX: e.clientX, startScroll: el.scrollLeft };
    setIsDragging(true);
    el.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const el = scrollRef.current;
    if (!drag || !el) return;
    const dx = e.clientX - drag.startX;
    el.scrollLeft = drag.startScroll - dx;
  }

  function endDrag(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragRef.current) return;
    dragRef.current = null;
    setIsDragging(false);
    const el = scrollRef.current;
    if (el && el.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
    }
    scheduleResume();
  }

  function onMouseEnter() {
    pauseAutoScroll();
  }

  function onMouseLeave() {
    if (!dragRef.current) scheduleResume();
  }

  function onWheel() {
    pauseAutoScroll();
    scheduleResume();
  }

  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
          {t("heading")}
        </h2>
        <div
          ref={scrollRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onWheel={onWheel}
          className={`mt-12 flex gap-6 overflow-x-auto overscroll-x-contain py-4 md:gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
        >
          {loop.map((key, idx) => (
            <article
              key={`${key}-${idx}`}
              className="group flex w-[85vw] max-w-[360px] shrink-0 flex-col rounded-xl bg-card p-8 shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none sm:w-[340px] md:w-[380px] lg:w-[400px]"
            >
              <StarRating />
              <blockquote className="pointer-events-none mt-4 flex-1 italic leading-relaxed text-muted-foreground">
                {t(`${key}Quote`)}
              </blockquote>
              <div className="pointer-events-none mt-6 flex items-center gap-3 border-t border-border pt-4">
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
