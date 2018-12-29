import React from 'react'
import styled from 'styled-components'
import { withNamespaces } from 'react-i18next'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundLayout = styled.div`
  grid-area: body;
  align-self: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const NotFoundTitle = styled.h1`
  font-family: Work Sans, sans-serif;
  font-size: 64px;
  line-height: 1;
  font-weight: 700;
  color: ${props => (props.theme.darkMode ? '#fff' : '#333')};
  margin: 0;
`

const NotFoundText = styled.p`
  font-family: Source Sans Pro, sans-serif;
  font-size: 18px;
  line-height: 25px;
  margin-top: 10px;
  font-weight: 300;

  color: ${props => (props.theme.darkMode ? '#fff' : '#333')};
`

const NotFoundPage = ({ t }) => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundLayout>
      <NotFoundTitle>{t('pageNotFoundTitle')} :(</NotFoundTitle>
      <NotFoundText>{t('pageNotFoundText')}</NotFoundText>
    </NotFoundLayout>
  </Layout>
)

export default withNamespaces()(NotFoundPage)
