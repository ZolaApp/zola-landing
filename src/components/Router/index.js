// @flow
import React, { Component, Fragment, type Children } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from '../Home'
import Pricing from '../Pricing'

type Props = { children: Children, location: any }

class Router extends Component<Props> {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children(
      <Fragment>
        <Switch>
          <Route path="/:locale/pricing" component={Pricing} />
          <Route path="/:locale?" component={Home} />
        </Switch>
      </Fragment>
    )
  }
}

export default withRouter(Router)
