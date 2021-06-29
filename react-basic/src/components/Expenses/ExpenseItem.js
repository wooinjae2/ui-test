import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

function ExpenseItem(props){
    const [title, setTitle] = useState(props.title);
    
    console.log('evaluated by React');
    let i = 0;
    const clickHandler=(e)=>{
      
      setTitle('Updated!');
      console.log(i++);
      if(i%5===0){
        setTitle('Updated!'+ i);
      }
    }
    return <Card className="expense-item">
      <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>change title</button>
    </Card>
}
export default ExpenseItem;