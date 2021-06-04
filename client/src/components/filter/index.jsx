import React, { useState } from 'react'

import FilterIcon from '../../assets/icons/filter.svg'

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
    <div className="filter">
      <form onSubmit={handleSubmit}>
        <img src={FilterIcon} />
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
        <button className="filter-btn" type="submit">
          Filter
        </button>
      </form>
      <button className="filter-btn" onClick={handleClear}>
        Clear
      </button>
    </div>
  )
}

export default Filter
