import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Input, Form, Button} from 'semantic-ui-react'
import {useParams, useHistory} from 'react-router-dom'
import '../App.css'
import {useEffect, useState} from 'react'


function EditPaymentPage({paymentsList, users, onUpdate}){

    const [data, setData] = useState([])
    const params = useParams()
    const history = useHistory()

    let thePayment = paymentsList.filter((payment)=>{
        if(payment.id == params.id) return payment
    })

    useEffect(()=>{
        setData({
            category: thePayment[0]['category'],
            amount: thePayment[0]['amount'],
            description: thePayment[0]['description'],
            user_id: parseInt(thePayment[0]['user_id']),
            id: thePayment[0].id
        })
    },[])

    const {amount, description, category} = data    

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
        .then(()=>history.push('/'))
        .then(()=>onUpdate(data))
    }

    const categories = ['Food', 'Energies', 'Travel', 'Entertainment']

    return(
        <>
        <Form onSubmit={handleUpdate}>
            <div>
                <div className='w-100 my-5'>
                    <select name='user_id' value={data.user_id} onChange=
                    {onChange}>
                    {Array.isArray(users) ? users.map((user)=>{
                        return (
                            <option key={uuidv4()} value={user.id}>
                                {`${user.first_name} .${user.last_name[0]}`}
                            </option>)
                        })
                    :null}
                </select>
                </div>
                <div>
                    <div>
                        <Input
                            defaultValue={amount}
                            name='amount'
                            onChange={onChange}
                            className={'w-30'}
                            label='EUR'
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className={'my-5'}>
                    <select name='category' value={category} onChange=
                    {onChange}>
                        <option key={uuidv4()} value={0}>Food</option>
                        <option key={uuidv4()} value={1}>Energy</option>
                        <option key={uuidv4()}  value={2}>Travel</option>
                        <option key={uuidv4()}  value={3}>Entertainment</option>
                    </select>
                </div>

            </div>


            <textarea placeholder="Description" value={description} 
            name="description" rows="3" onChange={onChange} className={'my-5'}>
            </textarea>
            <Button value='submit' fluid>Change</Button>
        </Form>
            
        </>
    )
}
export default EditPaymentPage