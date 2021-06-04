import React, { useContext } from 'react'
import axios from 'axios'

import { Link, useHistory } from 'react-router-dom'

import UserContext from '../../context/UserContext'

import LgLogo from '../../assets/icons/icon-med.svg'
import SmLogo from '../../assets/icons/icon-small.svg'
import Signout from '../../assets/icons/signout.svg'

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
    <div className="nav">
      <Link to="/home">
        <div className="nav-logo">
          <img src={LgLogo} className="logo-lg" />
          <img src={SmLogo} className="logo-sm" />
          <h1 className="heading--alpha">Shelf</h1>
        </div>
      </Link>
      <div className="logout" onClick={logOut}>
        <img src={Signout} />
        <div className="logout-btn">Log Out</div>
      </div>

      {/* <Link to="/form">
            <h2 className="heading--bravo">Form</h2>
          </Link> */}
    </div>
  )
}

export default NavBar
