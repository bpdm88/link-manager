import axios from 'axios'
import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import domain from '../../util/domain'

import ErrorMessage from '../../components/errorMessage'
import Input from '../../components/input'
import Button from '../../components/button'

import Logo from '../../assets/icons/icon-med.svg'

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '', passwordVerify: '' })
  const [errorMessage, setErrorMessage] = useState(null)

  const { getUser } = useContext(UserContext)

  const history = useHistory()

  const register = async e => {
    e.preventDefault()

    const registerData = {
      email: formData.email,
      password: formData.password,
      passwordVerify: formData.passwordVerify
    }

    try {
      await axios.post(`${domain}/auth/`, registerData)

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
        <div className="left--content">
          <div className="login--title">
            <h1 className="heading--alpha">Shelf</h1>
            <div>
              <img src={Logo} alt="logo" />
            </div>
          </div>
          <h2 className="heading--bravo">
            Manage, Share and <span>Organise</span>
          </h2>
          <p>
            Shelf lets you manage all of your links in one place. Set up categories and save any
            links in an organised manner so you can refer to them again and again!{' '}
          </p>
        </div>
      </div>
      <div className="login--right">
        <div className="right--content">
          <h2 className="login--secondary-title heading--charlie">Register your account:</h2>
          <form onSubmit={register} className="login--form">
            <Input
              label={'Email:'}
              name="form-email"
              type="email"
              id="form-email"
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              value={formData.email}
              src={'user'}
            />
            <Input
              label={'Password:'}
              name="form-password"
              type="password"
              id="form-password"
              onChange={e => setFormData({ ...formData, password: e.target.value })}
              value={formData.password}
              src={'key'}
            />
            <Input
              label={'Verify Password:'}
              name="verify"
              type="verify"
              id="verify"
              onChange={e => setFormData({ ...formData, passwordVerify: e.target.value })}
              value={formData.passwordVerify}
              src={'key'}
            />
            <Button type="submit">Register</Button>
          </form>
          <div>{errorMessage && <ErrorMessage message={errorMessage} />}</div>
          <div>
            <p className="signup--tag">
              Already a member
              <Link to="/"> log in here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
