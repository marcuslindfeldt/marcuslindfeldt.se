import { Container } from 'unstated'

class LocaleContainer extends Container {
  state = {
    locale: 'en',
  }

  toggleLocale = () => {
    this.setState(prevState => ({
      locale: prevState.locale === 'en' ? 'sv' : 'en',
    }))
  }
}

export default LocaleContainer
