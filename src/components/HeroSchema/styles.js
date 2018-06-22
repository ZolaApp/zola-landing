import styled from 'styled-components'
import { media } from '../../theme'
import { StyledText } from '../Text/styles'

export const Schema = styled.div`
  display: flex;
  flex-direction: column;
  ${media.large`flex-direction: row;`};
  align-items: flex-start;
`

export const SchemaFigure = styled.div`
  display: flex;
  flex-direction: column;
  ${media.large`flex-direction: row;`};
  align-items: center;
`

export const FigureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FigureArrow = styled.div`
  margin: ${({ theme }) => theme.sizes.large} 0;
  transform: rotate(90deg);

  ${media.large`
    transform: rotate(0deg);
    margin: 0 ${({ theme }) => theme.sizes.large};
    margin-top: -55px;
  `};
`

export const FigureIllu = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.tiny};
  overflow: hidden;
  max-width: 100vw;

  svg {
    transform: scale(0.7);
    transform-origin: center center;
    @media screen and (min-width: 370px) {
      transform: scale(1);
    }
  }
`

export const FigureDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${StyledText} {
    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.tiny};
    }
  }
`
