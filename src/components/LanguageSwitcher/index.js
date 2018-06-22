import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { LinksWrapper } from './styles'

class LanguageSwitcher extends React.Component {
  isLocaleActive = locale => this.props.match.params.locale === locale

  render() {
    return (
      <LinksWrapper>
        <Link to="/fr" className={this.isLocaleActive('fr') ? 'active' : null}>
          FR
        </Link>
        <Link to="/en" className={this.isLocaleActive('en') ? 'active' : null}>
          EN
        </Link>
      </LinksWrapper>
    )
  }
}

export default withRouter(LanguageSwitcher)
