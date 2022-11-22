import {Card} from 'semantic-ui-react'

import {NavLink} from 'react-router-dom'
function PaymentCard(){
    return(
        <>
        <div className='grid-container border-top border-bottom p-5 mx-5 payment-card'>
          <span>Peter</span>
          <span>Hotel</span>
          <span>$120</span>
          <span>🏠</span>
            <NavLink to={"/new_payment"}>
          <span className="edit"><a href="#">✏️</a></span>
            </NavLink>
          <span className="delete"><a href="#">🗑️</a></span>
        </div>
        </>
    )
}
export default PaymentCard