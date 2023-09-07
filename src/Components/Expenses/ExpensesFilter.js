import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler} value={props.selected}>
    { ["2018","2019","2020","2021","2022","2023"].map((year)=> <option key={year} value={year}>{year}</option>)}  
      
   
    
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
