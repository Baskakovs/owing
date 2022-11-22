import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import '../App.css'

import PaymentCard from './PaymentCard'
function PaymentsList(){
    return(
        <>
        <div className='grid-container'>
            <span>Paid by</span>
            <span>Description</span>
            <span>Amount</span>
            <span>Category</span>
        </div>
        <PaymentCard/>
        </>
    )
}
export default PaymentsList