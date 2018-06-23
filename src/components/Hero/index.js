import React from 'react'
import { FormattedMessage } from 'react-intl'
import Wrapper from '../Wrapper'
import Text from '../Text'
import HeroSchema from '../HeroSchema'
import { CenterWrapper, Catchline } from './styles'

const Hero = () => {
  return (
    <Wrapper pTop="huge" pBottom="huge">
      <CenterWrapper>
        <Wrapper mBottom="huge">
          <Catchline>
            <h1>
              <Text size="xlarge">
                <FormattedMessage id="hero.title" />
              </Text>
            </h1>

            <h2>
              <Text color="semiDark" size="medium" as="h2">
                <FormattedMessage id="hero.subtitle" />
              </Text>
            </h2>
          </Catchline>
        </Wrapper>
        <HeroSchema />
      </CenterWrapper>
    </Wrapper>
  )
}

export default Hero
