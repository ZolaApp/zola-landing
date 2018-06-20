import React from 'react'
import { FormattedMessage } from 'react-intl'
import Container from '../Container'
import Wrapper from '../Wrapper'
import Text from '../Text'
import Button from '../Button'
import { Base, Content, ButtonWrapper } from './styles'

const PricingWantMore = () => (
  <Base>
    <Container>
      <Content>
        <Wrapper>
          <Text size="xlarge">
            <FormattedMessage id="pricing.contact.title" />
          </Text>

          <Wrapper mTop="regular">
            <Text size="regular" color="semiDark">
              <FormattedMessage id="pricing.contact.paragraph" />
            </Text>
          </Wrapper>
        </Wrapper>

        <ButtonWrapper>
          <Button primary asLink href="tel:+3317525256734">
            +33 1 75 25 25 67 34
          </Button>
        </ButtonWrapper>
      </Content>
    </Container>
  </Base>
)

export default PricingWantMore
