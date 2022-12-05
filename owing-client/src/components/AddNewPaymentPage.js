import React from 'react';
import {Input, Form, Button} from 'semantic-ui-react'
import { v4 as uuidv4 } from 'uuid';
import '../App.css'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'


function AddNewPaymentPage({users, onAddNewPayment, numPayments}){

    const history = useHistory()

    const [data, setData] = useState({
        user_id: '1',
        category: '0',
    })

    function onChange(e){
        const name = e.target.name
        const value = e.target.value
        setData({
            ...data,
            id: numPayments+1,
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
        .then(()=> history.push('/'))
        .then(()=>onAddNewPayment(data))
    }

    return(
        <>
        <Form onSubmit={handleSubmit}>
            <div columns={2}>
                <div className='w-100 my-5'>
                    <select name='user_id' value=
                    {data.user_id} onChange=
                    {onChange}>
                        {Array.isArray(users) ? 
                        users.map((user)=>{
                            return (
                                <option key=
                                {uuidv4()} value={user.id}>
                                {`${user.first_name} .${user.last_name[0]}`}
                                </option>)
                            })
                        :null}
                    </select>
                </div>
                <div>
                    <div>
                        <Input
                            defaultValue='0.00'
                            name='amount'
                            onChange={onChange}
                            className={'w-30'}
                            label={'EUR'}
                        />
                    </div>
                </div>
            </div>
            <div columns={1} className={'my-5'} >
                <div className='w-100'>
                    <select name='category' value={data.category} onChange=
                    {onChange}>
                        <option key={uuidv4()} value={0}>Food</option>
                        <option key={uuidv4()} value={1}>Energy</option>
                        <option key={uuidv4()}  value={2}>Travel</option>
                        <option key={uuidv4()}  value={3}>Entertainment</option>
                    </select>
                </div>
            </div>
            <textarea className={'my-5'} placeholder='Description' 
            name='description' onChange=
            {onChange}/>
            <Button value='submit' fluid>Add</Button>
        </Form>
            
        </>
    )
}
export default AddNewPaymentPage