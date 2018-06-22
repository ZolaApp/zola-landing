import styled from 'styled-components'
import { media } from '../../theme'
import { StyledText } from '../Text/styles'

export const GlobalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  ${media.phone`
    flex-direction: row;
  `};

  ${StyledText} {
    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.regular};
      ${media.phone`
        margin-top: 0;
      `};
    }
  }
`
