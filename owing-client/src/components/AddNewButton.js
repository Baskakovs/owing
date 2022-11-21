import React from 'react'
import { Button } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

function AddNewButton(){
    return(
        <>
        <NavLink to="/new_payment">
            <Button fluid>New Payment</Button>
        </NavLink>
        </>
    )
}

export default AddNewButton