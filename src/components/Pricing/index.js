// @flow
import React, { Fragment } from 'react'
import { withRouter, type Match, type History } from 'react-router-dom'
import { LanguageContext } from '../../state'
import { DEFAULT_LOCALE } from '../../constants/translations'
import isEnabledLocale from '../../helpers/isEnabledLocale'
import Header from '../Header'
import PricingHero from '../PricingHero'
import PricingGrid from '../PricingGrid'
import PricingWantMore from '../PricingWantMore'
import InterestedSection from '../InterestedSection'
import Footer from '../Footer'

type Props = {
  switchLanguage: any,
  locale: string,
  match: Match,
  history: History,
  enabledLocales: Array<any>
}

class Pricing extends React.Component<Props> {
  constructor(props) {
    super(props)

    const { locale, match, history } = this.props

    // If the user tries to access the pricing page with a locale that isn’t
    // supported, redirect them so that they see the page in the default language.
    if (this.shouldRedirect()) {
      return history.replace(`/${DEFAULT_LOCALE}/pricing`)
    }

    // Redirect the user to the correct page in case their browser’s locale
    // doesn’t match the locale of the page they’re trying to access.
    if (locale && match.params.locale !== locale) {
      history.replace(`/${locale}/pricing`)
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
        <PricingHero />
        <PricingGrid />
        <PricingWantMore />
        <InterestedSection />
        <Footer />
      </Fragment>
    )
  }
}

export default withRouter(props => (
  <LanguageContext.Consumer>
    {languageContext => <Pricing {...props} {...languageContext} />}
  </LanguageContext.Consumer>
))
