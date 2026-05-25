import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Spotlight } from "@/components/sections/spotlight";
import { Howto } from "@/components/sections/howto";
import { Benefits } from "@/components/sections/benefits";
import { Showcase } from "@/components/sections/showcase";
import { Value } from "@/components/sections/value";
import { TabsShowcase } from "@/components/sections/tabs-showcase";
import { B2B } from "@/components/sections/b2b";
import { Audience } from "@/components/sections/audience";
import { Transform } from "@/components/sections/transform";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { SeoText } from "@/components/sections/seo-text";
import { Footer } from "@/components/sections/footer";
import { serializeJsonLd } from "@/lib/json-ld";
import { FAQ_ITEMS } from "@/lib/landing-content";
import { absoluteUrl, pageTitle, siteSeoConfig } from "@/lib/seo-config";

const homepageTitle = pageTitle(siteSeoConfig.defaultTitle);
const homepageDescription = siteSeoConfig.defaultDescription;

export const metadata: Metadata = {
  title: {
    absolute: homepageTitle,
  },
  description: homepageDescription,
  applicationName: siteSeoConfig.siteName,
  authors: [{ name: siteSeoConfig.organization.name, url: siteSeoConfig.productionUrl }],
  creator: siteSeoConfig.organization.name,
  publisher: siteSeoConfig.organization.legalName,
  keywords: siteSeoConfig.keywords,
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: siteSeoConfig.siteName,
    locale: siteSeoConfig.ogLocale,
    title: siteSeoConfig.defaultTitle,
    description: homepageDescription,
    url: siteSeoConfig.productionUrl,
    images: [
      {
        url: absoluteUrl(siteSeoConfig.socialImagePath),
        width: 1200,
        height: 630,
        alt: "Нейросеть для презентаций presentsimple — создать презентацию с ИИ",
      },
      {
        url: absoluteUrl(siteSeoConfig.socialSquareImagePath),
        width: 1200,
        height: 1200,
        alt: "presentsimple — нейросеть для презентаций",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeoConfig.defaultTitle,
    description: homepageDescription,
    images: [absoluteUrl(siteSeoConfig.socialImagePath)],
  },
};

export default function HomePage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteSeoConfig.organization.name,
    legalName: siteSeoConfig.organization.legalName,
    url: siteSeoConfig.productionUrl,
    email: siteSeoConfig.organization.email,
    founder: siteSeoConfig.organization.founder,
    sameAs: siteSeoConfig.organization.sameAs,
    logo: absoluteUrl("/logo.svg"),
    taxID: siteSeoConfig.organization.taxId,
    identifier: siteSeoConfig.organization.registrationNumber,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteSeoConfig.siteName,
    alternateName: "Нейросеть для презентаций presentsimple",
    url: siteSeoConfig.productionUrl,
    inLanguage: siteSeoConfig.locale,
    publisher: {
      "@type": "Organization",
      name: siteSeoConfig.organization.legalName,
      url: siteSeoConfig.productionUrl,
    },
  };

  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteSeoConfig.siteName,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Нейросеть для создания презентаций",
    operatingSystem: "Web",
    url: siteSeoConfig.productionUrl,
    inLanguage: "ru",
    description: homepageDescription,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "RUB",
      lowPrice: "490",
      highPrice: "1690",
      offerCount: "3",
      url: `${siteSeoConfig.productionUrl}/#pricing`,
      description:
        "Тарифы: Старт — 490 ₽, Профи — 990 ₽, Бизнес — 1690 ₽ в месяц. Бесплатный старт — 10 слайдов при регистрации.",
    },
    softwareVersion: "3",
    screenshot: absoluteUrl(siteSeoConfig.socialImagePath),
    featureList: [
      "Генерация презентации по тексту или теме",
      "Загрузка материалов: PPTX, PDF, Word",
      "Экспорт в редактируемый PowerPoint (PPTX) и PDF",
      "Более 100 языков, включая русский",
      "Презентации в фирменном стиле компании",
    ],
    publisher: {
      "@type": "Organization",
      name: siteSeoConfig.organization.legalName,
      url: siteSeoConfig.productionUrl,
      logo: absoluteUrl("/logo.svg"),
      sameAs: siteSeoConfig.organization.sameAs,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json">{serializeJsonLd(organizationJsonLd)}</script>
      <script type="application/ld+json">{serializeJsonLd(websiteJsonLd)}</script>
      <script type="application/ld+json">{serializeJsonLd(softwareApplicationJsonLd)}</script>
      <script type="application/ld+json">{serializeJsonLd(faqJsonLd)}</script>
      <main id="main-content">
        <Hero />
        <Spotlight />
        <Showcase />
        <Howto />
        <Transform />
        <Value />
        <TabsShowcase />
        <Benefits />
        <Audience />
        <B2B />
        <Testimonials />
        <Pricing />
        <FAQ />
        <SeoText />
      </main>
      <Footer />
    </>
  );
}
