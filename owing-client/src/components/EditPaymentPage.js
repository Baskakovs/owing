import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Grid, Input, TextArea, Form, Button} from 'semantic-ui-react'
import {useParams} from 'react-router-dom'
import '../App.css'
import {useEffect, useState} from 'react'

import UserDropdown from './UserDropdown'

function EditPaymentPage(){

    const [users, setUsers] = useState()
    const [data, setData] = useState([])
    const [payment, setPayment] = useState({})
    const params = useParams()
    useEffect(()=>{
        fetch(`http://localhost:9291/payments/${params.id}`)
        .then((res)=>res.json())
        .then((obj)=>{
            setData(obj[0])
            setUsers(obj[1])
        })
      },[])

    const {id, amount, description, category, user_id, user} = data

    function onChange(e){
        const name = e.target.name
        const value = e.target.value
        setData({
            ...data,
            [name]: value
        })
    }

    function handleUpdate(e){
        e.preventDefault()
        fetch(`http://localhost:9291/payments/${params.id}`,{
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
            }
        )
    }

    const categories = ['Food', 'Energies', 'Travel', 'Entertainment']
    console.log(data)

    return(
        <>
        <Form onSubmit={handleUpdate}>
            <Grid columns={2}>
                <Grid.Row>
                <select name='user_id' value={data.user_id} onChange={onChange}>
                    {Array.isArray(users) ? users.map((user)=>{
                        return (
                            <option key={uuidv4()} value={user.id}>
                                {`${user.first_name} .${user.last_name[0]}`}
                            </option>)
                        })
                    :null}
                </select>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Input
                            defaultValue={amount}
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
                        {categories.map((c)=>{
                            return(
                                category === c ? <option value={c} key={c}  
                                selected>{c}</option>:<option value={c} key={c}>
                                {c}</option>
                            )
                        })}
                    </select>
                </Grid.Row>

            </Grid>


            <textarea placeholder="Description" value={description} name="description" rows="3" 
            onChange={onChange}>
            </textarea>
            <Button value='submit' fluid>Add</Button>
        </Form>
            
        </>
    )
}
export default EditPaymentPage