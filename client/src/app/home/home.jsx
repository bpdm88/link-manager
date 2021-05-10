import React from 'react'

import Link from '../../components/link'

const Home = ({ links, onDelete }) => {
  return (
    <div>
      {links.map(({ title, author, link, _id }, i) => {
        return (
          <Link key={i} title={title} author={author} link={link} onClick={() => onDelete(_id)} />
        )
      })}
    </div>
  )
}

export default Home
