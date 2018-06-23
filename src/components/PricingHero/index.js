import React from 'react'
import { FormattedMessage } from 'react-intl'
import Wrapper from '../Wrapper'
import Text from '../Text'
import { CenterWrapper, Catchline } from './styles'

const Pricing = () => (
  <Wrapper pTop="huge" pBottom="medium" pLeft="large" pRight="large">
    <CenterWrapper>
      <Wrapper mBottom="huge">
        <Catchline>
          <h1>
            <Text size="xlarge">
              <FormattedMessage id="pricing.hero.title" />
            </Text>
          </h1>

          <h2>
            <Text color="semiDark" size="medium">
              <FormattedMessage id="pricing.hero.subtitle" />
            </Text>
          </h2>
        </Catchline>
      </Wrapper>
    </CenterWrapper>
  </Wrapper>
)

export default Pricing
