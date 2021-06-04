import React from 'react'

import { Link } from 'react-router-dom'

import ShelfLink from '../../components/link'
import Editor from '../../components/editor'
import Filter from '../../components/filter'
import Navbar from '../../components/navbar'

const Home = ({
  links,
  categories,
  onDelete,
  setLinkToUpdate,
  openEditor,
  closeEditor,
  linkToEdit,
  onUpdate,
  filterDisplay,
  clearFilter,
  user
}) => {
  return (
    <div>
      <Navbar />
      <div className="welcome">
        <Link to="/form">
          <h2 className="add-btn">Add To Your Collection</h2>
        </Link>
      </div>
      <div>
        <Filter categories={categories} filterDisplay={filterDisplay} clearFilter={clearFilter} />
      </div>
      {user &&
        links.map((link, i) => {
          return (
            <ShelfLink
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
