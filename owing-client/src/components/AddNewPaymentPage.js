import React from 'react';
import { Grid, Input, TextArea, Form, Button} from 'semantic-ui-react'
import { v4 as uuidv4 } from 'uuid';
import '../App.css'
import {useEffect, useState} from 'react'


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

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9291/payments`,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
            }
        )
    }

    return(
        <>
        <Form onSubmit={handleSubmit}>
            <Grid columns={2}>
                <Grid.Row>
                <select name='user_id' value=
                {data.user_id} onChange=
                {onChange}>
                    {Array.isArray(users) ? 
                    users.map((user)=>{
                        return (
                            <option key=
                            {uuidv4()} value=
                            {user.id}>
{`${user.first_name} .${user.last_name[0]}`}
                            </option>)
                        })
                    :null}
                </select>
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
            <TextArea placeholder='Description' name='description' onChange={onChange}/>
            <Button value='submit' fluid>Add</Button>
        </Form>
            
        </>
    )
}
export default AddNewPaymentPage