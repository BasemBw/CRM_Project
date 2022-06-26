import React from 'react'
import { observer, inject } from 'mobx-react'

const AddClient = inject("clients")(observer((props) => {
  return (
    <div className='AddClient'>
        <h2>ADD CLIENT</h2>
        <div>
            <span>Fisrt name:</span><input className='AddInput'  />
        </div>
        <div>
            <span>Surname:</span><input className='AddInput' />
        </div>
        <div>
            <span>Country:</span><input className='AddInput'  />
        </div>
        <div>
            <span>Owner:</span><input className='AddInput'  />
        </div>
    </div>
  )
}))

export default AddClient