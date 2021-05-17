import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import UserContext from './context/UserContext'

import Home from './app/home'
import Form from './app/form'
import Register from './app/register'
import Login from './app/login'

import NavBar from './components/navbar'

const Router = () => {
  const { user } = useContext(UserContext)
  return (
    <BrowserRouter>
      <NavBar user={user} />
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
