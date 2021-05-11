import React from 'react'

const Link = ({ title, author, onClick, onUpdate }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={onClick}>Delete</button>
      <button onClick={onUpdate}>Edit</button>
    </div>
  )
}

export default Link
