import React from 'react'
import { FormattedMessage } from 'react-intl'
import Button from '../Button'
import { ActionsWrapper } from './styles'

const NavigationActions = () => {
  return (
    <ActionsWrapper>
      <Button secondary>
        <FormattedMessage id="header.action.signin" />
      </Button>
      <Button primary>
        <FormattedMessage id="header.action.trial" />
      </Button>
    </ActionsWrapper>
  )
}

export default NavigationActions
