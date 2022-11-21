import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import TabPage from './components/TabPage';
import AddNewPaymentPage from './components/AddNewPaymentPage';

function App() {
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
   </Switch>
   </> 
  );
}

export default App;
