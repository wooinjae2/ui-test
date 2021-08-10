import { useEffect, useState } from "react";
import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
  
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: nameInputIsInvalid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !=='');
  
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const atIndex = [-1, 0];
  const enteredEmailIsValid = enteredEmail.trim() !== '' && !atIndex.includes(enteredEmail.trim().indexOf('@')) && enteredEmail.indexOf('.') > enteredEmail.indexOf('@')+1 && enteredEmail.indexOf('.') < enteredEmail.length-1;
  
  
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  useEffect(()=>{
    if(enteredNameIsValid){
      setFormIsValid(true);
    }else{
      setFormIsValid(false);
    }
  },[enteredNameIsValid]);




  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  }
  

  const formSubmissionHandler = e => {
    e.preventDefault();
    setEnteredNameTouched(true);

    if(!enteredNameIsValid){
      return;
    }
    // nameInputRef.current.value = '';  NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }


  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  }


  const nameInputClasses = !nameInputHasError ? 'form-control' : 'form-control invalid' ;
  const emailInputClasses = !emailInputIsInvalid ? 'form-control' : 'form-control invalid' ;
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input  
          type='text' 
          id='name' 
          onChange={nameChangeHandler} 
          value={enteredName}
          onBlur={nameBlurHandler}
        />
      </div>
      {nameInputIsInvalid &&<p className="error-text">Name must not be empty</p>}
      <div className={emailInputClasses}>
        <input  
            type='text' 
            id='email'
            placeholder='email' 
            onChange={emailInputChangeHandler} 
            value={enteredEmail}
            onBlur={emailInputBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
