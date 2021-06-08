import React, { useState } from 'react'

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
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          onChange={e => setEditData({ ...editData, title: e.target.value })}
          value={editData.title}
        />
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          onChange={e => setEditData({ ...editData, author: e.target.value })}
          value={editData.author}
        />
        <label htmlFor="link">Link</label>
        <input
          id="link"
          type="text"
          onChange={e => setEditData({ ...editData, link: e.target.value })}
          value={editData.link}
        />
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          onChange={e => setEditData({ ...editData, category: e.target.value })}
          value={editData.category}
        />
        <button onClick={update}>Submit</button>
      </form>
      <div>
        <button onClick={closeEditor}>Close</button>
      </div>
    </div>
  )
}

export default Editor
