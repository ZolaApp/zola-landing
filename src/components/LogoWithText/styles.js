import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.563rem;

  svg {
    margin-right: ${({ theme }) => theme.sizes.regular};
  }
`
