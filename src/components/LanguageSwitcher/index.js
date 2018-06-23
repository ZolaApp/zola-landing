// @flow
import React from 'react'
import { withRouter, Link, type Match } from 'react-router-dom'
import { LinksWrapper } from './styles'

type Props = {
  match: Match
}

const getLanguageSwitcherLink = (props: Props, locale: string): string =>
  props.match.path.replace(':locale', locale)

const LanguageSwitcher = (props: Props) => {
  const activeLocale = props.match.params.locale

  return (
    <LinksWrapper>
      <Link
        to={getLanguageSwitcherLink(props, 'fr')}
        className={activeLocale === 'fr' ? 'active' : null}
      >
        FR
      </Link>

      <Link
        to={getLanguageSwitcherLink(props, 'en')}
        className={activeLocale === 'en' ? 'active' : null}
      >
        EN
      </Link>
    </LinksWrapper>
  )
}

export default withRouter(LanguageSwitcher)
