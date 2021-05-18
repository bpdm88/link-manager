import React from 'react'

const Filter = ({ categories }) => {
  return (
    <div>
      <form action="/action_page.php">
        <label htmlFor="cars">Choose a category:</label>
        <select id="cars" name="cars">
          <option></option>
          {categories.map((category, i) => {
            return (
              <option key={i} value={category}>
                {category}
              </option>
            )
          })}
        </select>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Filter
