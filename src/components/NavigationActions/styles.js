import styled from 'styled-components'
import { media } from '../../theme'
import { StyledButton } from '../Button/styles'

export const ActionsWrapper = styled.div`
  display: none;
  ${media.tablet`display: block;`};

  ${StyledButton} {
    margin-right: ${({ theme }) => theme.sizes.regular};

    &:last-child {
      margin-right: 0;
    }
  }
`
