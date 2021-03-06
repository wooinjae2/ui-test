import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '', 
        enteredAmount: '',
        enteredDate:'', 
    })

    const [showForm, setShowForm] = useState(false);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    const userInputChangeHandler = (e, key) =>{
        setUserInput({...userInput, [key]: e.target.value});
        
    }

    const titleChangeHandler = (e) =>{
        setEnteredTitle(e.target.value);
    }
    const amountChangeHandler = (e) =>{
        setEnteredAmount(e.target.value);
    }
    const dateChangeHandler = (e) =>{
        setEnteredDate(e.target.value);
    }



    const submitHandler = (event) => {
        event.preventDefault();
        console.log()
        const expnese ={
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expnese);

        props.onSaveExpenseData(expnese);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setShowForm(false);
    }

    

    let formContent = <div className="new-expense__actions"><button onClick={()=>{setShowForm(true)}}>Add New Expense</button></div>
    if(showForm){
        formContent = <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={(e)=>{titleChangeHandler(e, 'enteredTitle')}}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={(e)=>{amountChangeHandler(e, 'enteredAmount')}}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={(e)=>{dateChangeHandler(e, 'enteredDate')}}/>
            </div>
            
        </div>
        <div className="new-expense__actions">
            <button type="submit" onClick={()=>{setShowForm(false)}}>Cancel</button>
            <button type="submit" onClick={submitHandler}>Submit</button>
        </div>
    </form>
    }

    return <>{formContent}</>

}

export default ExpenseForm