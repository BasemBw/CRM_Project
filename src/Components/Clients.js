import React from 'react'
import SearchBar from './SearchBar'
import { observer, inject } from 'mobx-react'
import Client from './Client'
import GridHeader from './GridHeader'
const Clients = inject(`clients`)(observer(props => {
  const clientsArray = props.clients.clients.splice(0,10)
  return (
    
    <div className='container'>
      <SearchBar/>
      <div className={`grid`} >
        <GridHeader/> 
        {clientsArray.map(client =><Client client = {client} />)}
      </div>
    </div>
  )
}))

export default Clients