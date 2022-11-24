import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import { Route, Switch } from "react-router-dom";
import TabPage from './components/TabPage';
import AddNewPaymentPage from './components/AddNewPaymentPage';
import EditPaymentPage from './components/EditPaymentPage';

function App() {
  const [payments, setPayments] = useState()

  return (
   <>
   <></>
   <Switch>
    <Route exact path="/">
      <TabPage/>
    </Route>
    <Route exact path="/new_payment">
      <AddNewPaymentPage/>
    </Route>
    <Route path="/new_payment/:id">
      <EditPaymentPage/>
    </Route>
   </Switch>
   </> 
  );
}

export default App;
