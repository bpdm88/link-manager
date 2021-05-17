import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const UserContext = createContext()

const UserContextProvider = props => {
  const [user, setUser] = useState()

  const getUser = async () => {
    const userRes = await axios.get('http://localhost:5000/auth/loggedIn')
    setUser(userRes.data)
  }

  useEffect(() => {
    getUser()
  }, [])
  return <UserContext.Provider value={{ user, getUser }}>{props.children}</UserContext.Provider>
}

export default UserContext
export { UserContextProvider }
