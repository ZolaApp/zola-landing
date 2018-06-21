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
          <LanguageSwitcher />
          <LogoWithText />
          <Wrapper>
            <Text size="small" color="semiDark">
              <FormattedMessage id="footer.copyright" />
            </Text>
          </Wrapper>
        </ContentWrapper>
      </Container>
    </Wrapper>
  )
}

export default Footer
