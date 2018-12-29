import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import { withNamespaces } from 'react-i18next'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import Layout from '../components/layout'
import SEO from '../components/seo'

const slideLeft = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`

const Background = styled.div`
  grid-column: 1 / all;
  grid-row: 1 / all;
  background-color: #f2f2f2;
  z-index: -1;
  margin: 20px;
  background-color: ${props => (props.theme.darkMode ? '#262626' : '#f2f2f2')};
  animation: ${slideLeft} 200ms ease-out;
  transform-origin: left;
`

const Hero = styled.main`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: body;
`

const CenterLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const HeroTitle = styled.h1`
  font-family: Work Sans, sans-serif;
  font-size: 64px;
  line-height: 1;
  font-weight: 700;
  color: ${props => (props.theme.darkMode ? '#fff' : '#333')};
  margin: 0;

  will-change: opacity, transform;
  opacity: 0;
  animation: ${fadeInUp} 150ms ease-out 150ms;
  animation-fill-mode: forwards;
  transform-origin: bottom;
`

const SocialList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 5px;
  margin-left: 5px;

  will-change: opacity, transform;
  opacity: 0;
  animation: ${fadeInUp} 150ms ease-out 150ms;
  animation-fill-mode: forwards;
  transform-origin: bottom;
`

const SocialListItem = styled.li`
  display: inline;
  list-style-type: none;

  font-family: Source Sans Pro, sans-serif;
  color: ${props => (props.theme.darkMode ? '#fff' : '#333')};
  font-size: 18px;

  :after {
    content: ' / ';
  }

  &:first-child:before {
    content: '/ ';
  }
`

const SocialLink = styled.a`
  color: inherit;

  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
    outline: 0;
  }
`

const AboutLink = styled(Link)`
  margin-top: 30px;
  padding: 10px;
  margin-left: -5px;
  align-self: flex-start;

  :focus {
    outline: 0;
  }
`

const fadeInScale = keyframes`
  0% {
    opacity: 0;

  }
  100% {
    opacity: 1;
  }
`

const AboutLinkFadeInAnimation = styled.div`
  opacity: 0;
  animation: ${fadeInScale} 150ms ease-out 350ms;
  animation-fill-mode: both;
`

const bounce = keyframes`
  opacity: 0;
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
`

const AboutLinkIcon = styled(ArrowForwardIcon)`
  color: ${props => (props.theme.darkMode ? '#fff' : '#333')};

  ${AboutLink}:hover &,
  ${AboutLink}:visited &,
  ${AboutLink}:focus & {
    animation: ${bounce} 400ms ease-in-out infinite;
    color: ${props => (props.theme.darkMode ? '#fff' : '#000')};
  }
`

const IndexPage = ({ t }) => (
  <Layout>
    <SEO title={t('home.pageTitle')} />
    <Background />
    <Hero>
      <CenterLayout>
        <HeroTitle>Marcus Lindfeldt</HeroTitle>
        <SocialList>
          <SocialListItem>
            <SocialLink href="https://github.com/marcuslindfeldt">
              github
            </SocialLink>
          </SocialListItem>
          <SocialListItem>
            <SocialLink href="https://www.linkedin.com/in/marcuslindfeldt">
              linkedin
            </SocialLink>
          </SocialListItem>
          <SocialListItem>
            <SocialLink href="https://medium.com/@marcuslt">medium</SocialLink>
          </SocialListItem>
          <SocialListItem>
            <SocialLink href="https://twitter.com/marcuslindfeldt">
              twitter
            </SocialLink>
          </SocialListItem>
          <SocialListItem>
            <SocialLink href="https://www.flickr.com/photos/marcus-lindfeldt">
              flickr
            </SocialLink>
          </SocialListItem>
          <SocialListItem>
            <SocialLink href="mailto:marcus.lindfeldt@gmail.com">
              email
            </SocialLink>
          </SocialListItem>
        </SocialList>
        <AboutLink to="/about" aria-label={t('home.aboutLink')}>
          <AboutLinkFadeInAnimation>
            <AboutLinkIcon />
          </AboutLinkFadeInAnimation>
        </AboutLink>
      </CenterLayout>
    </Hero>
  </Layout>
)

export default withNamespaces()(IndexPage)
