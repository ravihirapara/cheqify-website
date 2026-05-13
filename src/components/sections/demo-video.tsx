"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const VIDEO_ID = "DiihuB-hEiY";

export function DemoVideo() {
  const t = useTranslations("home.demoVideo");
  const [activated, setActivated] = useState(false);

  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {t("heading")}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            {t("subheading")}
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border shadow-lg">
              {activated ? (
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&playsinline=1`}
                  title={t("playButton")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setActivated(true)}
                  aria-label={t("playButton")}
                  className="group absolute inset-0 h-full w-full cursor-pointer"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                    alt={t("thumbnailAlt")}
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 via-black/10 to-black/20 transition-colors group-hover:from-black/55"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-transform group-hover:scale-110 md:h-20 md:w-20">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-1 h-8 w-8 text-primary md:h-10 md:w-10"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
