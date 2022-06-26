import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
        <div className='topnav'>
               <Link  to="/"><h3>Home</h3></Link>
               <Link  to="/Search"><h3>Search</h3></Link>
               <Link  to="/Favorites"><h3>Favorites</h3></Link>
        </div>
  )
}

export default Navbar