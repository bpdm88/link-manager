import React, { useState } from 'react'

const Editor = ({ link, onUpdate }) => {
  const [editData, setEditData] = useState({
    ...link,
    title: link.title,
    author: link.author,
    link: link.link
  })

  const update = e => {
    e.preventDefault()

    // console.log(link)
    // console.log(editData)
    onUpdate(editData)
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
        <button onClick={update}>Submit</button>
      </form>
    </div>
  )
}

export default Editor
