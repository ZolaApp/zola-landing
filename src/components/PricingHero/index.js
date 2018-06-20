import React from 'react'
import { FormattedMessage } from 'react-intl'
import Wrapper from '../Wrapper'
import Text from '../Text'
import { CenterWrapper, Catchline } from './styles'

const Pricing = () => (
  <Wrapper pTop="huge" pBottom="medium">
    <CenterWrapper>
      <Wrapper mBottom="huge">
        <Catchline>
          <Text size="xlarge">
            <FormattedMessage id="pricing.hero.title" />
          </Text>

          <Text color="semiDark" size="medium">
            <FormattedMessage id="pricing.hero.subtitle" />
          </Text>
        </Catchline>
      </Wrapper>
    </CenterWrapper>
  </Wrapper>
)

export default Pricing
