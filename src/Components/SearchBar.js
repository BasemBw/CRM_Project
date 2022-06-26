import React from 'react'

function SearchBar() {
  return (
    <div>
        <input placeholder='Search'></input>
        <select name="cars" id="cars">
        <option value="Name">Name</option>
        </select>
    </div>
  )
}

export default SearchBar