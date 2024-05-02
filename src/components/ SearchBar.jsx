import React from "react";
import { useState } from "react";


function  SearchBar(transactions,onFilter) {
    const [search, addSearch] = useState("");

   
    function InputChange(event) {
      addSearch(event.target.value); 
      
    };
  
 
    function handleSearch() {
      
      const filterTransactions = transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(search.toLowerCase())
      );
    
      onFilter(filterTransactions);
    };
  
    
  return (
    <div> 
        <header id='header'>
        The Royal Bank of Flatiron
        </header>
        <input
        className="search-input"
        type="text"
        placeholder="Search Recent Transactions"
        value={search} 
        onChange={InputChange} 
       />
        <span className="search-icon" onClick={handleSearch}>
        &#128269;
      </span>
    </div>
  )
}

export default  SearchBar