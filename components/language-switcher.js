import React, { Component } from 'react'
import { withNamespaces } from 'react-i18next'

const getLang = currentLang => (currentLang === 'sv' ? 'en' : 'sv')

class LanguageSwitcher extends Component {
  changeLang = e => {
    this.props.i18n.changeLanguage(e.currentTarget.getAttribute('data-lang'))
  }

  render() {
    const { i18n, className } = this.props

    const lang = getLang(i18n.language)

    return (
      <button onClick={this.changeLang} data-lang={lang} className={className}>
        {lang}
      </button>
    )
  }
}

export default withNamespaces()(LanguageSwitcher)
