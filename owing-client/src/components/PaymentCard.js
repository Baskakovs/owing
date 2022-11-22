import {Card} from 'semantic-ui-react'

import {NavLink} from 'react-router-dom'
function PaymentCard({payment}){

  const {id, description, amount, category, name} = payment
  console.log(id)
    return(
        <>
        <div key={id} className='grid-container border-top border-bottom p-5 mx-5 payment-card'>
          <span>{name}</span>
          <span>{description}</span>
          <span>${amount}</span>
          <span>{category}</span>
            <NavLink to={"/new_payment"}>
          <span className="edit"><a href="#">✏️</a></span>
            </NavLink>
          <span className="delete"><a href="#">🗑️</a></span>
        </div>
        </>
    )
}
export default PaymentCard