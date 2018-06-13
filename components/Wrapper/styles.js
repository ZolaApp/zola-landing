import styled from 'styled-components'

export const StyledWrapper = styled.div`
  ${({ padding, theme }) => padding && `padding: ${theme.sizes[padding]}`};
`
