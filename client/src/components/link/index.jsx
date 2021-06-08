import React, { useState } from 'react'

import Bin from '../../assets/icons/bin.svg'
import Edit from '../../assets/icons/edit.svg'

import Editor from '../editor'

const ShelfLink = ({
  title,
  author,
  category,
  link,
  onClick,
  setLinkToUpdate,
  linkToEdit,
  onUpdate
}) => {
  const [show, setShow] = useState(false)

  const onEdit = () => {
    setShow(true)
    setLinkToUpdate()
  }

  return (
    <div className="link-container">
      <div>
        <a target="_blank" href={`//${link}`}>
          <h3 className="link-title">{title}</h3>
        </a>
      </div>
      <div className="link-details">
        <div className="link-subtitles">
          <h4 className="link-author">{author}</h4>
          <p className="link-tag">{category}</p>
        </div>
        <div className="link-btns">
          <div onClick={onEdit}>
            <img src={Edit} alt="edit" />
          </div>
          <div onClick={onClick}>
            <img src={Bin} alt="delete" />
          </div>
        </div>
      </div>
      {show && (
        <div>
          <Editor link={linkToEdit} onUpdate={onUpdate} closeEditor={() => setShow(false)} />
        </div>
      )}
    </div>
  )
}

export default ShelfLink
