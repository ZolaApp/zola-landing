import styled from 'styled-components'
import { media } from '../../theme'
import { StyledText } from '../Text/styles'

export const DarkWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.dark};
`

export const TitleWrapper = styled.div`
  text-align: center;

  ${StyledText} {
    display: block;

    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.regular};
    }
  }
`

export const MainSection = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  ${media.desktop`justify-content: space-between; text-align: left;`};
`

export const SecondarySections = styled.div`
  position: relative;
  z-index: 10;
  background: ${({ theme }) => theme.colors.dark2};
  ${media.desktop`margin-top: -60px;`};
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
`

export const FourthSection = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

export const FifthSection = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: -70px;
  left: 0;
  padding: ${({ theme }) => theme.sizes.large};
  text-align: center;
  background: ${({ theme }) => theme.colors.dark2};
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
  ${media.desktop`
    width: 640px;
    left: calc(50% - 320px);
  `};
`

export const Section = styled.div`
  overflow: hidden;
  position: relative;
  flex: 1;
`

export const SubSections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${media.tablet`
    flex-direction: row;
  `};

  ${Section} {
    text-align: center;
    padding-top: ${({ theme }) => theme.sizes.xlarge};
    padding-bottom: ${({ theme }) => theme.sizes.xlarge};

    &:first-child {
      ${media.tablet`
        padding-right: ${({ theme }) => theme.sizes.xlarge};
        text-align: right;
        border-right: solid 1px rgba(255, 255, 255, 0.2);
      `};
    }

    &:last-child {
      padding-top: 0;

      ${media.tablet`
        text-align: left;
        padding-top: ${({ theme }) => theme.sizes.xlarge};
        padding-left: ${({ theme }) => theme.sizes.xlarge};
      `};
    }
  }
`

export const MainSectionTextsWrapper = styled.div`
  ${StyledText} {
    display: block;

    &:last-child {
      margin-top: ${({ theme }) => theme.sizes.regular};
    }
  }
`

export const IlluWrapper = styled.div`
  display: none;
  ${media.desktop`display: block;`};
`

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.tablet`flex-direction: row;`};
  justify-content: center;

  > svg {
    opacity: 0.15;
    margin-bottom: ${({ theme }) => theme.sizes.large};
    ${media.tablet`
      margin-right: 2.813em;
      margin-bottom: 0;
    `};

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }
`

export const TextsWrapper = styled.div`
  ${StyledText} {
    display: block;

    &:not(:first-child) {
      margin-top: ${({ theme }) => theme.sizes.regular};
    }
  }
`

const SectionIlluWrapper = styled.div`
  display: none;
  ${media.large`display: block;`};
  position: absolute;
  z-index: -1;
  top: ${({ theme }) => theme.sizes.large};
`

export const CdnIlluWrapper = SectionIlluWrapper.extend`
  left: ${({ theme }) => theme.sizes.large};
`

export const VersioningIlluWrapper = SectionIlluWrapper.extend`
  right: 120px;
`
