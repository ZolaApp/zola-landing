import React from 'react'
import Navigation from '../Navigation'
import Container from '../Container'
import Wrapper from '../Wrapper'
import Text from '../Text'
import { StyledHeader } from './styles'

const Header = () => {
  return (
    <Container>
      <Wrapper padding="large">
        <StyledHeader>
          <Text>LOGO</Text>
          <Navigation />
        </StyledHeader>
      </Wrapper>
    </Container>
  )
}

export default Header
