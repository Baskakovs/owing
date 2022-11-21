import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import '../App.css'

import PaymentCell from './PaymentCell'
function PaymentsList(){
    return(
        <>
        <div className='justify-content-evenly'>
            <p>Paid by:</p>
            <p>Description</p>
            <p>Amount</p>
        </div>
        <PaymentCell/>
        </>
    )
}
export default PaymentsList