import React from 'react'
import { observer, inject } from 'mobx-react'
import Update from './Update';
import AddClient from './AddClient';

const Actions = inject("clients")(observer((props) => {
  return (
    <div className='ActionsDiv'>
       <div className='UpdateDiv'>
               <Update />
       </div>
       <div className='AddDiv'>
              <AddClient />
       </div>
    </div>
  );
}))

export default Actions