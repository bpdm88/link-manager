import React, { useContext } from 'react'
import axios from 'axios'

import { Link, useHistory } from 'react-router-dom'

import UserContext from '../../context/UserContext'

const NavBar = () => {
  const { user, getUser } = useContext(UserContext)

  const history = useHistory()

  // log out

  const logOut = async () => {
    await axios.get('http://localhost:5000/auth/logOut')

    await getUser()
    history.push('/')
  }
  return (
    <div>
      <Link to={user ? '/home' : '/'}>
        <h1>Shelf</h1>
      </Link>
      {!user ? (
        <>
          <Link to="/">Log In</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
          <Link to="/form">Form</Link>
          <button onClick={logOut}>Log Out</button>{' '}
        </>
      )}
    </div>
  )
}

export default NavBar
