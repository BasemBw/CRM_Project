import React from 'react'
import SearchBar from './SearchBar'

function Clients() {
  return (
    <div className='container'>
      <SearchBar/>
      <div className='grid' >
          <span>Name</span>
          <span>Surname</span>
          <span>Country</span>
          <span>First Contact</span>
          <span>Email</span>
          <span>Sold</span>
          <span>Owner</span>
      </div>
    </div>
  )
}

export default Clients