import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://cheqify.app/en",
  },
};

// IMPORTANT: do NOT call redirect() here. The Netlify @netlify/plugin-nextjs
// converts server-side redirect() calls into _redirects entries that fire
// BEFORE the netlify.toml `[[redirects]]` rule with force=true. That re-introduces
// the GSC "Page with redirect" failure on cheqify.app/. We render an empty page
// so the plugin generates no auto-redirect, and Netlify's edge rewrite (status
// 200, force=true) silently serves /en content for `/` instead.
export default function RootPage() {
  return null;
}
