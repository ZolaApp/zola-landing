import styled from 'styled-components'
import { media } from '../../theme'

export const BlocksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`flex-direction: row;`};
`

export const Block = styled.div`
  padding: ${({ theme }) => theme.sizes.large};
  flex: 1;
`

export const BlockTitle = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes.regular};

  svg {
    margin-right: ${({ theme }) => theme.sizes.tiny};
  }
`
