import React from 'react'
import Wrapper from '../Wrapper'
import Container from '../Container'
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
        </ContentWrapper>
      </Container>
    </Wrapper>
  )
}

export default Footer
