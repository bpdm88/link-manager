import React from 'react'

import User from '../../assets/icons/user.svg'

const Input = ({ name, type, id, onChange, value }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <div className="input">
        <img src={User} />
        <input type={type} id={id} onChange={onChange} value={value} />
      </div>
    </div>
  )
}

export default Input
