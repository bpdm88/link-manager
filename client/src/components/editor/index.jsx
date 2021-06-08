import React, { useState } from 'react'

import Input from '../input'

const Editor = ({ link, onUpdate, closeEditor }) => {
  const [editData, setEditData] = useState({
    ...link,
    title: link.title,
    author: link.author,
    link: link.link,
    category: link.category
  })

  const update = e => {
    e.preventDefault()
    onUpdate(editData)
    closeEditor()
  }

  return (
    <div className="editor">
      <form>
        <Input
          label="Title"
          id="title"
          type="text"
          onChange={e => setEditData({ ...editData, title: e.target.value })}
          value={editData.title}
        />
        <Input
          label="Author"
          id="author"
          type="text"
          onChange={e => setEditData({ ...editData, author: e.target.value })}
          value={editData.author}
        />
        <Input
          label="Link"
          id="link"
          type="text"
          onChange={e => setEditData({ ...editData, link: e.target.value })}
          value={editData.link}
        />
        <Input
          label="Category"
          id="category"
          type="text"
          onChange={e => setEditData({ ...editData, category: e.target.value })}
          value={editData.category}
        />
        <button onClick={closeEditor} className="cancel-btn">
          Cancel
        </button>
        <button onClick={update} className="editor-btn">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Editor
