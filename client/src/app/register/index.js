import axios from 'axios'
import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import UserContext from '../../context/UserContext'

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '', passwordVerify: '' })

  const { getUser } = useContext(UserContext)

  const history = useHistory()

  const register = async e => {
    e.preventDefault()

    const registerData = {
      email: formData.email,
      password: formData.password,
      passwordVerify: formData.passwordVerify
    }

    await axios.post('http://localhost:5000/auth/', registerData)

    await getUser()
    history.push('/')
  }
  return (
    <div>
      <form onSubmit={register}>
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
        <label htmlFor="verify">Password</label>
        <input
          type="password"
          id="verify"
          onChange={e => setFormData({ ...formData, passwordVerify: e.target.value })}
          value={formData.passwordVerify}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account <Link to="/login">login instead</Link>
      </p>
    </div>
  )
}

export default Register
