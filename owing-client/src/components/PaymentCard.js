import {NavLink} from 'react-router-dom'
function PaymentCard({payment, handleDelete,users}){

  let theUser = users.filter((user)=>{
    if(user.id == payment.user_id) return user
  })
  
  const {id, description, amount, category} = payment
  const {first_name, last_name} = theUser[0]
  const hi = "hello"

  const categoryEmojies = {0: '🍕', 1: '⚡', 2: '🚀', 3: '💃'}
  let emoji = categoryEmojies[category]
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
            <span className="delete" onClick={handleDelete}><a href="#" id={id} 
            value={"amount"}>
              🗑️</a></span>
          </div>
        </div>
    )
}
export default PaymentCard