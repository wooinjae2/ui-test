import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.includes('@')};
  }
  if(action.type === 'USER_BLUR'){
  
    return {value: state.value, isValid: state.value.includes('@')};
  }
  return { value: '', isValid: false };
}; //reducer fn 이 컴포넌트 밖에 있다.



const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.trim().length > 6};
  }
  if(action.type === 'USER_BLUR'){
    return {value: state.value, isValid: state.value.trim().length> 6};
  }
  return { value: '', isValid: false };
}; //reducer fn 이 컴포넌트 밖에 있다.

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: false}); 
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: false}); 
  //email validity, password validity를 따로 분리해서 관리할수있다.
  useEffect(()=>{
    console.log('USE EFFECT');
  }, [])

  //useReducer 
  //const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
  //1. state : re-render나 re-evaluation cycle에서 이용되는 state
  //2. new action을 디스패치할때 쓰이는 함수
  //3. reducerFn : (prevState, action) => {return newState; } 자동으로 트리거 되는 함수(dispatchFn를 통해)로 최신 상태의 스테이트와 snapshot을 받아서 new state를 리턴할것이다.
  //4. 
  //5. initFn : initialValue를 초기화 할수있다.
  const {isValid : emailIsValid} = emailState; //useEffect 최적화 방법
  const {isValid : passwordIsValid} = passwordState;


  useEffect(()=>{
    console.log('chceck validity');
    // const identifier = setTimeout( () =>{
      setFormIsValid(
        emailIsValid && passwordIsValid)
    // }, 500)
    return () =>{
      console.log('clean up');
    }
      
  }, [emailIsValid , passwordIsValid]); //useEffect 최적화 방법
  //emailState Object전체를 디펜던시 목록에 넣지 않고 특정한 프로퍼티만 넣어서 useEffect를 최적화한다.
  //디펜던시로 [someObject.someProperty]); 이런 형태도 가능
  //아래와 같은 형태는 피하는게 좋다.
  //}, [someObject]);



  
  const emailChangeHandler = (event) => {
    console.log()
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    // setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
    // setFormIsValid(emailState.isValid && passwordState.isValid);
    // setFormIsValid(enteredEmail.includes('@') && passwordState.value.trim().length > 6)
  };

  const validateEmailHandler = () => {
    
    dispatchEmail({type: 'USER_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'USER_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
