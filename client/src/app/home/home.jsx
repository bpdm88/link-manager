import React from 'react'

import Link from '../../components/link'

const Home = ({ links }) => {
  return (
    <div>
      {links.map((link, i) => {
        return (
          <Link key={i} title={link.title} author={link.author} link={link.link} id={link._id} />
        )
      })}
    </div>
  )
}

export default Home
