import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [stepSize, setStepSize] = useState(1);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  useEffect(()=>{
    if(enteredNameIsValid){
      console.log('Name Input is valid');
    }
  }, [enteredNameIsValid])

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const formSubmissionHandler = e => {
    e.preventDefault();
    setEnteredNameTouched(true);
    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log('enteredValue', enteredValue);
    // nameInputRef.current.value = '';  NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName('')
  }

  const handleStepSizeHandler = () =>{
    if(stepSize === 1){
      setStepSize(5);
    }else{
      setStepSize(1);
    }
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
    if(enteredName.trim() !== ''){
      setEnteredNameIsValid(true);
      return;
    }else{
      setEnteredNameIsValid(false);
    }
  }

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid' ;
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} 
        type='text' 
        id='name' 
        onChange={nameInputChangeHandler} value={enteredName}
        onBlur={nameInputBlurHandler}/>
      </div>
      {!enteredNameIsValid &&<p className="error-text">Name must not be empty</p>}
      {
        !nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )
      }
      
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
