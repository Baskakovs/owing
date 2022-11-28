import {NavLink} from 'react-router-dom'
function PaymentCard({payment, handleDelete}){

  const {id, description, amount, category, user} = payment
  const {first_name, last_name} = user

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
              <NavLink to={`/new_payment/${id}`}>
            <span className="edit"><a href="#">✏️</a></span>
              </NavLink>
            <span className="delete" onClick={handleDelete}><a href="#" id={id}>
              🗑️</a></span>
          </div>
        </div>
    )
}
export default PaymentCard