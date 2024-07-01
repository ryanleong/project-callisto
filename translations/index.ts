interface Translations {
  [key: string]: any;
}

const translations: Translations = {
  en: () => import('./en.json').then((module) => module.default),
};

export const getTranslations = async (locale: string) => translations[locale]();
