import axios from 'axios'
import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../../context/UserContext'

import ErrorMessage from '../../components/errorMessage'

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
    <div>
      <form onSubmit={login}>
        <label htmlFor="form-email">Email</label>
        <input
          type="email"
          id="form-email"
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
        <label htmlFor="form-password">Password</label>
        <input
          type="password"
          id="form-password"
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
  )
}

export default Login
