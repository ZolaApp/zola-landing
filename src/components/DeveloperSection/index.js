import React from 'react'
import { FormattedMessage } from 'react-intl'
import Container from '../Container'
import Wrapper from '../Wrapper'
import Text from '../Text'
import Terminal from '../Illu/Terminal'
import CDN from '../Illu/CDN'
import VersioningGraph from '../Illu/VersioningGraph'
import {
  DarkWrapper,
  TitleWrapper,
  MainSection,
  SecondarySections,
  SubSections,
  Section,
  MainSectionTextsWrapper,
  TextsWrapper,
  IlluWrapper,
  CdnIlluWrapper,
  VersioningIlluWrapper
} from './styles'

const DeveloperSection = () => {
  return (
    <DarkWrapper>
      <Wrapper pTop="huge" pBottom="huge">
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
      </Wrapper>
    </DarkWrapper>
  )
}

export default DeveloperSection
