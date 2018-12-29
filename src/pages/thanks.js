import React from 'react'
import { withNamespaces } from 'react-i18next'
import Layout, { CenterLayout } from '../components/layout'
import SEO from '../components/seo'
import { Title, Paragraph } from '../components/typography'

const Thanks = ({ t }) => (
  <Layout>
    <SEO title={t('thanks.pageTitle')} />
    <CenterLayout>
      <Title>{t('thanks.title')}</Title>
      <Paragraph>{t('thanks.text')}</Paragraph>
    </CenterLayout>
  </Layout>
)

export default withNamespaces()(Thanks)
