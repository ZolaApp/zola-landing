import styled from 'styled-components'
import { StyledButton } from '../Button/styles'

export const ActionsWrapper = styled.div`
  ${StyledButton} {
    margin-right: ${({ theme }) => theme.sizes.regular};

    &:last-child {
      margin-right: 0;
    }
  }
`
