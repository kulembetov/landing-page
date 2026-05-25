type OrganizationConfig = {
  name: string;
  legalName: string;
  email: string;
  founder: string;
  sameAs: string[];
  taxId?: string;
  registrationNumber?: string;
};

type SiteSeoConfig = {
  siteName: string;
  defaultTitle: string;
  titleTemplateSuffix: string;
  defaultDescription: string;
  productionUrl: string;
  appUrl: string;
  locale: string;
  ogLocale: string;
  socialImagePath: string;
  socialSquareImagePath: string;
  keywords: string[];
  organization: OrganizationConfig;
};

export const siteSeoConfig: SiteSeoConfig = {
  siteName: "presentsimple",
  defaultTitle: "Нейросеть для презентаций — создать ИИ-презентацию онлайн бесплатно",
  titleTemplateSuffix: "presentsimple",
  defaultDescription:
    "presentsimple — нейросеть для создания презентаций. Опишите тему или загрузите материалы, и ИИ-генератор соберёт структуру, текст и дизайн. Готовая презентация PowerPoint (PPTX) на русском за 3 минуты. Попробуйте бесплатно.",
  productionUrl: "https://presentsimple.ai",
  appUrl: "https://app.presentsimple.ai/login",
  locale: "ru-RU",
  ogLocale: "ru_RU",
  socialImagePath: "/og-default.png",
  socialSquareImagePath: "/og-square.png",
  keywords: [
    "нейросеть для презентаций",
    "ИИ презентация",
    "генератор презентаций",
    "создать презентацию онлайн",
    "презентация с помощью нейросети",
    "презентация PowerPoint",
    "PPTX",
    "сделать презентацию по тексту",
    "презентация бесплатно",
    "презентация на русском",
  ],
  organization: {
    name: "presentsimple",
    legalName: "ООО «Презент Симпл»",
    email: "support@presentsimple.ai",
    founder: "presentsimple",
    sameAs: ["https://t.me/presentsimpleai", "https://vk.com/presentsimpleai"],
    taxId: "1655496590",
    registrationNumber: "1231600036865",
  },
};

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteSeoConfig.productionUrl}${normalizedPath}`;
}

export function pageTitle(title: string): string {
  return `${title} | ${siteSeoConfig.titleTemplateSuffix}`;
}
