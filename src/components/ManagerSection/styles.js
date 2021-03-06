import styled from 'styled-components'
import { media } from '../../theme'
import { StyledText } from '../Text/styles'

export const MainWrapper = styled.div`
  border-bottom: solid 1px ${({ theme }) => theme.colors.lightGray};
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  ${({ center }) =>
    !center &&
    `
    max-width: 280px;
    ${media.tablet`max-width: 320px;`};
  `};

  ${StyledText} {
    margin-bottom: ${({ theme }) => theme.sizes.regular};
  }
`

export const DashboardWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 660px) {
    flex-direction: row;
  }
  justify-content: space-between;
  min-height: 300px;
  ${media.tablet`min-height: 450px;`};
  ${media.large`min-height: 500px;`};
`

export const DashboardIlluWrapper = styled.div`
  @media screen and (min-width: 660px) {
    position: absolute;
    right: -800px;
  }
  ${media.desktop`right: -582px;`};
  ${media.large`right: -300px;`};
  @media screen and (min-width: 1400px) {
    right: -200px;
  }
  @media screen and (min-width: 1525px) {
    right: -66px;
  }
  @media screen and (min-width: 1600px) {
    right: 0px;
  }
  top: 0;
`

export const DashboardTitlesWrapper = styled.div`
  margin-top: 6em;
  ${media.desktop`margin-top: 12em`};
  margin-left: 4em;
  @media screen and (min-width: 660px) {
    margin-left: 2em;
  }
  ${media.tablet`margin-left: 6em;`};
  margin-right: 2em;
`
