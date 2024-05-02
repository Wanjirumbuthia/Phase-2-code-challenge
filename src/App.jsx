import './App.css'; 
import React, { useState } from 'react'; 
import SearchBar from './components/ SearchBar';
import TransactionForm from './components/ TransactionForm';
import TransactionList from './components/TransactionTable';

function App(){
    const [transactions,Transactions] = useState([
        {
            id: 1,
            date: "2024-04-21",
            description: "Sky Divinng",
            category: "Leisure",
            amount: "1500"
          },
          {
            id: 2,
            date: "2024-04-22",
            description: "Fuel",
            category: "Transport",
            amount: "450"
          },
          {
            id: 3,
            date: "2024-04-23",
            description: "Green Groceries",
            category: "Food",
            amount: "300"
          },
          {
            id: 4,
            date: "2024-04-24",
            description: " Tickets",
            category: "Entertainment",
            amount: "200"
          },
          {
            id: 5,
            date: "2024-04-25",
            description: "Tax Dedactions",
            category: "Tax",
            amount: "2500"
          },
          {
            id: 6,
            date: "2024-04-26",
            description: "Clothing",
            category: "Shopping",
            amount: "500"
          },
          {
            id: 7,
            date: "2024-04-27",
            description: "ToothPaste",
            category: "Toiletries",
            amount: "350"
          },
          
    ])
    function addTransaction (newTransaction) 
    { Transactions([...transactions, newTransaction]); }
    function Filter(filteredTransactions) {
      Transactions(filteredTransactions);
    }
return(
<div>
<SearchBar transactions={transactions} onFilter={Filter}/>
<TransactionList onAddTransaction={addTransaction}/>
<TransactionForm transactions={transactions}/>

</div>

)}
 export default App