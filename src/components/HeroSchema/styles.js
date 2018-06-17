import styled from 'styled-components'
import { StyledText } from '../Text/styles'

export const Schema = styled.div`
  display: flex;
  align-items: flex-start;
`

export const SchemaFigure = styled.div`
  display: flex;
  align-items: center;
`

export const FigureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FigureArrow = styled.div`
  margin: 0 ${({ theme }) => theme.sizes.large};
  margin-top: -55px;
`

export const FigureIllu = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.tiny};
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
