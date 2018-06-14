import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const Navigation = () => {
  return (
    <div>
      <Link to="/">
        <FormattedMessage id="header.navigation.product" />
      </Link>
      <Link to="/pricing">
        <FormattedMessage id="header.navigation.pricing" />
      </Link>
    </div>
  )
}

export default Navigation
