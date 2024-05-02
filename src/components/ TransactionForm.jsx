import React from "react";

// Define the TransactionForm component 
function TransactionForm({ transactions }) {
  return (
    
    <div id="form">
      {/*Render the table element */}
      <table id="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
         
          {transactions.map((form) => (
            <tr key={form.id}>
              <td>{form.date}</td> 
              <td>{form.description}</td> 
              <td>{form.category}</td> 
              <td>{form.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Export 
export default TransactionForm;