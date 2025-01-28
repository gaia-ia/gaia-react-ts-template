import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translation/en/translation.json';
import translationES from './translation/es/translation.json';
import translationPT from './translation/pt/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
    pt: {
      translation: translationPT,
    },
  },
  lng: localStorage.getItem('i18nextLng') || 'en',
  fallbackLng: localStorage.getItem('i18nextLng') || 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
