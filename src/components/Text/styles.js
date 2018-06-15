import styled from 'styled-components'

export const StyledText = styled.span`
  font-size: ${({ size, theme }) =>
    size ? theme.fonts.sizes[size] : theme.fonts.sizes.regular};
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.dark};
`
