import i18n from 'i18next'
import { reactI18nextModule } from 'react-i18next'
import translationEN from '../locales/en/translations.json'
import translationSV from '../locales/sv/translations.json'

const resources = {
  en: {
    translations: translationEN,
  },
  sv: {
    translations: translationSV,
  },
}

i18n.use(reactI18nextModule).init({
  resources,
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  debug: process.env.DEBUG || false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  react: {
    wait: true,
  },
})

export default i18n
