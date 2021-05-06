import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import Home from './home'

const HomeContainer = () => {
  const [links, setLinks] = useState([])

  useEffect(() => {
    getLinks()
  })

  const getLinks = async () => {
    const linksRes = await Axios.get('http://localhost:5000/link/')
    setLinks(linksRes.data)
  }

  return <Home links={links} />
}

export default HomeContainer
