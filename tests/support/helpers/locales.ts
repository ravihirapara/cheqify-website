/** Supported locales for the Cheqify.app marketing website */
export const LOCALES = ["en", "hi", "gu"] as const;
export type Locale = (typeof LOCALES)[number];

/** All static pages available on the site */
export const PAGES = [
  "",
  "/features",
  "/pricing",
  "/blog",
  "/contact",
  "/about",
  "/privacy",
] as const;

/** Generate all locale+page route combinations */
export function allRoutes(): string[] {
  return LOCALES.flatMap((locale) =>
    PAGES.map((page) => `/${locale}${page}`)
  );
}
