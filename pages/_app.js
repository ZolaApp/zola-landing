import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'
import theme from '../theme'
import { LanguageContext } from '../state'
import fetchTranslations from '../helpers/fetchTranslations'
import fetchEnabledLocales from '../helpers/fetchEnabledLocales'
import isEnabledLocale from '../helpers/isEnabledLocale'

// Global styles
import '../style.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return <div className="layout">{children}</div>
  }
}

export default class MyApp extends App {
  constructor(props) {
    super(props)

    this.state = {
      locale: props.locale,
      translations: props.translations
    }
  }

  static async getInitialProps() {
    console.log('getInitialProps')
    const enabledLocales = await fetchEnabledLocales()
    // Slice the two first characters to retrieve the “short” locale from “long”
    // locales such as `en_EN`.
    const browserLocale =
      !!navigator.languages && navigator.languages[0].slice(0, 2)
    const defaultLocale =
      browserLocale && isEnabledLocale(enabledLocales, browserLocale)
        ? browserLocale
        : DEFAULT_LOCALE
    const translations = await fetchTranslations(defaultLocale)

    return { translations, locale: defaultLocale }
  }

  switchLanguage = async (locale = DEFAULT_LOCALE) => {
    if (
      this.state.locale !== locale &&
      isEnabledLocale(this.props.enabledLocales, locale)
    ) {
      const translations = await fetchTranslations(locale)
      console.log('translations', translations)

      this.setState({ locale, translations })
    }
  }

  render() {
    console.log('PROPS', this.props)
    console.log('STATE', this.state)
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <IntlProvider
            locale={this.state.locale}
            messages={this.state.translations}
          >
            <LanguageContext.Provider
              value={{
                enabledLocales: this.props.enabledLocales,
                locale: this.state.locale,
                switchLanguage: this.switchLanguage
              }}
            >
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </LanguageContext.Provider>
          </IntlProvider>
        </ThemeProvider>
      </Container>
    )
  }
}
