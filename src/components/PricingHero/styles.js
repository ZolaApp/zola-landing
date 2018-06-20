import styled from 'styled-components'
import { StyledText } from '../Text/styles'

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Catchline = styled.div`
  ${StyledText} {
    display: block;
    text-align: center;

    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.regular};
    }
  }
`
