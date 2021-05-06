import React from 'react'

import Link from '../../components/link'

const Home = ({ links }) => {
  return (
    <div>
      {links.map((link, i) => {
        return <Link key={i} link={link.title} />
      })}
    </div>
  )
}

export default Home
