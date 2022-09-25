import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions}) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
{/**create action column */}
          <th>
            <h3 className="ui center aligned header">Action</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transactions.map((transaction)=>(
          
        <Transaction 
         key={transaction.id} 
         date={transaction.date} 
         description={transaction.description}
         category={transaction.category} 
         amount={transaction.amount}
         id={transaction.id}/>
        ))
        }
      </tbody>
    </table>
  );
}

export default TransactionsList;
