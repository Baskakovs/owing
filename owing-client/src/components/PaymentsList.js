import 'semantic-ui-css/semantic.min.css'
import '../App.css'

import PaymentCard from './PaymentCard'
function PaymentsList({paymentsList, handleDelete}){

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
        })
    }
    
    return(
        <>
        {Array.isArray(paymentsList) ? 
        paymentsList.map((payment)=>{
            return <PaymentCard payment={payment} handleDelete={handleDelete}/>
        })
        : null}
        </>
    )
}
export default PaymentsList