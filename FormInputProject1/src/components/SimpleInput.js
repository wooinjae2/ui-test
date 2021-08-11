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

  const {
    value: enteredEmail,
    isValid : emailInputIsInvalid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => {const atIndex =[-1, 0]; return value.trim() !== '' && !atIndex.includes(value.trim().indexOf('@')) && value.indexOf('.') > value.indexOf('@')+1 && value.indexOf('.') < value.length-1})
  
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  //const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  
  
  const atIndex = [-1, 0];
  
  
  
  //const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  useEffect(()=>{
    if(nameInputIsInvalid && emailInputIsInvalid){
      setFormIsValid(true);
    }else{
      setFormIsValid(false);
    }
  },[nameInputIsInvalid, emailInputIsInvalid]);


  

  const formSubmissionHandler = e => {
    e.preventDefault();
    

    if(!nameInputIsInvalid){
      return;
    }
    // nameInputRef.current.value = '';  NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    resetEmailInput()
    
  }



  const nameInputClasses = !nameInputHasError ? 'form-control' : 'form-control invalid' ;
  const emailInputClasses = !emailInputHasError ? 'form-control' : 'form-control invalid' ;
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
            onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
