import React from 'react'
import { FormattedMessage } from 'react-intl'
import Button from '../Button'
import { ActionsWrapper } from './styles'

const NavigationActions = () => {
  return (
    <ActionsWrapper>
      <Button asLink secondary href="https://app.zola.ink/login">
        <FormattedMessage id="header.action.signin" />
      </Button>

      <Button asLink primary href="https://app.zola.ink/register">
        <FormattedMessage id="header.action.trial" />
      </Button>
    </ActionsWrapper>
  )
}

export default NavigationActions
