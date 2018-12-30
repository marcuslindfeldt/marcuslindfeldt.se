import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { FormattedMessage } from 'react-intl'

const Navbar = styled.nav`
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

  margin-top: 20px;
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

  font-family: Work Sans, sans-serif;
  font-size: 14px;
  font-weight: 500;

  text-align: center;

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

  @media (min-width: 500px) {
    padding-left: 50px;
    text-align: left;
  }
`

const Nav = ({ navBackground }) => (
  <Navbar background={navBackground}>
    <NavLink to="/">
      <FormattedMessage id="nav.home" />
    </NavLink>
    <NavLink to="/about/">
      <FormattedMessage id="nav.about" />
    </NavLink>
    <NavLink to="/contact/">
      <FormattedMessage id="nav.contact" />
    </NavLink>
  </Navbar>
)

export default Nav
