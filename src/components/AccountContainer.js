import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const url = `http://localhost:8001`;
  const [data, setData] = useState([])

  useEffect(()=> {getData()}, [])
  console.log(data)
  const getData = async() => {
  
try {
    fetch (`${url}/transactions`)
     .then((resp) => resp.json())
     .then((result)=> setData(result))
  }
catch (error){
    console.log(error)
  }
}

function sendData(info){
  fetch (`${url}/transactions`,{
    method: "POST",
    headers: {'Content-Type': "Application/json"},
    body: JSON.stringify(info)
  })
  .then((resp) => resp.json())
  .then((data)=> console.log(data)) 
  .then(()=> window.location.reload())
}
  return (
    <div>
      <Search />
      <AddTransactionForm  addTransaction={sendData}/>
      <TransactionsList transactions={data} />
    </div>
  );
}

export default AccountContainer;
