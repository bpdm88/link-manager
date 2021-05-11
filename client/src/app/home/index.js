import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Home from './home'

const HomeContainer = () => {
  const [links, setLinks] = useState([])
  const [openEditor, setOpenEditor] = useState(false)
  const [linkToEdit, setLinkToEdit] = useState(null)

  useEffect(() => {
    getLinks()
  }, [])

  const getLinks = async () => {
    const linksRes = await axios.get('http://localhost:5000/link/')
    let sortedLinks = linksRes.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
    setLinks(sortedLinks)
  }

  const onDelete = async id => {
    await axios.delete(`http://localhost:5000/link/${id}`)
    getLinks()
  }

  const getUpdate = link => {
    setLinkToEdit(link)

    setOpenEditor(true)
    console.log(linkToEdit)
  }

  const onUpdate = async link => {
    const newData = {
      title: link.title,
      author: link.author,
      link: link.link
    }

    await axios.put(`http://localhost:5000/link/${linkToEdit._id}`, newData)
    setOpenEditor(false)
    getLinks()
  }

  return (
    <Home
      links={links}
      onDelete={onDelete}
      getUpdate={getUpdate}
      openEditor={openEditor}
      linkToEdit={linkToEdit}
      onUpdate={onUpdate}
    />
  )
}

export default HomeContainer
