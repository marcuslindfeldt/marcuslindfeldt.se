import React from 'react'
import styled, { keyframes, createGlobalStyle } from 'styled-components'
import { withNamespaces } from 'react-i18next'

import Layout from '../components/layout'
import SEO from '../components/seo'

import portraitSrc from '../images/portrait.jpg'

const slideUp = keyframes`
  from {
    transform: translateY(120px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const BackgroundColor = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.darkMode ? '#262626' : '#fff')};
  }
`

const AboutMeText = styled.p`
  position: relative;
  font-family: Source Sans Pro, sans-serif;
  font-size: 18px;
  line-height: 25px;
  margin: 0;
  max-width: 450px;
  margin-right: 30px;
  padding-top: 50px;
  opacity: 0;
  font-weight: 300;

  color: ${props => (props.theme.darkMode ? '#fff' : '#333')};

  animation: ${slideUp} 150ms ease-out 200ms;
  animation-fill-mode: forwards;

  :before {
    content: '';
    position: absolute;
    height: 3px;
    width: 90px;
    background: ${props => (props.theme.darkMode ? '#fff' : '#333')};
    top: 0;
    left: 0;
  }
`

const Wrap = styled.main`
  display: flex;
  grid-column: 3 / last;
  grid-row: 3 / last;
  padding: 20px;
  padding-left: 0;
  overflow: hidden;
`

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const Portrait = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  animation: ${slideIn} 250ms ease-out;
  transform-origin: right;
`

const AboutPage = ({ t }) => (
  <Layout navBackground>
    <BackgroundColor />
    <SEO title={t('about.pageTitle')} />
    <Wrap>
      <AboutMeText>{t('about.aboutMeText')}</AboutMeText>
      <Portrait src={portraitSrc} alt={t('about.portraitAlt')} />
    </Wrap>
  </Layout>
)

export default withNamespaces()(AboutPage)
