import styled from 'styled-components'

export const LinksWrapper = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.semiDark};
    font-weight: bold;
    margin-right: ${({ theme }) => theme.sizes.small};

    &:last-child {
      margin-right: 0;
    }
  }
`
