import React from 'react'

const Link = ({ title, author, link }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </div>
  )
}

export default Link
