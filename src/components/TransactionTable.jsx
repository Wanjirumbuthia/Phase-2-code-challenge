import React, { useState } from "react";

function TransactionList({ onAddTransaction }) {
  // State variables 
  const [date, addDate] = useState("");
  const [description, addDescription] = useState("");
  const [category, addCategory] = useState("");
  const [amount, addAmount] = useState("");

  
  function handleSubmit(event) {
    event.preventDefault(); 
    
    const newTransaction = {
      date,
      description,
      category,
      amount,
    };
    
    onAddTransaction(newTransaction);
  }

  return (
    <div className="add-transactions">
    
      <form onSubmit={handleSubmit}>
        <div className="add-list">
         
          <label>
            Date:
            <input
              type="date"
              name="date"
              id="date"
              required
              value={date}
              onChange={(event) => addDate(event.target.value)}
            />
          </label>
          
          <label>
            Description:
            <input
              type="text"
              placeholder="Enter the description"
              required
              name="description"
              id="description"
              value={description}
              onChange={(event) => addDescription(event.target.value)}
            />
          </label>

          <label>
            Category:
            <input
              name="category"
              id="category"
              placeholder="Enter the category"
              value={category}
              onChange={(event) => addCategory(event.target.value)} 
            />
          </label>
          
          <label>
            Amount:
            <input
              type="text"
              placeholder="Enter the amount"
              required
              name="amount"
              id="amount"
              value={amount}
              onChange={(event) => addAmount(event.target.value)} 
            />
          </label>
        </div>
       
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionList;