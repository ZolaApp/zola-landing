import React from 'react'
import { FormattedMessage } from 'react-intl'
import Wrapper from '../Wrapper'
import Container from '../Container'
import Text from '../Text'
import LanguageSwitcher from '../LanguageSwitcher'
import LogoWithText from '../LogoWithText'
import { ContentWrapper } from './styles'

const Footer = () => {
  return (
    <Wrapper padding="large">
      <Container>
        <ContentWrapper>
          <LogoWithText />
          <LanguageSwitcher />
          <Text>
            <FormattedMessage id="footer.copyright" />
          </Text>
        </ContentWrapper>
      </Container>
    </Wrapper>
  )
}

export default Footer
