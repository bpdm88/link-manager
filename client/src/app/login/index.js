import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const login = async e => {
    e.preventDefault()

    const loginData = {
      email: formData.email,
      password: formData.password
    }

    await axios.post('http://localhost:5000/auth/login', loginData)
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
      <p>
        Don't have an account <Link to="/register">Register instead</Link>
      </p>
    </div>
  )
}

export default Login
