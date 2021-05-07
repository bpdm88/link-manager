import React, { useEffect, useState } from 'react'

import Axios from 'axios'

import Home from './home'

const HomeContainer = () => {
  const [links, setLinks] = useState([])

  useEffect(() => {
    getLinks()
  }, [])

  const getLinks = async () => {
    const linksRes = await Axios.get('http://localhost:5000/link/')
    let sortedLinks = linksRes.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
    setLinks(sortedLinks)
  }

  return <Home links={links} />
}

export default HomeContainer
