import React from 'react'
import Container from '../Container'
import Wrapper from '../Wrapper'
import Text from '../Text'
import Navigation from '../Navigation'
import { StyledHeader } from './styles'

const Header = () => (
  <Container>
    <Wrapper padding="large">
      <StyledHeader>
        <Text>LOGO</Text>
        <Navigation />
      </StyledHeader>
    </Wrapper>
  </Container>
)

export default Header
