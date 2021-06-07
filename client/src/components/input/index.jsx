import React from 'react'

import User from '../../assets/icons/user.svg'
import Key from '../../assets/icons/key.svg'

const Input = ({ label, name, type, id, onChange, value, src }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="input">
        <img src={src === 'user' ? User : src === 'key' ? Key : null} />
        <input type={type} id={id} onChange={onChange} value={value} />
      </div>
    </div>
  )
}

export default Input
