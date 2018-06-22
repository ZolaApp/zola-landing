import React from 'react'
import { FormattedMessage } from 'react-intl'
import Container from '../Container'
import Wrapper from '../Wrapper'
import Text from '../Text'
import Button from '../Button'
import {
  Grid,
  Column,
  Header,
  Price,
  FeatureTexts,
  Feature,
  Dot,
  FeatureNote,
  OpenSourceLink
} from './styles'

const PLANS = [
  {
    name: 'pricing.discover',
    price: 'pricing.discover.price'
  },
  {
    name: 'pricing.project',
    price: 'pricing.project.price'
  },
  {
    name: 'pricing.team',
    price: 'pricing.team.price'
  }
]

const PricingGrid = () => (
  <Container>
    <Grid>
      {PLANS.map((plan, index) => (
        <Column key={plan.name}>
          <Header>
            <Text semiBold size="large">
              <FormattedMessage id={plan.name} />
            </Text>

            <Price>
              <Text color="semiDark" size="medium">
                <FormattedMessage id={plan.price} />
              </Text>
            </Price>
          </Header>

          <Wrapper mTop="large">
            <Feature>
              <Dot />

              <FeatureTexts>
                <Text color="dark" size="regular">
                  <FormattedMessage
                    id={
                      index === 0
                        ? 'pricing.public_translations'
                        : 'pricing.private_translations'
                    }
                  />
                </Text>

                {index === 0 && (
                  <FeatureNote>
                    <Text color="semiDark" size="regular">
                      <FormattedMessage id="pricing.crowdsourced_translations" />
                    </Text>
                  </FeatureNote>
                )}
              </FeatureTexts>
            </Feature>

            <Feature>
              <Dot color={index >= 2 ? 'green' : 'orange'} />

              <FeatureTexts>
                <Text color="dark" size="regular">
                  <FormattedMessage id="pricing.keys" />
                </Text>

                <FeatureNote>
                  <Text color="semiDark" size="regular">
                    <FormattedMessage
                      id={
                        index === 0
                          ? 'pricing.discover.keys_limit'
                          : index === 1
                            ? 'pricing.project.keys_limit'
                            : 'pricing.team.keys_limit'
                      }
                    />
                  </Text>
                </FeatureNote>
              </FeatureTexts>
            </Feature>

            <Feature>
              <Dot />

              <FeatureTexts>
                <Text color="dark" size="regular">
                  <FormattedMessage id="pricing.crowdsourcing" />
                </Text>
              </FeatureTexts>
            </Feature>

            <Feature>
              <Dot />

              <FeatureTexts>
                <Text color="dark" size="regular">
                  <FormattedMessage id="pricing.translators_network" />
                </Text>
              </FeatureTexts>
            </Feature>

            <Feature>
              <Dot color={index === 0 ? 'red' : 'green'} />

              <FeatureTexts>
                <Text color="dark" size="regular">
                  <FormattedMessage id="pricing.rbac" />
                </Text>

                <FeatureNote>
                  <Text color="semiDark" size="regular">
                    <FormattedMessage id="pricing.rbac.note" />
                  </Text>
                </FeatureNote>
              </FeatureTexts>
            </Feature>

            <Feature>
              <Dot color={index === 2 ? 'green' : 'red'} />

              <FeatureTexts>
                <Text color="dark" size="regular">
                  <FormattedMessage id="pricing.organization" />
                </Text>

                <FeatureNote>
                  <Text color="semiDark" size="regular">
                    <FormattedMessage id="pricing.organization.note" />
                  </Text>
                </FeatureNote>
              </FeatureTexts>
            </Feature>

            <Feature>
              <Dot color={index === 2 ? 'green' : 'red'} />

              <FeatureTexts>
                <Text color="dark" size="regular">
                  <FormattedMessage id="pricing.custom_rbac" />
                </Text>
              </FeatureTexts>
            </Feature>

            <Wrapper flex contentCentered flexDirection="column">
              <Button primary>
                <FormattedMessage
                  id={index === 0 ? 'pricing.try_zola' : 'pricing.pick'}
                />
              </Button>

              {index === 1 && (
                <OpenSourceLink href="mailto:opensource@zola.ink">
                  <FormattedMessage id="pricing.open_source" />
                </OpenSourceLink>
              )}
            </Wrapper>
          </Wrapper>
        </Column>
      ))}
    </Grid>
  </Container>
)

export default PricingGrid
