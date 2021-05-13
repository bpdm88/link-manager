import React from 'react'
import Router from './router'
import axios from 'axios'

axios.defaults.withCredentials = true

const App = () => {
  return <Router />
}

export default App
