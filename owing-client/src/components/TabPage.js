
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Balance from './Balance'
import PaymentsList from './PaymentsList';
import AddNewButton from './AddNewButton';
import AddUserButton from './AddUserButton';

function TabPage() {
  const [paymentsList, setPaymentsList] = useState([])
  const [balance, setBalance] = useState([])
  useEffect(()=>{
    fetch('http://localhost:9291/payments')
    .then((res)=>res.json())
    .then((obj)=>{
      setPaymentsList(obj[0])
      let balance = obj[1]['debit']-obj[1]['credit']
      setBalance(balance)
    })
  },[])

  function handleDelete(e){
    let id = e.target.id
    fetch(`http://localhost:9291/payments/${id}`,{
        method: "DELETE",
    })
    .then(()=>{
        let deleted_info = []
        let newList = paymentsList.filter((item)=>{
            if(item.id != id){
                return item
            }else{
              deleted_info = [item['amount'], item['user_id']]
            }
        })
        let newBalance
        if(deleted_info[1] == 1){
          newBalance = balance - deleted_info[0]/3
          setBalance(newBalance)
        }else{
          newBalance = balance + deleted_info[0]/3
          setBalance(newBalance)
        }
        setPaymentsList(newList)
    })
  }

  return (
   <>
    <Balance balance={balance}/>
    <PaymentsList paymentsList={paymentsList} handleDelete={handleDelete}/>
    <AddNewButton/>
    <AddUserButton/>
   </> 
  );
}

export default TabPage;