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
        <p>
          Welcome to Shelf, add links using the button below to add to your collection and use the
          filter to sort through your links by category!
        </p>
        <div className="add-btn">
          <Link to="/form">
            <h2>Add A Link</h2>
          </Link>
        </div>
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
