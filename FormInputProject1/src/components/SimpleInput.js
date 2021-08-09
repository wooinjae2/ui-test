import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;



  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  

  const formSubmissionHandler = e => {
    e.preventDefault();
    setEnteredNameTouched(true);

    if(!enteredNameIsValid){
      return;
    }
    // nameInputRef.current.value = '';  NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName('');
    setEnteredNameTouched(false);
  }


  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  }

  const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid' ;
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input  
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler} 
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputIsInvalid &&<p className="error-text">Name must not be empty</p>}
      
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
