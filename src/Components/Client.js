import React from 'react'

function Client(props) {
    let client = props.client
    let [first,name] = client.name.split(` `)
    
  return (
    <div className='Client client-div'>
        <span>{first}</span>
        <span>{name}</span>
        <span>{client.country}</span>
        <span>{client.firstContact.split(`T`)[0]}</span>
        <span>{client.emailType}</span>
        <span>{client.sold ? `+` : `-`}</span>
        <span>{client.owner}</span>
    </div>
  )
}

export default Client