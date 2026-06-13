import zh from '../i18n/zh.json';
import en from '../i18n/en.json';

const translations = { zh, en };

export type Locale = 'zh' | 'en';

export function useTranslation(locale: Locale) {
  return translations[locale];
}

export function getAlternateUrls(currentPath: string, currentLocale: Locale) {
  const otherLocale = currentLocale === 'zh' ? 'en' : 'zh';
  const alternatePath = currentPath.replace(`/${currentLocale}/`, `/${otherLocale}/`);
  return { locale: otherLocale, path: alternatePath };
}
