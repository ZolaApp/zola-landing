import styled from 'styled-components'

export const Block = styled.div`
  padding: ${({ theme }) => theme.sizes.large};
  flex: 1;
`

export const BlockTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes.regular};

  svg {
    margin-right: ${({ theme }) => theme.sizes.tiny};
  }
`
