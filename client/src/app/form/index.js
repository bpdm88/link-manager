import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import Navbar from '../../components/navbar'
import Input from '../../components/input'
import Button from '../../components/button'

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
      <Navbar />
      <div className="add-form">
        <form onSubmit={postLink}>
          <Input
            label="Title"
            id="title"
            type="text"
            onChange={e => setFormData({ ...formData, title: e.target.value })}
            value={formData.title}
          />

          <Input
            label="Author"
            id="author"
            type="text"
            onChange={e => setFormData({ ...formData, author: e.target.value })}
            value={formData.author}
          />

          <Input
            label="Link"
            id="link"
            type="text"
            onChange={e => setFormData({ ...formData, link: e.target.value })}
            value={formData.link}
          />

          <Input
            label="Category"
            id="category"
            type="text"
            onChange={e => setFormData({ ...formData, category: e.target.value })}
            value={formData.category}
          />
          <Button type="submit">Add Link</Button>
        </form>
      </div>
    </div>
  )
}

export default FormContainer
