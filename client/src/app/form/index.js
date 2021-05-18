import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const FormContainer = () => {
  const [formData, setFormData] = useState({ title: '', author: '', link: '', category: '' })

  const history = useHistory()

  // Post request for link

  const postLink = async e => {
    e.preventDefault()

    const linkData = {
      title: formData.title,
      author: formData.author,
      link: formData.link,
      category: formData.category
    }

    await axios.post('http://localhost:5000/link/', linkData)
    history.push('/home')
  }

  return (
    <div>
      <form onSubmit={postLink}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          onChange={e => setFormData({ ...formData, title: e.target.value })}
          value={formData.title}
        />
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          onChange={e => setFormData({ ...formData, author: e.target.value })}
          value={formData.author}
        />
        <label htmlFor="link">Link</label>
        <input
          id="link"
          type="text"
          onChange={e => setFormData({ ...formData, link: e.target.value })}
          value={formData.link}
        />
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          onChange={e => setFormData({ ...formData, category: e.target.value })}
          value={formData.category}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormContainer
