import React from 'react'
import Text from '../Text'
import Wrapper from '../Wrapper'
import { StyledHeader } from './styles'

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper padding="large">
        <Text>Header</Text>
      </Wrapper>
    </StyledHeader>
  )
}

export default Header
