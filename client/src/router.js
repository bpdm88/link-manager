import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import UserContext from './context/UserContext'

import Home from './app/home'
import Form from './app/form'
import Register from './app/register'
import Login from './app/login'

import NavBar from './components/navbar'

const Router = () => {
  const { user, getUser } = useContext(UserContext)

  // log out

  const logOut = async () => {
    await axios.get('http://localhost:5000/auth/logOut')
    await getUser()
  }
  return (
    <BrowserRouter>
      <NavBar user={user} logOut={logOut} />
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
