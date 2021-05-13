import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './app/home'
import Form from './app/form'
import Register from './app/register'
import Login from './app/login'

import NavBar from './components/navbar'

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
