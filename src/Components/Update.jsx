import { observer, inject } from 'mobx-react'
import { Fragment } from 'react'

const Update = inject("clients")(observer((props) => {

    const handelChange = (e) => {
        props.clients.handelActionsInputs(e.target.name, e.target.value)
    }

    return (
        <Fragment>
            <div className='updateMainDiv'>
                <h1>UPDATE</h1>
                <div>
                    <span className='Texts'>Client</span><input name='clientName' onChange={handelChange} className='ClientNameInput' placeholder='Client Name' />
                </div>
                <div>
                    <span className='Texts'>Transfer ownership to</span>
                    <select name='ownerName' onChange={handelChange} >
                        {props.clients.owners.map(owner => {
                            return (<option key={owner} value={owner} > {owner} </option>)
                        })}
                    </select>
                </div>
                <div>
                    <span className='Texts'> Send email </span>
                    <select name='emailTybe' onChange={handelChange}>
                        <option key='B' value='B' > B </option>
                        <option key='C' value='B' > C </option>
                        <option key='D' value='B' > D </option>
                        <option key='A' value='A' > A </option>
                    </select>
                </div>
                <div>
                    <span className='Texts' >Declare sale!</span>
                </div>
            </div>
            <div className='Buttons'>

            </div>
        </Fragment>
    )
}))

export default Update