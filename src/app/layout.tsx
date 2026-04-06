import type { Metadata } from "next";
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
  return children;
}
