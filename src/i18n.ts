import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import bn from './locales/bn/translation.json';

const storedLanguage = typeof window !== 'undefined' ? localStorage.getItem('lng') : null;

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      bn: { translation: bn },
    },
    lng: storedLanguage || 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'bn'],
    interpolation: { escapeValue: false },
    returnObjects: true,
  })
  .catch(() => {
    // no-op
  });

export default i18next;


