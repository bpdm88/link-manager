import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = ({ user }) => {
  return (
    <div>
      <Link to="/">
        <h1>Shelf</h1>
      </Link>
      {!user ? (
        <>
          <Link to="/login">Log In</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
          <Link to="/form">Form</Link>
          <button>Log Out</button>{' '}
        </>
      )}
    </div>
  )
}

export default NavBar
