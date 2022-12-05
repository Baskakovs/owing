import React from 'react'
import { Button } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

function AddUserButton(){
    return(
        <div className='my-5'>
        <NavLink to="/new_user">
            <Button fluid>New User</Button>
        </NavLink>
        </div>
    )
}

export default AddUserButton