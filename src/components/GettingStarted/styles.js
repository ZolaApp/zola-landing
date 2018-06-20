import styled from 'styled-components'
import { StyledText } from '../Text/styles'

export const StartedWrapper = styled.div`
  background: ${({ theme }) => theme.colors.alphaLight};
  border-top: solid 1px ${({ theme }) => theme.colors.lightGray};
  border-bottom: solid 1px ${({ theme }) => theme.colors.lightGray};
`

export const TextsWrapper = styled.div`
  text-align: center;

  ${StyledText} {
    display: block;

    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.regular};
    }
  }
`
