import styled from 'styled-components'

export const Title = styled.h1`
  font-family: Work Sans, sans-serif;
  font-size: 64px;
  line-height: 1;
  font-weight: 700;
  color: ${props => (props.theme.darkMode ? '#fff' : '#333')};
  margin: 0;
`

export const Paragraph = styled.p`
  font-family: Source Sans Pro, sans-serif;
  font-size: 18px;
  line-height: 25px;
  margin-top: 10px;
  font-weight: 300;

  color: ${props => (props.theme.darkMode ? '#fff' : '#333')};
`
