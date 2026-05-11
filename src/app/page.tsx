import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "~/i18n/routing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://cheqify.app/en",
  },
};

// Fallback only. In production Netlify rewrites `/` -> `/en` with status=200
// (force=true) before this handler runs, so the bare domain serves /en content
// without a redirect. If the Netlify rule is ever removed, this redirect keeps
// `/` from 404-ing.
export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
