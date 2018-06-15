import React from 'react'
import Container from '../Container'
import Wrapper from '../Wrapper'
import LogoWithText from '../LogoWithText'
import Navigation from '../Navigation'
import { StyledHeader } from './styles'

const Header = () => (
  <Container>
    <Wrapper padding="large">
      <StyledHeader>
        <LogoWithText />
        <Navigation />
      </StyledHeader>
    </Wrapper>
  </Container>
)

export default Header
