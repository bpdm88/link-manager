import React from 'react'

const Link = ({ title, author, onClick, setLinkToUpdate }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={onClick}>Delete</button>
      <button onClick={setLinkToUpdate}>Edit</button>
    </div>
  )
}

export default Link
