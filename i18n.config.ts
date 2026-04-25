export const locales = ['en', 'hi', 'es'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  hi: 'हिन्दी',
  es: 'Español',
};
