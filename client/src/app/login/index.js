import axios from 'axios'
import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../../context/UserContext'

import ErrorMessage from '../../components/errorMessage'
import Input from '../../components/input'

import Logo from '../../assets/icons/icon-med.svg'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errorMessage, setErrorMessage] = useState(null)

  const history = useHistory()

  const { getUser } = useContext(UserContext)

  const login = async e => {
    e.preventDefault()

    const loginData = {
      email: formData.email,
      password: formData.password
    }

    try {
      await axios.post('http://localhost:5000/auth/login', loginData)
      await getUser()
      history.push('/home')
    } catch (error) {
      if (error.response) {
        if (error.response.data.errorMessage) {
          setErrorMessage(error.response.data.errorMessage)
        }
      }
    }
  }
  return (
    <div className="login--container">
      <div className="login--left">
        <h1 className="heading--alpha">Shelf</h1>
        <div>
          <img src={Logo} />
        </div>

        <h2 className="heading--bravo">
          Manage, Share and <span>Organise</span>
        </h2>

        <p>
          Shelf lets you manage all of your links all in one place wherever it be recipies, articles
          or design. Set up categories and save any links in an organised manner so you can refer to
          them again and again!{' '}
        </p>
      </div>
      <div className="login--right">
        <h2 className="login-title">Log in to your account:</h2>
        <form onSubmit={login} className="login--form">
          <Input
            name="Email"
            type="email"
            id="Email"
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            value={formData.email}
          />
          <Input
            name="Password"
            type="password"
            id="Password"
            onChange={e => setFormData({ ...formData, password: e.target.value })}
            value={formData.password}
          />
          <button type="submit">Log in</button>
        </form>
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <p>
          Don't have an account <Link to="/register">Register instead</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
