import styled from 'styled-components'
import { StyledText } from '../Text/styles'

export const SectionWrapper = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  border-bottom: solid 1px ${({ theme }) => theme.colors.lightGray};
`

export const TextsWrapper = styled.div`
  text-align: center;

  ${StyledText} {
    display: block;

    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.regular};
    }
  }
`

export const ScreenshotWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes.xlarge};

  img {
    max-width: 100%;
  }
`
