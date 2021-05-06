import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from './components/navbar'

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route path="/login">Log in</Route>
        <Route path="/register">Register</Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
