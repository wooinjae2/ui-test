import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }else{
      setIsValid(true);
      props.onAddGoal(enteredValue);
      setEnteredValue('');
    }
    
    console.log(isValid)
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styled.invalid}`}>
        <label >Course Goal</label>
        <input value={enteredValue} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
