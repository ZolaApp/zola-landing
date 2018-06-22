import React from 'react'
import { FormattedMessage } from 'react-intl'
import Wrapper from '../Wrapper'
import Text from '../Text'
import DashboardScreenshot from '../Illu/DashboardScreenshot'
import { SectionWrapper, TextsWrapper, ScreenshotWrapper } from './styles'

const DashboardOverview = () => {
  return (
    <SectionWrapper>
      <Wrapper pTop="xlarge">
        <Wrapper flex contentCentered flexDirection="column">
          <TextsWrapper>
            <Text semiBold size="large">
              <FormattedMessage id="managerSection.section2.title" />
            </Text>
            <Text size="small" color="semiDark">
              <FormattedMessage id="managerSection.section2.subtitle" />
            </Text>
          </TextsWrapper>
          <ScreenshotWrapper>
            <DashboardScreenshot />
          </ScreenshotWrapper>
        </Wrapper>
      </Wrapper>
    </SectionWrapper>
  )
}

export default DashboardOverview
