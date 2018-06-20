// @flow
import React from 'react'
import { withRouter } from 'react-router-dom'
import { injectIntl } from 'react-intl'
import { LanguageContext } from '../../state'

type Props = {}

class Pricing extends React.Component<Props> {
  render() {
    return 'Pricing'
  }
}

export default withRouter(
  injectIntl(props => (
    <LanguageContext.Consumer>
      {languageContext => <Pricing {...props} {...languageContext} />}
    </LanguageContext.Consumer>
  ))
)
