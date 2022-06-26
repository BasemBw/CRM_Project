import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
        <div className='topnav'>
               <Link  to="/"><h3>Home</h3></Link>
               <Link  to="/Actions"><h3>Actions</h3></Link>
               <Link  to="/Aanalytics"><h3>Aanalytics</h3></Link>
        </div>
  )
}

export default Navbar