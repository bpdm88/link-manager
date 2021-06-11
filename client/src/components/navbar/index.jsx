import React, { useContext } from 'react'
import axios from 'axios'

import { Link, useHistory } from 'react-router-dom'

import UserContext from '../../context/UserContext'
import domain from '../../util/domain'

import LgLogo from '../../assets/icons/icon-med.svg'
import SmLogo from '../../assets/icons/icon-small.svg'

const NavBar = () => {
  const { user, getUser } = useContext(UserContext)

  const history = useHistory()

  // log out

  const logOut = async () => {
    await axios.get(`${domain}/auth/logOut`)

    await getUser()
    history.push('/')
  }
  return (
    <div className="nav">
      <Link to="/home">
        <div className="nav-logo">
          <img src={LgLogo} className="logo-lg" alt="logo" />
          <img src={SmLogo} className="logo-sm" alt="logo" />
          <h1 className="heading--alpha">Shelf</h1>
        </div>
      </Link>
      <div className="logout" onClick={logOut}>
        <div className="logout-btn">Log Out</div>
      </div>
    </div>
  )
}

export default NavBar
