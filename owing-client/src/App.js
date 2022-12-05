import './App.css';
import {useState, useEffect} from "react"
import { Route, Switch } from "react-router-dom";
import TabPage from './components/TabPage';
import AddNewPaymentPage from './components/AddNewPaymentPage';
import EditPaymentPage from './components/EditPaymentPage';
import AddNewUserPage from './components/AddNewUserPage';

function App() {
  const [paymentsList, setPaymentsList] = useState([])
  const [balance, setBalance] = useState([])
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('http://localhost:9291/payments')
    .then((res)=>res.json())
    .then((obj)=>{
      console.log(obj)
      setPaymentsList(obj[2])
      let balance = obj[1]['debit']-obj[1]['credit']
      setBalance(balance)
      setUsers(obj[3])
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
          newBalance = balance - deleted_info[0]
          setBalance(newBalance)
        }else{
          newBalance = balance + deleted_info[0]
          setBalance(newBalance)
        }
        setPaymentsList(newList)
    })
  }

  function onUpdate(data){
    console.log(data)
    let newPaymentList = paymentsList.map((payment)=>{
      if(payment.id == data.id){
        return payment = data
      }else{
        return payment
      }
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
