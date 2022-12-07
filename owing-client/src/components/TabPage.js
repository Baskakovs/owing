
import { useEffect, useState } from 'react';
import Balance from './Balance'
import PaymentsList from './PaymentsList';
import AddNewButton from './AddNewButton';
import AddUserButton from './AddUserButton';

function TabPage({paymentsList, balance, handleDelete, users}) {
  return (
   <>
    <Balance balance={balance}/>
    <PaymentsList paymentsList={paymentsList} users={users} handleDelete=
    {handleDelete}/>
    <AddNewButton/>
    <AddUserButton/>
   </> 
  );
}

export default TabPage;