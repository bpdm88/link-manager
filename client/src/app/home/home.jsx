import React from 'react'

import Link from '../../components/link'

const Home = ({ links, handleDelete }) => {
  return (
    <div>
      {links.map(({ title, author, link, _id }, i) => {
        return (
          <Link
            key={i}
            title={title}
            author={author}
            link={link}
            onClick={() => handleDelete(_id)}
          />
        )
      })}
    </div>
  )
}

export default Home
