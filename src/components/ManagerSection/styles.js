import styled from 'styled-components'
import { StyledText } from '../Text/styles'

export const MainWrapper = styled.div`
  border-bottom: solid 1px ${({ theme }) => theme.colors.lightGray};
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};

  ${StyledText} {
    margin-bottom: ${({ theme }) => theme.sizes.regular};
  }
`

export const DashboardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DashboardIlluWrapper = styled.div``

export const DashboardTitlesWrapper = styled.div`
  margin-top: 12em;
  margin-left: 6em;
  margin-right: 2em;
`
