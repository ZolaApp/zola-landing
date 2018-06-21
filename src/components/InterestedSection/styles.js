import styled from 'styled-components'
import { StyledButton } from '../Button/styles'

export const SectionWrapper = styled.div`
  background: ${({ theme }) => theme.colors.dark};
`

export const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes.xlarge};

  ${StyledButton} {
    margin-right: ${({ theme }) => theme.sizes.large};
  }
`

export const Paragraphs = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.sizes.large};

  > div {
    padding-left: ${({ theme }) => theme.sizes.regular};
    padding-right: ${({ theme }) => theme.sizes.regular};

    &:first-child {
      text-align: right;
      border-right: solid 1px rgba(255, 255, 255, 0.2);
    }
  }
`
