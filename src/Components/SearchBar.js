import React from 'react'

function SearchBar() {
  return (
    <div>
        <input placeholder='Search' className={`Search-input`}></input>
        <select className={`drop-down-list`}>
        <option value="Name">Name</option>
        </select>
    </div>
  )
}

export default SearchBar