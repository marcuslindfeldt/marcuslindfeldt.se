import React, { Component } from 'react'
import { navigate } from 'gatsby'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import styled from 'styled-components'
import { injectIntl } from 'react-intl'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 250px;
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

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => navigate('/thanks'))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message } = this.state
    const { intl } = this.props

    return (
      <Form
        name="contact"
        onSubmit={this.handleSubmit}
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="form-name"
          value="contact"
          aria-hidden="true"
        />
        <input type="hidden" name="bot-field" aria-hidden="true" />
        <FormInput
          type="text"
          name="name"
          required
          aria-label={intl.formatMessage({ id: 'contact.formName' })}
          placeholder={intl.formatMessage({ id: 'contact.formName' })}
          value={name}
          onChange={this.handleChange}
        />
        <FormInput
          type="email"
          name="email"
          required
          aria-label={intl.formatMessage({ id: 'contact.formEmail' })}
          placeholder={intl.formatMessage({ id: 'contact.formEmail' })}
          value={email}
          onChange={this.handleChange}
        />
        <FormInput
          as="textarea"
          name="message"
          required
          cols="30"
          rows="10"
          aria-label={intl.formatMessage({ id: 'contact.formBodyLabel' })}
          placeholder={intl.formatMessage({
            id: 'contact.formBodyPlaceholder',
          })}
          value={message}
          onChange={this.handleChange}
        />
        <SubmitButton type="submit">
          {intl.formatMessage({ id: 'contact.formSubmit' })}{' '}
          <ArrowForwardIcon style={{ fontSize: '20px' }} />
        </SubmitButton>
      </Form>
    )
  }
}

export default injectIntl(ContactForm)
