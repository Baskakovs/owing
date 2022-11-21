import { Dropdown, Grid, Input, TextArea, Form, Button} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import {useEffect, useState} from 'react'

import UserDropdown from './UserDropdown'

function AddNewPaymentPage(){

    const [users, setUsers] = useState()
    useEffect(()=>{
        fetch('http://localhost:9291/users')
        .then((res)=>res.json())
        .then((obj)=>setUsers(obj))
      },[])

      
    const [data, setData] = useState({})

    function onChange(e){
        const name = e.target.name
        const value = e.target.value
        setData({
            ...data,
            [name]: value
        })
    }
    console.log(data)

    function handleChange(e){
        console.log(e)
    }

    return(
        <>

        <Grid columns={2}>
            <Grid.Row>
            <UserDropdown users={users} onChange={onChange}/>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Input
                        defaultValue='0.00'
                        name='amount'
                        onChange={onChange}
                    />
                </Grid.Column>
                <Grid.Column>
                    <span>EUR</span>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Grid columns={1}>
            <Grid.Row>
                <select name='category' onChange={onChange}>
                    <option value="food">Food</option>
                    <option value="energy">Energy</option>
                    <option value="travel">Travel</option>
                    <option value="entertainment">Entertainment</option>
                </select>
            </Grid.Row>

        </Grid>
        <Form>
            <TextArea placeholder='Description' name='description' onChange={onChange}/>
        </Form>
        <NavLink to="/">
            <Button fluid>Add</Button>
        </NavLink>
        </>
    )
}
export default AddNewPaymentPage