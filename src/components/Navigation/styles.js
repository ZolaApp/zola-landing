import styled from 'styled-components'
import { media } from '../../theme'

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.phone`flex-direction: row;`};
  justify-self: end;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes.xlarge};
  ${media.tablet`margin-top: 0;`};
`

export const Links = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.large};
  ${media.phone`margin-bottom: 0;`};
  ${media.tablet`
    margin-right: ${({ theme }) => theme.sizes.large};
    border-right: solid 1px ${({ theme }) => theme.colors.lightGray};
  `};

  a {
    margin-bottom: ${({ theme }) => theme.sizes.regular};
    ${media.tablet`margin-bottom: 0;`};
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;
    ${media.phone`
      margin-right: ${({ theme }) => theme.sizes.large};
    `};
    padding-bottom: 0.35em;
    border-bottom: 1px solid transparent;
  }

  a.active,
  a:hover,
  a:focus {
    border-bottom-color: ${({ theme }) => theme.colors.dark};
  }
`
