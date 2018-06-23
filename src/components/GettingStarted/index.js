import React from 'react'
import { FormattedMessage } from 'react-intl'
import Wrapper from '../Wrapper'
import Text from '../Text'
import Button from '../Button'
import { StartedWrapper, TextsWrapper } from './styles'

const GettingStarted = () => (
  <StartedWrapper>
    <Wrapper pTop="xlarge" pBottom="xlarge" pLeft="large" pRight="large">
      <TextsWrapper>
        <Text size="xlarge">
          <FormattedMessage id="gettingStarted.title" />
        </Text>

        <Text size="medium" color="semiDark">
          <FormattedMessage id="gettingStarted.subtitle" />
        </Text>
      </TextsWrapper>

      <Wrapper flex contentCentered pTop="large">
        <Button primary>
          <FormattedMessage id="gettingStarted.button" />
        </Button>
      </Wrapper>
    </Wrapper>
  </StartedWrapper>
)

export default GettingStarted
