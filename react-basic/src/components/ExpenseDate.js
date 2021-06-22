import './ExpenseDate.css';

function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const date = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();

    return <div className="expense-date">
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__date">{date}</div>
    <div className="expense-date__year">{year}</div>
  </div>
}
//컴포넌트를 작고, 하나에 초점을 맞추기 위해 Date따로 분리

export default ExpenseDate;
