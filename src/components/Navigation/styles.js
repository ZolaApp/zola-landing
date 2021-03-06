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

  a {
    margin-bottom: ${({ theme }) => theme.sizes.regular};
    margin-right: ${({ theme }) => theme.sizes.large};
    padding-bottom: 0.35em;
    border-bottom: 1px solid transparent;
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;

    ${media.tablet`
      margin-bottom: 0;
    `};
  }

  a:last-child {
    margin-right: 0;
  }

  a.active,
  a:hover,
  a:focus {
    border-bottom-color: ${({ theme }) => theme.colors.dark};
  }
`
