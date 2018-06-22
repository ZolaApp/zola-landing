import React from 'react'
import { FormattedMessage } from 'react-intl'
import Wrapper from '../Wrapper'
import Container from '../Container'
import Text from '../Text'
import SquareIcon from './Icons/SquareIcon'
import TriangleIcon from './Icons/TriangleIcon'
import ForwardIcon from './Icons/ForwardIcon'
import { BlocksWrapper, Block, BlockTitle } from './styles'

const BusinessValues = () => {
  return (
    <Wrapper>
      <Container>
        <Wrapper flex pTop="xlarge" pBottom="xlarge">
          <BlocksWrapper>
            <Block>
              <BlockTitle>
                <SquareIcon />
                <Text semiBold size="large">
                  <FormattedMessage id="businessValues.item1.title" />
                </Text>
              </BlockTitle>
              <Text color="semiDark">
                <FormattedMessage id="businessValues.item1.details" />
              </Text>
            </Block>
            <Block>
              <BlockTitle>
                <TriangleIcon />
                <Text semiBold size="large">
                  <FormattedMessage id="businessValues.item2.title" />
                </Text>
              </BlockTitle>
              <Text color="semiDark">
                <FormattedMessage id="businessValues.item2.details" />
              </Text>
            </Block>
            <Block>
              <BlockTitle>
                <ForwardIcon />
                <Text semiBold size="large">
                  <FormattedMessage id="businessValues.item3.title" />
                </Text>
              </BlockTitle>
              <Text color="semiDark">
                <FormattedMessage id="businessValues.item3.details" />
              </Text>
            </Block>
          </BlocksWrapper>
        </Wrapper>
      </Container>
    </Wrapper>
  )
}

export default BusinessValues
