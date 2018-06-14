import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home'

const Router = props =>
  props.children(<Route path="/:locale?" component={Home} />)

// < BrowserRouter >
// <Route path="/:locale" component={Home} />
// </BrowserRouter >

export default Router
