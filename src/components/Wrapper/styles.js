import styled, { css } from 'styled-components'

export const StyledWrapper = styled.div`
  ${({ padding, theme }) => padding && `padding: ${theme.sizes[padding]}`};
  ${({ pTop, theme }) => pTop && `padding-top: ${theme.sizes[pTop]}`};
  ${({ pRight, theme }) => pRight && `padding-right: ${theme.sizes[pRight]}`};
  ${({ pBottom, theme }) =>
    pBottom && `padding-bottom: ${theme.sizes[pBottom]}`};
  ${({ pLeft, theme }) => pLeft && `padding-left: ${theme.sizes[pLeft]}`};
  ${({ margin, theme }) => margin && `margin: ${theme.sizes[margin]}`};
  ${({ mTop, theme }) => mTop && `padding-top: ${theme.sizes[mTop]}`};
  ${({ mRight, theme }) => mRight && `padding-right: ${theme.sizes[mRight]}`};
  ${({ mBottom, theme }) =>
    mBottom && `padding-bottom: ${theme.sizes[mBottom]}`};
  ${({ mLeft, theme }) => mLeft && `padding-left: ${theme.sizes[mLeft]}`};
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  ${({ flex, flexDirection }) =>
    flex &&
    css`
      flex-direction: ${flexDirection || 'row'};
    `};
  ${({ contentCentered }) => contentCentered && `justify-content: center;`};
`
