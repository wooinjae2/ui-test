import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';


function Expenses (props){
    console.log(props.expenses);
    return <Card className="expenses">
        {props.expenses ? props.expenses.map((expense => <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount}/>)): null}
    </Card>
}

export default Expenses;