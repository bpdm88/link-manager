import React, { useContext, useEffect, useState } from 'react'

import domain from '../../util/domain'
import axios from 'axios'

import Home from './home'
import UserContext from '../../context/UserContext'

const HomeContainer = () => {
  const [links, setLinks] = useState([])
  const [categories, setCategories] = useState([])
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
    const linksRes = await axios.get(`${domain}/link/`)
    let sortedLinks = linksRes.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
    setLinks(sortedLinks)
  }

  const getCategories = async () => {
    const categories = []

    const linksRes = await axios.get(`${domain}/link/`)

    linksRes.data.filter(({ category }) => {
      if (!categories.includes(category)) {
        categories.push(category)
      }
      return true
    })

    setCategories(categories)
  }

  // filter links

  const filterDisplay = async category => {
    const filtered = []

    const linksRes = await axios.get(`${domain}/link/`)

    linksRes.data.map(link => {
      if (link.category === category) {
        filtered.push(link)
      }
    })
    setLinks(filtered)
  }

  // Sends Delete request for link to be removed

  const onDelete = async id => {
    await axios.delete(`${domain}/link/${id}`)
    getLinks()
    getCategories()
  }

  // Sets the link to be edited

  const setLinkToUpdate = link => {
    setLinkToEdit(link)
  }

  // Sends Put request to update link

  const onUpdate = async link => {
    const newData = {
      title: link.title,
      author: link.author,
      link: link.link,
      category: link.category
    }

    await axios.put(`${domain}/link/${linkToEdit._id}`, newData)
    getLinks()
    getCategories()
  }

  return (
    <Home
      links={links}
      categories={categories}
      linkToEdit={linkToEdit}
      onDelete={onDelete}
      setLinkToUpdate={setLinkToUpdate}
      onUpdate={onUpdate}
      filterDisplay={filterDisplay}
      clearFilter={getLinks}
      user={user}
    />
  )
}

export default HomeContainer
