import React from 'react'
import { FormattedMessage } from 'react-intl'
import Wrapper from '../Wrapper'
import Container from '../Container'
import Text from '../Text'
import LanguageSwitcher from '../LanguageSwitcher'
import LogoWithText from '../LogoWithText'
import { GlobalWrapper, ContentWrapper } from './styles'

const Footer = () => {
  return (
    <Wrapper padding="large">
      <Container>
        <GlobalWrapper>
          <ContentWrapper>
            <LogoWithText />
            <Text size="small" color="semiDark">
              <FormattedMessage id="footer.copyright" />
            </Text>
          </ContentWrapper>
          <LanguageSwitcher />
        </GlobalWrapper>
      </Container>
    </Wrapper>
  )
}

export default Footer
