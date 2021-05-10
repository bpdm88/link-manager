import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Home from './home'

const HomeContainer = () => {
  const [links, setLinks] = useState([])

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

  return <Home links={links} onDelete={onDelete} />
}

export default HomeContainer
