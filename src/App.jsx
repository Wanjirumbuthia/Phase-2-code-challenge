import './App.css'; 
import React, { useState } from 'react'; 
import SearchBar from './components/ SearchBar';
import TransactionForm from './components/ TransactionForm';

function App(){
    const [transactions] = useState([
        {
            id: 1,
            date: "2024-04-21",
            description: "Sky Divinng",
            category: "Leisure",
            amount: "$150"
          },
          {
            id: 2,
            date: "2024-04-22",
            description: "Fuel",
            category: "Transport",
            amount: "$45"
          },
          {
            id: 3,
            date: "2024-04-23",
            description: "Green Groceries",
            category: "Food",
            amount: "$30"
          },
          {
            id: 4,
            date: "2024-04-24",
            description: " Tickets",
            category: "Entertainment",
            amount: "$20"
          },
          {
            id: 5,
            date: "2024-04-25",
            description: "Tax Dedactions",
            category: "Tax",
            amount: "$25"
          },
          {
            id: 6,
            date: "2024-04-26",
            description: "Clothing",
            category: "Shopping",
            amount: "$50"
          },
          {
            id: 7,
            date: "2024-04-27",
            description: "ToothPaste",
            category: "Toiletries",
            amount: "$35"
          },
          
    ])
return(
<div>
<SearchBar/>
<TransactionForm transactions={transactions}/>
</div>

)}
 export default App