import {NavLink} from 'react-router-dom'
import useState from 'react'
function PaymentCard({payment, handleDelete,users}){

  let theUser = users.filter((user)=>{
    if(user.id == payment.user_id) return user
  })
  console.log("hi", payment)
  const {id, description, amount, category, user_id} = payment
  const {first_name, last_name} = theUser[0]

  const categoryEmojies = {0: '🍕', 1: '⚡', 2: '🚀', 3: '💃'}
  let emoji = categoryEmojies[category]

  function onDelete(){
    handleDelete(id, amount, user_id)
  }
  return(
        <div className='my-5'>
          <div key={id} className='grid-container border-top border-bottom p-5 
          my-5 payment-card'>
            <span>{first_name} {last_name[0]}</span>
            <span>{description}</span>
            <span>${amount}</span>
            <span>{emoji}</span>
              <NavLink to={`/new_payment/${id}`} hell>
            <span className="edit"><a href="#">✏️</a></span>
              </NavLink>
            <span className="delete" onClick={onDelete}><a 
            href="#" id={id}>
              🗑️</a></span>
          </div>
        </div>
    )
}
export default PaymentCard