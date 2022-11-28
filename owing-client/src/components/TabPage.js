
import { useEffect, useState } from 'react';
import Header from './Header';
import Balance from './Balance'
import PaymentsList from './PaymentsList';
import AddNewButton from './AddNewButton';

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
        let newList = paymentsList.filter((item)=>{
            if(item.id != id){
                return item
            }
        })
        setPaymentsList(newList)
    })
  }

  return (
   <>
    <Header/>
    <Balance balance={balance}/>
    <PaymentsList paymentsList={paymentsList} handleDelete={handleDelete}/>
    <AddNewButton/>
   </> 
  );
}

export default TabPage;