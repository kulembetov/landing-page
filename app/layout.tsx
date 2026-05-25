import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { YandexMetrika } from "@/components/analytics/yandex-metrika";
import { siteSeoConfig } from "@/lib/seo-config";
import { Nav } from "@/components/sections/nav";
import "./globals.css";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteSeoConfig.productionUrl),
  title: {
    default: siteSeoConfig.defaultTitle,
    template: `%s | ${siteSeoConfig.titleTemplateSuffix}`,
  },
  description: siteSeoConfig.defaultDescription,
  applicationName: siteSeoConfig.siteName,
  authors: [{ name: siteSeoConfig.organization.name, url: siteSeoConfig.productionUrl }],
  creator: siteSeoConfig.organization.name,
  publisher: siteSeoConfig.organization.legalName,
  keywords: siteSeoConfig.keywords,
  openGraph: {
    type: "website",
    locale: siteSeoConfig.ogLocale,
    siteName: siteSeoConfig.siteName,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru" data-theme="light" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <YandexMetrika />
        <Nav />
        <div className="page-wrap">{children}</div>
      </body>
    </html>
  );
}
