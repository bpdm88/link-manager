import React from 'react'

import Link from '../../components/link'
import Editor from '../../components/editor'

const Home = ({ links, onDelete, setLinkToUpdate, openEditor, linkToEdit, onUpdate }) => {
  return (
    <div>
      {links.map((link, i) => {
        return (
          <Link
            key={i}
            title={link.title}
            author={link.author}
            link={link.link}
            onClick={() => onDelete(link._id)}
            setLinkToUpdate={() => setLinkToUpdate(link)}
          />
        )
      })}
      {openEditor ? <Editor link={linkToEdit} onUpdate={onUpdate} /> : null}
    </div>
  )
}

export default Home
