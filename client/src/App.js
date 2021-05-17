import React from 'react'
import Router from './router'
import axios from 'axios'
import { UserContextProvider } from './context/UserContext'

axios.defaults.withCredentials = true

const App = () => {
  return (
    <UserContextProvider>
      <div>
        <Router />
      </div>
    </UserContextProvider>
  )
}

export default App
