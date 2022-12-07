import './App.css';
import {useState, useEffect} from "react"
import { Route, Switch } from "react-router-dom";
import TabPage from './components/TabPage';
import AddNewPaymentPage from './components/AddNewPaymentPage';
import EditPaymentPage from './components/EditPaymentPage';
import AddNewUserPage from './components/AddNewUserPage';
import Test from './components/test';

function App() {
  const [paymentsList, setPaymentsList] = useState([])
  const [balance, setBalance] = useState([])
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('http://localhost:9291/payments')
    .then((res)=>res.json())
    .then((obj)=>{
      console.log(obj)

      let newPaymentList = []
      obj.map((user)=>{
        user.payments.map((payment)=>{
          newPaymentList = [...newPaymentList, payment]
        })
      })
      setPaymentsList(newPaymentList)
      let credit = obj[0].balances[0].credit
      let debit = obj[0].balances[0].debit
      setBalance(debit - credit)
      setUsers(obj)
    })
  },[])

  function handleDelete(id, amount, user_id){
    console.log("hello",amount, user_id)
    fetch(`http://localhost:9291/payments/${id}`,{
        method: "DELETE",
    })
    .then(()=>{
      let newPaymentList = paymentsList.filter((payment)=>{
        if(payment.id != id){
          return payment
        }else{
          return null
        }
      })
      setPaymentsList(newPaymentList)
      let newBalance
      if(user_id == 1){
        newBalance = Math.floor(parseInt(balance) - 
        parseInt(amount/users.length))
        setBalance(newBalance)
      }else if (user_id != 1){
        newBalance = Math.floor
        (parseInt(balance) + parseInt(amount/users.length))
        setBalance(newBalance)
      }
    })
  }

  function onUpdate(data){
    let newPaymentList = paymentsList.map((payment)=>{
      return(payment.id === data.id ? payment = data : payment)
    })
    setPaymentsList(newPaymentList)
  }

  
  function amendUserList(names){
    let newUserList = [...users, {id: users.length+1, first_name: 
      names.first_name, 
      last_name: names.last_name}]
    setUsers(newUserList)
  }

  function onAddNewPayment(data){
    let newPaymentList = [...paymentsList, data]
    setPaymentsList(newPaymentList)
    if(data.user_id != 1){
      let newBalance = balance - data.amount/users.length
      setBalance(newBalance)  
    }else if(data.user_id == 1){
      let newBalance = balance + data.amount/users.length
      setBalance(newBalance) 
    }
  }



  return (
   <div className='p-5'>
   <Switch>
    <Route exact path="/">
      <TabPage paymentsList={paymentsList} balance={balance} handleDelete=
      {handleDelete} users={users}/>
    </Route>
    <Route exact path="/new_payment">
      <AddNewPaymentPage users={users} onAddNewPayment={onAddNewPayment} 
      numPayments={paymentsList.length}/>
    </Route>
    <Route exact path="/new_user">
      <AddNewUserPage amendUserList={amendUserList}/>
    </Route>
    <Route exact path="/new_payment/:id">
      <EditPaymentPage paymentsList={paymentsList} users={users} onUpdate=
      {onUpdate}/>
    </Route>
   </Switch>
   </div> 
  );
}

export default App;
