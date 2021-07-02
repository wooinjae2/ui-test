import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
const ExpensesList = (props) =>{
  return <div>{props.items.length === 0  ? 
    <h2 className="expenses-list__fallback">Found no expenses</h2> : 
    props.items.map(((expense, idx) => <ExpenseItem key={idx} date={expense.date} title={expense.title} amount={expense.amount}/>))}</div>
}

export default ExpensesList;