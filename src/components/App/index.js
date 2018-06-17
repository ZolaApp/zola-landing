// @flow
import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { LanguageContext } from '../../state'
import theme from '../../theme'
import Container from '../Container'
import Router from '../Router'
import { DEFAULT_LOCALE } from '../../constants/translations'
import isEnabledLocale from '../../helpers/isEnabledLocale'
import fetchTranslations from '../../helpers/fetchTranslations'

type Props = {
  locale: string,
  translations: any,
  enabledLocales: Array<string>
}

type State = {
  locale: string,
  translations: any
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      locale: props.locale,
      translations: props.translations
    }
  }

  switchLanguage = async (locale: string = DEFAULT_LOCALE) => {
    if (
      this.state.locale !== locale &&
      isEnabledLocale(this.props.enabledLocales, locale)
    ) {
      const translations = await fetchTranslations(locale)

      this.setState({ locale, translations })
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider
          value={{
            enabledLocales: this.props.enabledLocales,
            locale: this.state.locale,
            switchLanguage: this.switchLanguage
          }}
        >
          <BrowserRouter>
            <Router>
              {Routes => (
                <IntlProvider
                  locale={this.state.locale}
                  messages={this.state.translations}
                >
                  {Routes}
                </IntlProvider>
              )}
            </Router>
          </BrowserRouter>
        </LanguageContext.Provider>
      </ThemeProvider>
    )
  }
}

export default App
