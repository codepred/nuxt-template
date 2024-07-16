import en from '../assets/lang/en.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locales: ['en'],
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    messages: {
      en: en
    }
  }))