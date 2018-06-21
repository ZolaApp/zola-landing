import styled from 'styled-components'
import { media } from '../../theme'
import { StyledText } from '../Text/styles'

export const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.sizes.xlarge};

  ${StyledText} {
    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.regular};
    }
  }
`

export const BlocksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.desktop`
    flex-direction: row;
  `};
`

export const BlockTextsWrapper = styled.div`
  ${StyledText} {
    display: block;

    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.regular};
    }
  }
`

export const BlockIcon = styled.div``

export const Block = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.sizes.xlarge};
  padding-top: 0;
  ${media.desktop`
    justify-content: flex-start;
    padding-top: ${({ theme }) => theme.sizes.xlarge};
  `};

  &:first-child {
    ${media.desktop`
      flex-direction: row;
      border-right: solid 1px ${({ theme }) => theme.colors.lightGray};
    `};

    ${BlockTextsWrapper} {
      ${media.desktop`
        text-align: right;
      `};
    }

    ${BlockIcon} {
      margin-right: ${({ theme }) => theme.sizes.large};
      ${media.desktop`
        margin-left: ${({ theme }) => theme.sizes.large};
        margin-right: 0;
      `};
    }
  }

  &:last-child {
    ${media.desktop`
      flex-direction: row-reverse;
    `};

    ${BlockIcon} {
      margin-right: ${({ theme }) => theme.sizes.large};
    }
  }
`
