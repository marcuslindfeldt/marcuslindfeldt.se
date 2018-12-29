import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { withNamespaces, Trans } from 'react-i18next'
import styled, { keyframes } from 'styled-components'

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

const ContactInfoText = styled.p`
  position: relative;
  font-family: Source Sans Pro, sans-serif;
  font-size: 18px;
  line-height: 25px;
  margin: 0;
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

const ContactInfoTitle = styled.h1`
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

  margin-bottom: 20px;
`

const ContactLayout = styled.main`
  grid-area: body;
  align-self: center;
  display: flex;
`

const ContactInfo = styled.div`
  flex: 3;
  margin-right: 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 2;
`

const FormInput = styled.input`
  border: 0;
  padding: 10px;
  font-family: Source Sans Pro, sans-serif;
  margin-bottom: 20px;
  resize: none;
  width: 100%;
  display: block;

  :focus {
    outline: 4px solid
      ${props =>
        props.theme.darkMode
          ? 'rgba(255, 255, 255, 0.3)'
          : 'rgba(0, 0, 0, 0.05)'};
    outline-offset: 0;
  }
`

const SubmitButton = styled.button`
  background: #333;
  outline: 0;
  border: 0;
  color: #fff;
  font-family: 'Work Sans', sans-serif;
  text-transform: uppercase;
  line-height: 1.25;
  padding: 10px;
  min-width: 120px;
  align-self: flex-end;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover,
  :focus {
    background: #000;
  }
`

const MailtoLink = styled.a`
  color: currentColor;
  font-weight: 700;

  :focus,
  :hover {
    color: ${props => (props.theme.darkMode ? '#fff' : '#000')};
  }

  :focus {
    outline: 0;
    background: ${props =>
      props.theme.darkMode
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.05)'};
    outline: 2px solid
      ${props =>
        props.theme.darkMode
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(0, 0, 0, 0.05)'};
  }
`

const ContactPage = ({ t }) => (
  <Layout>
    <SEO title={t('contact.pageTitle')} />
    <Background />
    <ContactLayout>
      <ContactInfo>
        <ContactInfoTitle>{t('contact.title')}</ContactInfoTitle>
        <ContactInfoText>
          <Trans i18nKey="contact.info">
            If you need a web developer I'm available for hire! Send me a
            message and I'll get back to you as soon as possible. 
            <br />
            <br />
            Don't like forms? Send me an{' '}
            <MailtoLink href="mailto:marcus.lindfeldt@gmail.com">
              email
            </MailtoLink>{' '}
            instead.
          </Trans>
        </ContactInfoText>
      </ContactInfo>
      <Form name="contact" method="POST" data-netlify="true">
        <FormInput
          type="text"
          name="name"
          aria-label={t('contact.formName')}
          placeholder={t('contact.formName')}
        />
        <FormInput
          type="email"
          name="email"
          aria-label={t('contact.formEmail')}
          placeholder={t('contact.formEmail')}
        />
        <FormInput
          as="textarea"
          name="message"
          cols="30"
          rows="10"
          aria-label={t('contact.formBodyLabel')}
          placeholder={t('contact.formBodyPlaceholder')}
        />
        <SubmitButton type="submit">
          {t('contact.formSubmit')}{' '}
          <ArrowForwardIcon style={{ fontSize: '20px' }} />
        </SubmitButton>
      </Form>
    </ContactLayout>
  </Layout>
)

export default withNamespaces()(ContactPage)
