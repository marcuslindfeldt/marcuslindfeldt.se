import React from 'react'
import { Subscribe } from 'unstated'
import { IntlProvider, addLocaleData } from 'react-intl'
import LocaleContainer from '../state/locale'

import en from 'react-intl/locale-data/en'
import sv from 'react-intl/locale-data/sv'

import translationEN from '../locales/en/translations.json'
import translationSV from '../locales/sv/translations.json'

import flatten from 'flat'

const messages = {
  en: translationEN,
  sv: translationSV,
}

addLocaleData([...en, ...sv])

const I18n = ({ children }) => (
  <Subscribe to={[LocaleContainer]}>
    {locale => (
      <IntlProvider
        locale={locale.state.locale}
        messages={flatten(messages[locale.state.locale])}
      >
        {children}
      </IntlProvider>
    )}
  </Subscribe>
)

export default I18n
