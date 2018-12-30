import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { injectIntl } from 'react-intl'

import InvertIcon from './inverticon'

const ActionBarContainer = styled.div`
  display: flex;
`

const ActionButton = styled.button`
  background: transparent;
  border: 0;

  font-family: Work Sans, sans-serif;
  font-size: 14px;
  cursor: pointer;

  color: ${props => (props.theme.darkMode ? '#fff' : '#333')};

  width: 48px;
  height: 48px;
  margin: 0;
  padding: 0;

  :hover,
  :focus {
    background-color: ${props =>
      props.theme.darkMode ? 'rgba(255,255,255, 0.05)' : 'rgba(0,0,0, 0.05)'};
    outline: 0;
  }
`

const ActionBar = ({ invertTheme, locale, toggleLocale, intl }) => (
  <ActionBarContainer className="actionbar">
    <ActionButton
      aria-label={intl.formatMessage({ id: 'languageSwitcher' })}
      onClick={toggleLocale}
    >
      {locale}
    </ActionButton>
    <ActionButton
      onClick={invertTheme}
      aria-label={intl.formatMessage({ id: 'invertTheme' })}
    >
      <InvertIcon />
    </ActionButton>
  </ActionBarContainer>
)

ActionBar.propTypes = {
  invertTheme: PropTypes.func.isRequired,
}

export default injectIntl(ActionBar)
