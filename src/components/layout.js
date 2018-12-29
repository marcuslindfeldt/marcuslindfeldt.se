import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import '../utils/i18n'

import { withNamespaces } from 'react-i18next'
import { Normalize } from 'styled-normalize'
import ActionBar from './actionbar'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import logoBlack from '../images/logo-black.svg'
import logoWhite from '../images/logo-white.svg'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${props => (props.theme.darkMode ? '#262626' : '#fff')};
  }
`

const LayoutGrid = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 50px auto 1fr auto;
  grid-template-columns: 50px 1fr minmax(200px, 750px) 1fr 50px;
  grid-template-areas:
    '. . . . .'
    '. header header header .'
    '. . body . .'
    '. . nav . .';
`

const Header = styled.header`
  width: 100%;
  display: flex;
  padding-bottom: 0;
  justify-content: space-between;
  grid-area: header;
`

const LogoLink = styled(Link)`
  :focus {
    outline: 0;
  }
`

const Nav = styled.nav`
  position: relative;
  z-index: 100;

  background-color: ${props => {
    if (!props.background) return 'transparent'

    return props.theme.darkMode
      ? 'rgba(38, 38, 38, 0.85)'
      : 'rgba(255, 255, 255, 0.85)'
  }};
  width: 100%;
  display: flex;
  justify-content: center;
  grid-area: nav;
`

const NavLink = styled(Link)`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 350px;
  min-height: 100px;
  border-top: 2px solid;
  border-top-color: ${props =>
    props.theme.darkMode ? 'rgba(255,255,255, 0.8)' : 'rgba(0,0,0, 0.8)'};

  padding-top: 20px;
  padding-left: 50px;

  font-family: Work Sans, sans-serif;
  font-size: 14px;
  font-weight: 500;

  text-decoration: none;
  color: ${props => (props.theme.darkMode ? '#fff' : '#333')};

  :before {
    content: '// ';
  }

  &[aria-current='page']:before {
    content: '// ';
  }

  :focus {
    outline: 0;
  }

  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: height 0.1s ease-in-out;

    background-color: ${props =>
      props.theme.darkMode ? 'rgba(255,255,255, 0.05)' : 'rgba(0,0,0, 0.05)'};
  }

  :hover:after,
  :focus:after {
    height: 100%;
  }
`

class Layout extends Component {
  state = {
    darkMode: false,
  }

  componentDidMount() {
    const darkMode = window.sessionStorage.getItem('darkMode') === 'true'

    if (darkMode) {
      this.setState({ darkMode })
    }
  }

  invertTheme = () => {
    this.setState(
      prevState => ({
        darkMode: !prevState.darkMode,
      }),
      () => {
        window.sessionStorage.setItem('darkMode', this.state.darkMode)
      }
    )
  }

  render() {
    const { t } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={this.state}>
            <>
              <Normalize />
              <GlobalStyle />
              <LayoutGrid>
                <Header>
                  <LogoLink to="/" tabIndex="-1">
                    <img
                      src={this.state.darkMode ? logoWhite : logoBlack}
                      alt="Logo"
                      width="64"
                      height="64"
                    />
                  </LogoLink>

                  <ActionBar invertTheme={this.invertTheme} />
                </Header>
                <Nav background={this.props.navBackground}>
                  <NavLink to="/">{t('nav.home')}</NavLink>
                  <NavLink to="/about/">{t('nav.about')}</NavLink>
                  <NavLink to="/contact/">{t('nav.contact')}</NavLink>
                </Nav>
                {this.props.children}
              </LayoutGrid>
            </>
          </ThemeProvider>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withNamespaces()(Layout)
