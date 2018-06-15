import React from 'react'
import Text from '../Text'
import Logo from '../Icons/Logo'
import { StyledWrapper } from './styles'

const LogoWithText = () => {
  return (
    <StyledWrapper>
      <Logo />
      <Text>Zola</Text>
    </StyledWrapper>
  )
}

export default LogoWithText
