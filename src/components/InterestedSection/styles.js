import styled from 'styled-components'
import { media } from '../../theme'
import { StyledButtonLink } from '../Button/styles'

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes.large};
  ${media.desktop`
    flex-direction: row;
    margin-top: ${({ theme }) => theme.sizes.xlarge};
  `};

  ${StyledButtonLink} {
    margin-bottom: ${({ theme }) => theme.sizes.regular};
    margin-right: 0;

    ${media.desktop`
      margin-right: ${({ theme }) => theme.sizes.large};
      margin-bottom: 0;
    `};
  }
`

export const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.sizes.large};
  ${media.desktop`
    flex-direction: row;
  `};

  > div {
    text-align: center;
    padding-left: ${({ theme }) => theme.sizes.regular};
    padding-right: ${({ theme }) => theme.sizes.regular};
    margin-bottom: ${({ theme }) => theme.sizes.large};
    ${media.desktop`
      text-align: left;
      margin-bottom: 0;
    `};

    &:first-child {
      ${media.desktop`
        text-align: right;
        border-right: solid 1px rgba(255, 255, 255, 0.2);
      `};
    }
  }
`
