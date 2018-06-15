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
        <Link to="/doc">
          <FormattedMessage id="header.navigation.documentation" />
        </Link>
      </Links>
      <NavigationActions />
    </NavWrapper>
  )
}

export default Navigation
