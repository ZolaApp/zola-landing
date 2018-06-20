import styled from 'styled-components'
import { StyledText } from '../Text/styles'

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: ${({ theme }) => theme.sizes.regular};
  }

  ${StyledText} {
    font-size: 1.563rem;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`
