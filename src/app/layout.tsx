import type { Metadata } from "next";
import { ThemeProvider } from "~/components/layout/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cheqify.app",
  description: "Print Error-Free Cheques in Under 2 Minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
