import React from 'react'

import Bin from '../../assets/icons/bin.svg'
import Edit from '../../assets/icons/edit.svg'

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
          <div onClick={setLinkToUpdate}>
            <img src={Edit} alt="edit" />
          </div>
          <div onClick={onClick}>
            <img src={Bin} alt="delete" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShelfLink
