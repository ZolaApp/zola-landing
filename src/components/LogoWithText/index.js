// @flow
import React from 'react'
import { withRouter, Link, type Match } from 'react-router-dom'
import Text from '../Text'
import Logo from '../Icons/Logo'
import { StyledWrapper } from './styles'

type Props = {
  match: Match
}

const LogoWithText = (props: Props) => {
  const currentLocale = props.match.params.locale

  return (
    <StyledWrapper>
      <Link to={'/' + currentLocale}>
        <Logo />
        <Text>Zola</Text>
      </Link>
    </StyledWrapper>
  )
}

export default withRouter(LogoWithText)
