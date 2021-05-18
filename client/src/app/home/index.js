import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios'

import Home from './home'
import UserContext from '../../context/UserContext'

const HomeContainer = () => {
  const [links, setLinks] = useState([])
  const [categories, setCategories] = useState([])
  const [openEditor, setOpenEditor] = useState(false)
  const [linkToEdit, setLinkToEdit] = useState(null)

  const { user } = useContext(UserContext)

  // Runs Get request for links & categories

  useEffect(() => {
    if (!user) {
      setLinks([])
    } else {
      getLinks()
      getCategories()
    }
  }, [user])

  const getLinks = async () => {
    const linksRes = await axios.get('http://localhost:5000/link/')
    let sortedLinks = linksRes.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
    setLinks(sortedLinks)
  }

  const getCategories = async () => {
    const categories = []

    const linksRes = await axios.get('http://localhost:5000/link/')

    linksRes.data.filter(({ category }) => {
      if (!categories.includes(category)) {
        categories.push(category)
      }
      return true
    })

    setCategories(categories)
  }

  // Sends Delete request for link to be removed

  const onDelete = async id => {
    await axios.delete(`http://localhost:5000/link/${id}`)
    getLinks()
    getCategories()
  }

  // Opens Editor + sets the link to be edited

  const setLinkToUpdate = link => {
    setLinkToEdit(link)
    setOpenEditor(true)
  }

  // Closes link editor screen

  const closeEditor = () => {
    setOpenEditor(false)
  }

  // Sends Put request to update link

  const onUpdate = async link => {
    const newData = {
      title: link.title,
      author: link.author,
      link: link.link,
      category: link.category
    }

    await axios.put(`http://localhost:5000/link/${linkToEdit._id}`, newData)
    setOpenEditor(false)
    getLinks()
    getCategories()
  }

  return (
    <Home
      links={links}
      categories={categories}
      openEditor={openEditor}
      linkToEdit={linkToEdit}
      onDelete={onDelete}
      setLinkToUpdate={setLinkToUpdate}
      onUpdate={onUpdate}
      closeEditor={closeEditor}
      user={user}
    />
  )
}

export default HomeContainer
