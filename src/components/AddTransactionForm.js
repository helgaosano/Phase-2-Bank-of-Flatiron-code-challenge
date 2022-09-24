import React, {useState, useEffect}from "react";

  function AddTransactionForm({addTransaction}){

    const [formData, setFormData] = useState({date: "", description: "", category: "", amount: ""} );
  
  function handleChange(event) {

    setFormData ({...formData, [event.target.name]: event.target.value})
  }

  function onSubmit(event){
    event.preventDefault();
    addTransaction(formData);
  }
  return (
    <div className="ui segment">
      <form onSubmit ={onSubmit} className="ui form">
        <div className="inline fields">
          <input required onChange={handleChange} type="date" name="date" />
          <input required onChange={handleChange} type ="text" name="description" placeholder="Description" />
          <input required onChange={handleChange} type="text" name="category" placeholder="Category" />
          <input required onChange={handleChange} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
  }

export default AddTransactionForm;
