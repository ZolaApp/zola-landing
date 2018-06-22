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
            <Text size="xlarge">
              <FormattedMessage id="hero.title" />
            </Text>
            <Text color="semiDark" size="medium">
              <FormattedMessage id="hero.subtitle" />
            </Text>
          </Catchline>
        </Wrapper>
        <HeroSchema />
      </CenterWrapper>
    </Wrapper>
  )
}

export default Hero
