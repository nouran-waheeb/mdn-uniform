import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { siteSettings } from "@/config/site-settings";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: siteSettings.seo.defaultTitle,
    template: siteSettings.seo.titleTemplate,
  },
  description: siteSettings.seo.defaultDescription,
  keywords: [...siteSettings.seo.keywords],
  openGraph: {
    title: siteSettings.seo.defaultTitle,
    description: siteSettings.seo.defaultDescription,
    type: "website",
    locale: "en_EG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
