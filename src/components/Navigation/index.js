// @flow
import React from 'react'
import { withRouter, NavLink, type Match } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import NavigationActions from '../NavigationActions'
import { NavWrapper, Links } from './styles'

type Props = {
  match: Match
}

const Navigation = (props: Props) => {
  const currentLocale = props.match.params.locale

  return (
    <NavWrapper>
      <Links>
        <NavLink to={'/' + currentLocale} activeClassName="active">
          <FormattedMessage id="header.navigation.product" />
        </NavLink>

        <NavLink to={`/${currentLocale}/pricing`} activeClassName="active">
          <FormattedMessage id="header.navigation.pricing" />
        </NavLink>

        <a
          href="https://github.com/ZolaApp"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FormattedMessage id="header.navigation.documentation" />
        </a>
      </Links>
      <NavigationActions />
    </NavWrapper>
  )
}

export default withRouter(Navigation)
