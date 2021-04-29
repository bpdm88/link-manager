import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Form from './components/form'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/login" component={Form} />
        <Route path="/register" component={Form} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
