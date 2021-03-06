import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './app/home'
import Form from './app/form'
import Register from './app/register'
import Login from './app/login'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
        <Route path="/form" component={Form} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
