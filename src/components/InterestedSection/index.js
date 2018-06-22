import React from 'react'
import { FormattedMessage } from 'react-intl'
import Wrapper from '../Wrapper'
import Text from '../Text'
import Button from '../Button'
import {
  SectionWrapper,
  TextsWrapper,
  ActionsWrapper,
  Paragraphs
} from './styles'

const InterestedSection = () => {
  return (
    <SectionWrapper>
      <Wrapper flex contentCentered pTop="huge" pBottom="huge">
        <div>
          <TextsWrapper>
            <Text color="light" size="xlarge">
              <FormattedMessage id="interestedSection.title" />
            </Text>
            <Paragraphs>
              <div>
                <Text color="semiLight" size="small">
                  <FormattedMessage id="interestedSection.paragraph1" />
                </Text>
              </div>
              <div>
                <Text color="semiLight" size="small">
                  <FormattedMessage id="interestedSection.paragraph2" />
                </Text>
              </div>
            </Paragraphs>
          </TextsWrapper>
          <ActionsWrapper>
            <Button primary light asLink href="https://app.zola.ink/register">
              <FormattedMessage id="interestedSection.tryButton" />
            </Button>
            <Button secondary light asLink href="mailto:contact@zola.ink">
              <FormattedMessage id="interestedSection.demoButton" />
            </Button>
          </ActionsWrapper>
        </div>
      </Wrapper>
    </SectionWrapper>
  )
}

export default InterestedSection
