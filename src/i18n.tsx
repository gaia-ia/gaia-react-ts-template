import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

//en
import commonEN from './translation/en/common.json';
import HomepageEN from './translation/en/Homepage.json';
//es
import commonES from './translation/es/common.json';
import HomepageES from './translation/es/Homepage.json';
// pt
import commonPT from './translation/pt/common.json';
import HomepagePT from './translation/pt/Homepage.json';

const resources = {
  en: {
    common: commonEN,
    Homepage: HomepageEN,
  },
  es: {
    common: commonES,
    Homepage: HomepageES,
  },
  pt: {
    common: commonPT,
    Homepage: HomepagePT,
  },
};

const options = {
  order: [
    'querystring',
    'hash',
    'cookie',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],

  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  lookupHash: 'lng',
  lookupFromHashIndex: 0,
};

// O <html lang> precisa acompanhar o idioma real da UI. Com o "en" fixo do
// index.html, o Chrome oferece traduzir uma página que já está em pt/es, e a
// tradução troca os text nodes que o React controla: no próximo unmount o
// React tenta remover um nó que não está mais lá e estoura
// "NotFoundError: Failed to execute 'removeChild' on 'Node'".
// Registrado antes do init para pegar também o idioma detectado na carga.
i18n.on('languageChanged', lng => {
  document.documentElement.lang = lng;
});

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources,
    ns: ['common'],
    defaultNS: 'common',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
