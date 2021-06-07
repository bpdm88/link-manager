import React from 'react'

const ShelfLink = ({ title, author, category, onClick, setLinkToUpdate }) => {
  return (
    <div className="link-container">
      <h3 className="link-title">{title}</h3>
      <div className="link-details">
        <div className="link-subtitles">
          <h4 className="link-author">{author}</h4>
          <p className="link-tag">{category}</p>
        </div>
        <div className="link-btns">
          <button onClick={onClick}>Delete</button>
          <button onClick={setLinkToUpdate}>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default ShelfLink
