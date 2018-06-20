import styled from 'styled-components'
import { media } from '../../theme'

export const Base = styled.div`
  background-color: ${({ theme }) => theme.colors.alphaLight};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
`

export const Content = styled.div`
  padding: ${({ theme }) => theme.sizes.xlarge};

  ${media.large`
    display: flex;
  `};
`
export const ButtonWrapper = styled.div`
  align-self: center;
  margin-left: auto;
  margin-top: 2em;

  ${media.large`
    margin-top: 0;
  `};
`
