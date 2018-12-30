import { Container } from 'unstated'

class ThemeContainer extends Container {
  state = {
    darkMode: false,
  }

  invertTheme = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
    }))
  }
}

export default ThemeContainer
