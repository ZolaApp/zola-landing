import styled from 'styled-components'
import { media } from '../../theme'

export const Base = styled.div`
  background-color: ${({ theme }) => theme.colors.alphaLight};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
`

export const Content = styled.div`
  padding-right: ${({ theme }) => theme.sizes.large};
  padding-left: ${({ theme }) => theme.sizes.large};
  padding-top: ${({ theme }) => theme.sizes.xlarge};
  padding-bottom: ${({ theme }) => theme.sizes.xlarge};

  ${media.large`
    display: flex;
  `};
`

export const Texts = styled.div`
  ${media.large`
    max-width: 60%;
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
