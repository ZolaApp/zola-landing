// @flow
import React from 'react'
import { withRouter, type Match, History } from 'react-router-dom'
import { injectIntl } from 'react-intl'
import { LanguageContext } from '../../state'
import isEnabledLocale from '../../helpers/isEnabledLocale'
import Header from '../Header'
import Hero from '../Hero'
import GettingStarted from '../GettingStarted'
import BusinessValues from '../BusinessValues'

type Props = {
  switchLanguage: any,
  locale: string,
  match: Match,
  history: History,
  enabledLocales: Array<any>
}

class Home extends React.Component<Props> {
  constructor(props) {
    super(props)

    const { locale, match, history } = this.props

    // If the user tries to access the homepage with a locale that isn’t
    // supported, redirect to the index page so that they see the page in the
    // default language.
    if (this.shouldRedirectToIndex()) {
      return history.replace('/')
    }

    // Redirect the user to the correct page in case their browser’s locale
    // doesn’t match the locale of the page they’re trying to access.
    if (locale && match.params.locale !== locale) {
      history.replace('/' + locale)
    }
  }

  componentDidUpdate() {
    // Switch the language on subsequent renders in case the locale in the URL
    // has changed.
    this.props.switchLanguage(this.props.match.params.locale)
  }

  shouldRedirectToIndex() {
    console.log('match.params.locale', this.props.match.params.locale)
    console.log('enabledLocales', this.props.enabledLocales)
    const routerLocale = this.props.match.params.locale

    return (
      routerLocale && !isEnabledLocale(this.props.enabledLocales, routerLocale)
    )
  }

  render() {
    return (
      <div>
        <Header />
        <Hero />
        <GettingStarted />
        <BusinessValues />
      </div>
    )
  }
}

export default withRouter(
  injectIntl(props => (
    <LanguageContext.Consumer>
      {languageContext => <Home {...props} {...languageContext} />}
    </LanguageContext.Consumer>
  ))
)
