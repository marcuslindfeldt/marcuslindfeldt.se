import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Subscribe } from 'unstated'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'

import Header from './header'
import Nav from './nav'
import I18n from './i18n'
import ThemeContainer from '../state/theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${props => (props.theme.darkMode ? '#262626' : '#fff')};
  }
`

const LayoutGrid = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 50px auto 1fr auto;
  grid-template-columns: 50px 1fr minmax(200px, 750px) 1fr 50px;
  grid-template-areas:
    '. . . . .'
    '. header header header .'
    '. . body . .'
    '. . nav . .';
`

export const CenterLayout = styled.div`
  grid-area: body;
  align-self: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`

class Layout extends Component {
  componentDidMount() {
    global.window.scrollTo(0, 0)
  }

  render() {
    const { children, navBackground, ...rest } = this.props
    return (
      <Subscribe to={[ThemeContainer]}>
        {theme => (
          <I18n>
            <ThemeProvider theme={theme.state}>
              <>
                <Normalize />
                <GlobalStyle />
                <LayoutGrid {...rest}>
                  <Header />
                  <Nav background={navBackground} />
                  {children}
                </LayoutGrid>
              </>
            </ThemeProvider>
          </I18n>
        )}
      </Subscribe>
    )
  }
}

Layout.defaultProps = {
  navBackground: false,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  navBackground: PropTypes.bool,
}

export default Layout
