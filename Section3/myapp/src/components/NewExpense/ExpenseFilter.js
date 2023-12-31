import React from 'react';
import { useState } from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {


  const [enteredYear, setEnteredYear] = useState('2022');


  const dateHandler = (event)=>{
    setEnteredYear(event.target.value);
    console.log(event.target.value);
    props.onFilterChange(event.target.value);

  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange = {dateHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;