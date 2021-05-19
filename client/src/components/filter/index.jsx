import React, { useState } from 'react'

const Filter = ({ categories, filterDisplay, clearFilter }) => {
  const [filteredCat, setFilteredCat] = useState('')

  const handleChange = e => {
    setFilteredCat(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    filterDisplay(filteredCat)
  }

  const handleClear = () => {
    clearFilter()
    const dropDown = document.getElementById('options')
    dropDown.selectedIndex = 0
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="options">Choose a category:</label>
        <select id="options" onChange={handleChange}>
          <option></option>
          {categories.map((category, i) => {
            return (
              <option key={i} value={category}>
                {category}
              </option>
            )
          })}
        </select>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleClear}>Clear Filter</button>
    </div>
  )
}

export default Filter
