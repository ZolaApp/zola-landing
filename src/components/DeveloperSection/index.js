import React from 'react'
import { FormattedMessage } from 'react-intl'
import Container from '../Container'
import Wrapper from '../Wrapper'
import Text from '../Text'
import Terminal from '../Illu/Terminal'
import CDN from '../Illu/CDN'
import VersioningGraph from '../Illu/VersioningGraph'
import Github from '../ServicesLogos/Github'
import Slack from '../ServicesLogos/Slack'
import Jenkins from '../ServicesLogos/Jenkins'
import CircleCI from '../ServicesLogos/CircleCI'
import {
  DarkWrapper,
  TitleWrapper,
  MainSection,
  SecondarySections,
  FourthSection,
  FifthSection,
  SubSections,
  Section,
  MainSectionTextsWrapper,
  Services,
  TextsWrapper,
  IlluWrapper,
  CdnIlluWrapper,
  VersioningIlluWrapper
} from './styles'

const DeveloperSection = () => {
  return (
    <DarkWrapper>
      <Wrapper pTop="huge" pBottom="enormous">
        <Container>
          <TitleWrapper>
            <Text size="xlarge" color="light">
              <FormattedMessage id="devSection.title" />
            </Text>
            <Text size="small" color="semiLight">
              <FormattedMessage id="devSection.subtitle" />
            </Text>
          </TitleWrapper>
          <Wrapper mTop="xlarge">
            <MainSection>
              <Wrapper padding="xlarge" pLeft="huge">
                <MainSectionTextsWrapper>
                  <Text color="light" size="large">
                    <FormattedMessage id="devSection.section1.title" />
                  </Text>
                  <Text size="small" color="semiLight">
                    <FormattedMessage id="devSection.section1.subtitle" />
                  </Text>
                </MainSectionTextsWrapper>
              </Wrapper>
              <IlluWrapper>
                <Wrapper mRight="huge">
                  <Terminal />
                </Wrapper>
              </IlluWrapper>
            </MainSection>
          </Wrapper>
        </Container>
        <SecondarySections>
          <Container>
            <SubSections>
              <Section>
                <CdnIlluWrapper>
                  <CDN />
                </CdnIlluWrapper>
                <TextsWrapper>
                  <Text color="light" size="large">
                    <FormattedMessage id="devSection.section2.title" />
                  </Text>
                  <Text color="semiLight" size="small">
                    <FormattedMessage id="devSection.section2.paragraph1" />
                  </Text>
                  <Text color="semiLight" size="small">
                    <FormattedMessage id="devSection.section2.paragraph2" />
                  </Text>
                </TextsWrapper>
              </Section>
              <Section>
                <VersioningIlluWrapper>
                  <VersioningGraph />
                </VersioningIlluWrapper>
                <TextsWrapper>
                  <Text color="light" size="large">
                    <FormattedMessage id="devSection.section3.title" />
                  </Text>
                  <Text color="semiLight" size="small">
                    <FormattedMessage id="devSection.section3.paragraph1" />
                  </Text>
                  <Text color="semiLight" size="small">
                    <FormattedMessage id="devSection.section3.paragraph2" />
                  </Text>
                </TextsWrapper>
              </Section>
            </SubSections>
          </Container>
        </SecondarySections>
        <FourthSection>
          <Wrapper pTop="xlarge" pBottom="large">
            <Wrapper pLeft="large" pRight="large">
              <TextsWrapper>
                <Text color="light" size="large">
                  <FormattedMessage id="devSection.section4.title" />
                </Text>
                <Text color="semiLight" size="small">
                  <FormattedMessage id="devSection.section4.subtitle" />
                </Text>
              </TextsWrapper>
            </Wrapper>
            <Wrapper mTop="large">
              <Services>
                <Github />
                <Slack />
                <Jenkins />
                <CircleCI />
              </Services>
            </Wrapper>
          </Wrapper>
        </FourthSection>
        <FifthSection>
          <TextsWrapper>
            <Text color="light" size="large">
              <FormattedMessage id="devSection.section5.title" />
            </Text>
            <Text color="semiLight" size="small">
              <FormattedMessage id="devSection.section5.subtitle" />
            </Text>
          </TextsWrapper>
        </FifthSection>
      </Wrapper>
    </DarkWrapper>
  )
}

export default DeveloperSection
