import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './app/home'
import Form from './app/form'

import NavBar from './components/navbar'

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/login">Log in</Route>
        <Route path="/register">Register</Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
