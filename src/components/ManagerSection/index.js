import React from 'react'
import { FormattedMessage } from 'react-intl'
import Wrapper from '../Wrapper'
import Container from '../Container'
import Text from '../Text'
import BigBrowser from '../Illu/BigBrowser'
import {
  MainWrapper,
  TitleWrapper,
  DashboardWrapper,
  DashboardIlluWrapper,
  DashboardTitlesWrapper
} from './styles'

const ManagerSection = () => {
  return (
    <MainWrapper>
      <Wrapper mTop="enormous">
        <Wrapper mTop="xlarge">
          <Container>
            <Wrapper pLeft="large" pRight="large">
              <TitleWrapper center>
                <Text size="xlarge">
                  <FormattedMessage id="managerSection.title" />
                </Text>
                <Text size="small" color="semiDark">
                  <FormattedMessage id="managerSection.subtitle" />
                </Text>
              </TitleWrapper>
            </Wrapper>
          </Container>
          <Wrapper mTop="xlarge">
            <DashboardWrapper>
              <DashboardTitlesWrapper>
                <TitleWrapper>
                  <Text semiBold size="large">
                    <FormattedMessage id="managerSection.section1.title" />
                  </Text>
                  <Text size="small" color="semiDark">
                    <FormattedMessage id="managerSection.section1.subtitle" />
                  </Text>
                </TitleWrapper>
              </DashboardTitlesWrapper>
              <DashboardIlluWrapper>
                <BigBrowser />
              </DashboardIlluWrapper>
            </DashboardWrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </MainWrapper>
  )
}

export default ManagerSection
