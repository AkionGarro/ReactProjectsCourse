import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

  const saveExpense = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    };

    props.onSaveExpense(expenseData);

  }

  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpense}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
