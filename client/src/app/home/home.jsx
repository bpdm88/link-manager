import React from 'react'

import Link from '../../components/link'
import Editor from '../../components/editor'

const Home = ({
  links,
  onDelete,
  setLinkToUpdate,
  openEditor,
  closeEditor,
  linkToEdit,
  onUpdate,
  user
}) => {
  return (
    <div>
      {user &&
        links.map((link, i) => {
          return (
            <Link
              key={i}
              title={link.title}
              author={link.author}
              link={link.link}
              category={link.category}
              onClick={() => onDelete(link._id)}
              setLinkToUpdate={() => setLinkToUpdate(link)}
            />
          )
        })}
      {openEditor ? (
        <Editor link={linkToEdit} onUpdate={onUpdate} closeEditor={() => closeEditor()} />
      ) : null}
    </div>
  )
}

export default Home
