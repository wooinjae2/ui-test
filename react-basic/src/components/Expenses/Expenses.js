import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';


function Expenses (props){
    const [expenses, setExpenses] = useState(props.expenses);

    const onChangeFilter = (e) =>{
        console.log('filter', e.target.value,expenses);
        
        const newData = props.expenses.filter(expense => {console.log(expense.date.getFullYear()); return expense.date.getFullYear() == e.target.value});
        setExpenses(newData);
        
    }

    console.log(props.expenses);
    return <Card className="expenses">
        <ExpensesFilter onChangeFilter={onChangeFilter}/>
        <ExpensesList items={expenses}/>
    </Card>
}

export default Expenses;