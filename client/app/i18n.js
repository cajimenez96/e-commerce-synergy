import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationES from './locales/es/common.json';
import translationEN from './locales/en/common.json';

const resources = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    lng: 'es',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

// Dynamically load container-level namespaces
function loadContainerTranslations() {
  // Spanish files
  const contextEs = require.context('./containers', true, /locales\/es\/.*\.json$/);
  contextEs.keys().forEach((key) => {
    const parts = key.replace('./', '').split('/');
    const namespace = parts[0]; // container folder name
    const json = contextEs(key);
    if (!resources.es) resources.es = {};
    resources.es[namespace] = { ...(resources.es[namespace] || {}), ...json };
  });

  // English files
  const contextEn = require.context('./containers', true, /locales\/en\/.*\.json$/);
  contextEn.keys().forEach((key) => {
    const parts = key.replace('./', '').split('/');
    const namespace = parts[0];
    const json = contextEn(key);
    if (!resources.en) resources.en = {};
    resources.en[namespace] = { ...(resources.en[namespace] || {}), ...json };
  });
}

loadContainerTranslations();

export default i18n; 