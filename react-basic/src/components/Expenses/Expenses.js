
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


function Expenses (props){
    const [expenses, setExpenses] = useState(props.expenses);

    const onChangeFilter = (e) =>{
        const newData = props.expenses.filter(expense => {console.log(expense.date.getFullYear()); return expense.date.getFullYear() == e.target.value});
        setExpenses(newData);        
    }
    return <Card className="expenses">
        <ExpensesFilter onChangeFilter={onChangeFilter}/>
        <ExpensesChart expenses={expenses}/>
        <ExpensesList items={expenses}/>
    </Card>
}

export default Expenses;