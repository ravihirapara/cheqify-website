import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";
import { ThemeProvider } from "~/components/layout/theme-provider";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";
import { TawkTo } from "~/components/layout/tawk-to";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "hi" | "gu")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <TawkTo enabled={false} />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
