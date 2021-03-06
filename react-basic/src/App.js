
import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/ExpensesFilter/ExpensesFilter';

function App() {
  const [expenses, setExpenses] = useState([
    {id:"1", title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 12)},
    {id:"2", title: 'TV Show', amount: 40.67, date: new Date(2021, 3, 13)},
    {id:"3", title: 'Bus', amount: 23.67, date: new Date(2021, 4, 14)},
    {id:"4", title: 'Smart Phone', amount: 294.67, date: new Date(2021, 5, 15)},
  ])

  const addExpenseHandler = expense => {
    console.log(expense);
    setExpenses((prevState)=>{return [expense, ...prevState]});
  }

  const preventDot = (event) =>
{
    alert(event.charCode)
    //var test = document.getElementById("#age");
    var key = event.charCode ? event.charCode : event.keyCode;  
    
    if (key === 46)
    {
        event.preventDefault();
        return false;
    }    
}

  const onChangeHandler = (e) => {

    console.log('onChangeHandler');
    console.log(e.target.value)
  }

  return (
   <div>
     <input type="number" onKeyDown={ (evt) => evt.key === '.' && evt.preventDefault() } />

   </div>
  );
}

export default App;
