import React from 'react'
import { FormattedMessage } from 'react-intl'
import Layout, { CenterLayout } from '../components/layout'
import SEO from '../components/seo'
import { Title, Paragraph } from '../components/typography'

const NotFound = () => (
  <Layout>
    <FormattedMessage id="404.pageTitle">
      {txt => <SEO title={txt} />}
    </FormattedMessage>
    <CenterLayout>
      <Title>
        <FormattedMessage id="404.title" />
      </Title>

      <Paragraph>
        <FormattedMessage id="404.text" />
      </Paragraph>
    </CenterLayout>
  </Layout>
)

export default NotFound
