import React from 'react'

import Link from '../../components/link'

const Home = ({ links }) => {
  return (
    <div>
      {links.map((link, i) => {
        return <Link key={i} title={link.title} author={link.author} link={link.link} />
      })}
    </div>
  )
}

export default Home
