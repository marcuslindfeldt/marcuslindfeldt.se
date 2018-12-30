import React from 'react'
import { FormattedMessage } from 'react-intl'
import Layout, { CenterLayout } from '../components/layout'
import SEO from '../components/seo'
import { Title, Paragraph } from '../components/typography'

const Thanks = () => (
  <Layout>
    <FormattedMessage id="thanks.pageTitle">
      {txt => <SEO title={txt} />}
    </FormattedMessage>
    <CenterLayout>
      <Title>
        <FormattedMessage id="thanks.title" />
      </Title>

      <Paragraph>
        <FormattedMessage id="thanks.text" />
      </Paragraph>
    </CenterLayout>
  </Layout>
)

export default Thanks
