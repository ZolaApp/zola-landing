import React from 'react'
import { FormattedMessage } from 'react-intl'
import Wrapper from '../Wrapper'
import Text from '../Text'
import Ruler from '../Icons/Ruler'
import Team from '../Icons/Team'
import {
  TitlesWrapper,
  BlocksWrapper,
  Block,
  BlockTextsWrapper,
  BlockIcon
} from './styles'

const MoreWithZola = () => {
  return (
    <Wrapper pTop="xlarge">
      <TitlesWrapper>
        <Text semiBold size="large">
          <FormattedMessage id="moreSection.title" />
        </Text>
        <Text size="small" color="semiDark">
          <FormattedMessage id="moreSection.subtitle" />
        </Text>
      </TitlesWrapper>
      <BlocksWrapper>
        <Block>
          <BlockTextsWrapper>
            <Text semiBold size="large">
              <FormattedMessage id="moreSection.section1.title" />
            </Text>
            <Text size="small" color="semiDark">
              <FormattedMessage id="moreSection.section1.subtitle" />
            </Text>
          </BlockTextsWrapper>
          <BlockIcon>
            <Ruler />
          </BlockIcon>
        </Block>
        <Block>
          <BlockTextsWrapper>
            <Text semiBold size="large">
              <FormattedMessage id="moreSection.section1.title" />
            </Text>
            <Text size="small" color="semiDark">
              <FormattedMessage id="moreSection.section1.subtitle" />
            </Text>
          </BlockTextsWrapper>
          <BlockIcon>
            <Team />
          </BlockIcon>
        </Block>
      </BlocksWrapper>
    </Wrapper>
  )
}

export default MoreWithZola
