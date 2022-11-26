import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import '../App.css'

import PaymentCard from './PaymentCard'
function PaymentsList(){
    const [paymentsList, setPaymentsList] = useState()
    useEffect(()=>{
        fetch('http://localhost:9291/payments')
        .then((res)=>res.json())
        .then((obj)=>setPaymentsList(obj))
    },[])

    function handleDelete(e){
        let id = e.target.id
        fetch(`http://localhost:9291/payments/${id}`,{
            method: "DELETE",
        })
        .then(()=>{
            let newList = paymentsList.filter((item)=>{
                if(item.id != id){
                    return item
                }
            })
            setPaymentsList(newList)
        })
    }
    
    return(
        <>
        <div className='grid-container'>
            <span>Paid by</span>
            <span>Description</span>
            <span>Amount</span>
            <span>Category</span>
        </div>
        {Array.isArray(paymentsList) ? 
        paymentsList.map((payment)=>{
            return <PaymentCard payment={payment} handleDelete={handleDelete}/>
        })
        : null}
        </>
    )
}
export default PaymentsList