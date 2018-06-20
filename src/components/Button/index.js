// @flow
import React from 'react'
import { StyledButton, StyledButtonLink } from './styles'

type Props = {
  asLink: boolean
}

const Button = (props: Props) => {
  const Component = props.asLink ? StyledButtonLink : StyledButton

  return <Component {...props} />
}

Button.defaultProps = {
  asLink: false
}

export default Button
