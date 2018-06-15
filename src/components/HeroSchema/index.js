import React from 'react'
import { FormattedMessage } from 'react-intl'
import Terminal from '../Illu/Terminal'
import Browser from '../Illu/Browser'
import BrowserExport from '../Illu/BrowserExport'
import Arrow from '../Icons/Arrow'
import Text from '../Text'
import {
  Schema,
  SchemaFigure,
  FigureWrapper,
  FigureArrow,
  FigureIllu,
  FigureDetails
} from './styles'

const HeroSchema = () => {
  return (
    <Schema>
      <SchemaFigure>
        <FigureWrapper>
          <FigureIllu>
            <Terminal />
          </FigureIllu>
          <FigureDetails>
            <Text size="small" color="semiDark">
              <FormattedMessage id="hero.schema.figure1.subtitle" />
            </Text>
            <Text size="large" semiBold>
              <FormattedMessage id="hero.schema.figure1.title" />
            </Text>
          </FigureDetails>
        </FigureWrapper>
        <FigureArrow>
          <Arrow />
        </FigureArrow>
      </SchemaFigure>
      <SchemaFigure>
        <FigureWrapper>
          <FigureIllu>
            <Browser />
          </FigureIllu>
          <FigureDetails>
            <Text size="small" color="semiDark">
              <FormattedMessage id="hero.schema.figure2.subtitle" />
            </Text>
            <Text size="large" semiBold>
              <FormattedMessage id="hero.schema.figure2.title" />
            </Text>
          </FigureDetails>
        </FigureWrapper>
        <FigureArrow>
          <Arrow />
        </FigureArrow>
      </SchemaFigure>
      <SchemaFigure>
        <FigureWrapper>
          <FigureIllu>
            <BrowserExport />
          </FigureIllu>
          <FigureDetails>
            <Text size="small" color="semiDark">
              <FormattedMessage id="hero.schema.figure3.subtitle" />
            </Text>
            <Text size="large" semiBold>
              <FormattedMessage id="hero.schema.figure3.title" />
            </Text>
          </FigureDetails>
        </FigureWrapper>
      </SchemaFigure>
    </Schema>
  )
}

export default HeroSchema
