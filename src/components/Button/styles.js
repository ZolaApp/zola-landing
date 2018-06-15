import styled from 'styled-components'

export const StyledButton = styled.button`
  cursor: pointer;
  user-select: none;
  outline: none;
  background: none;
  border: solid 1px transparent;
  font-family: ${({ theme }) => theme.fonts.families.sourceSans};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  padding: ${({ theme }) => `${theme.sizes.small} ${theme.sizes.regular}`};
  border-radius: ${({ theme }) => theme.globals.radius};

  ${({ primary, light, theme }) =>
    primary &&
    `
    background: ${light ? theme.colors.light : theme.colors.dark};
    color: ${light ? theme.colors.dark : theme.colors.light};
  `};

  ${({ secondary, theme }) =>
    secondary &&
    `
    background: ${theme.colors.light};
    color: ${theme.colors.dark};
    border-color: ${theme.colors.dark};
  `};
`
