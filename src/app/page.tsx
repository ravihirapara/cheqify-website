import { redirect } from "next/navigation";
import { DEFAULT_LOCALE } from "~/i18n/routing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://cheqify.app/en",
  },
};

export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
