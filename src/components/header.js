import React from 'react'
import { Link } from 'gatsby'
import styled, { withTheme } from 'styled-components'

import ActionBar from './actionbar'

import logoBlack from '../images/logo-black.svg'
import logoWhite from '../images/logo-white.svg'

const Header = styled.header`
  width: 100%;
  display: flex;
  padding-bottom: 0;
  justify-content: space-between;
  grid-area: header;
  margin-bottom: 20px;
`

const LogoLink = styled(Link)`
  :focus {
    outline: 0;
  }
`
export default withTheme(({ theme }) => (
  <Header>
    <LogoLink to="/" tabIndex="-1">
      <img
        src={theme.darkMode ? logoWhite : logoBlack}
        alt="Logo"
        width="64"
        height="64"
      />
    </LogoLink>
    <ActionBar />
  </Header>
))
