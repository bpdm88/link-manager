import React from 'react'
import axios from 'axios'

const Link = ({ title, author, link, id }) => {
  const handleDelete = async () => {
    console.log(id)
  }

  return (
    <div>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Link
