import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Pricing from '../Pricing'

const Router = props =>
  props.children(
    <Fragment>
      <Switch>
        <Route path="/:locale/pricing" component={Pricing} />
        <Route path="/:locale?" component={Home} />
      </Switch>
    </Fragment>
  )

export default Router
