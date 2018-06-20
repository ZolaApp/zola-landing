// @flow
import React, { Fragment } from 'react'
import { withRouter, type Match, type History } from 'react-router-dom'
import { injectIntl } from 'react-intl'
import { LanguageContext } from '../../state'
import { DEFAULT_LOCALE } from '../../constants/translations'
import isEnabledLocale from '../../helpers/isEnabledLocale'
import Header from '../Header'
import Hero from '../Hero'
import GettingStarted from '../GettingStarted'
import BusinessValues from '../BusinessValues'
import DeveloperSection from '../DeveloperSection'
import ManagerSection from '../ManagerSection'

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
    if (this.shouldRedirect()) {
      return history.replace('/' + DEFAULT_LOCALE)
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

  shouldRedirect() {
    const routerLocale = this.props.match.params.locale

    return (
      routerLocale && !isEnabledLocale(this.props.enabledLocales, routerLocale)
    )
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <GettingStarted />
        <BusinessValues />
        <DeveloperSection />
        <ManagerSection />
      </Fragment>
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
