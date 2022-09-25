import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const url = `http://localhost:8001`;
  const [data, setData] = useState([])
  const [filter, setFilter]= useState("")

  useEffect(()=> {getData()}, [])
  console.log(data)
  const getData = async() => {
  
try {
    fetch (`${url}/transactions`)
     .then((resp) => resp.json())
     .then((result)=> setData(result))
     if(filter!== ""){
      handleSearchData()
     }
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

//delete transaction


//filter transaction in search bar

function handleFilterChange(event){
  setFilter(event.target.value)
  handleSearchData()
}

function handleSearchData(){
  const searchData = data.filter((transactions)=>{
    let description= transactions.description.toLowerCase()
    let category= transactions.category.toLowerCase()
    let search = filter.toLowerCase()

    return description.includes(search) || category.includes(search) 
  })
  setData(searchData)
}
console.log(filter)

  return (
    <div>
      <Search handleFilterChange={handleFilterChange}/>
      <AddTransactionForm  addTransaction={sendData}/>
      <TransactionsList transactions={data}/>
    </div>
  );
}

export default AccountContainer;
