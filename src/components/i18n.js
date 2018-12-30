import React from 'react'
import PropTypes from 'prop-types'
import { Subscribe } from 'unstated'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import sv from 'react-intl/locale-data/sv'
import flatten from 'flat'
import LocaleContainer from '../state/locale'

import translationEN from '../locales/en/translations.json'
import translationSV from '../locales/sv/translations.json'

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

I18n.propTypes = {
  children: PropTypes.node.isRequired,
}

export default I18n
