import React from "react";

function Transaction({date, description, category, amount,id}) {
  const url = `http://localhost:8001`;

  function onRemove(id){
    fetch (`${url}/transactions/${id}`,{
      method: "DELETE",
      headers: {'Content-Type': "Application/json"},
    })
    
    .then(() => console.log("delete transaction"))
    .then(() => window.location.reload())
  }
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td> <button onClick={()=> onRemove(id)}>Remove</button></td>
      {/**add */}
     
    </tr>
  );
}

export default Transaction;
