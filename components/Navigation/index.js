import React from 'react'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'

const Navigation = () => {
  return (
    <div>
      <Link passHref href="/">
        <a>
          <FormattedMessage id="header.navigation.product" />
        </a>
      </Link>
      <Link passHref href="/pricing">
        <a>
          <FormattedMessage id="header.navigation.pricing" />
        </a>
      </Link>
    </div>
  )
}

export default Navigation
