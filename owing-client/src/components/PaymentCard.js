import {Card} from 'semantic-ui-react'

import {NavLink} from 'react-router-dom'
function PaymentCard({payment, handleDelete}){

  const {id, description, amount, category, user} = payment
  const {first_name, last_name} = user

  
    return(

        <>
        <div key={id} className='grid-container border-top border-bottom p-5 mx-5 payment-card'>
          <span>{first_name} {last_name[0]}</span>
          <span>{description}</span>
          <span>${amount}</span>
          <span>{category}</span>
            <NavLink to={"/new_payment"}>
          <span className="edit"><a href="#">✏️</a></span>
            </NavLink>
          <span className="delete" onClick={handleDelete}><a href="#" id={id}>🗑️</a></span>
        </div>
        </>
    )
}
export default PaymentCard