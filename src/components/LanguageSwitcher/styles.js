import styled from 'styled-components'

export const LinksWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.semiDark};
    font-weight: bold;
    margin-right: ${({ theme }) => theme.sizes.small};

    &:after {
      content: '•';
      padding-left: ${({ theme }) => theme.sizes.small};
      color: rgba(0, 0, 0, 0.1);
    }

    &:last-child {
      margin-right: 0;

      &:after {
        content: none;
      }
    }

    &.active {
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`
