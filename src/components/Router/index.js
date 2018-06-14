import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../Home'

const Router = () => (
  <BrowserRouter>
    <Route path="/:locale" component={Home} />
  </BrowserRouter>
)

export default Router
