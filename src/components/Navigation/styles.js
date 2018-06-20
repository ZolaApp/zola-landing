import styled from 'styled-components'

export const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-self: end;
  align-items: center;
`

export const Links = styled.div`
  border-right: solid 1px ${({ theme }) => theme.colors.lightGray};
  margin-right: ${({ theme }) => theme.sizes.large};

  a {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;
    margin-right: ${({ theme }) => theme.sizes.large};
    padding-bottom: 0.35em;
  }

  a.active,
  a:hover,
  a:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  }
`
