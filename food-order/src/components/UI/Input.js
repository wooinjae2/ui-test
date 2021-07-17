import classes from './Input.module.css';
//rest operation 으로 인해서 {type:'text'} // 이게 그대로 type="text"형태로 input 컴포넌트의 attribute로 넘어갈 것 이다.
const Input = (props) => {
    //console.log(props.id);
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input id={props.input.id} {...props.input}/>
    </div>
}

export default Input;