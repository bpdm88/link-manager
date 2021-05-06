import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <h1>Shelf</h1>
      </Link>
      <Link to="/form">Form</Link>
      <Link to="/login">Log in</Link>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default NavBar
