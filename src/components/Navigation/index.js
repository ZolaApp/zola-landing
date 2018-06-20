import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import NavigationActions from '../NavigationActions'
import { NavWrapper, Links } from './styles'

const Navigation = () => {
  return (
    <NavWrapper>
      <Links>
        <Link to="/">
          <FormattedMessage id="header.navigation.product" />
        </Link>
        <Link to="/pricing">
          <FormattedMessage id="header.navigation.pricing" />
        </Link>
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

export default Navigation
