import 'semantic-ui-css/semantic.min.css'
import '../App.css'
import { v4 as uuidv4 } from 'uuid';
import PaymentCard from './PaymentCard'
function PaymentsList({paymentsList, handleDelete, users}){

    return(
        <>
        {Array.isArray(paymentsList) ? 
        paymentsList.map((payment)=>{
            return <PaymentCard key={uuidv4()} payment={payment} handleDelete=
            {handleDelete} users={users}/>
        })
        : null}
        </>
    )
}
export default PaymentsList