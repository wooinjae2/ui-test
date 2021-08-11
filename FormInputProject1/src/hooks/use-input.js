import { useReducer, useState } from "react";

const inputStateReducer = (state, action) => {
   if(action.type==='INPUT'){
       return {value: action.value, isTouched: state.isTouched}

    }else if(action.type==="BLUR"){
        return{isTouched: true, value: state.value}
        
    }else if(action.type==='RESET'){
        return{value: '', isTouched: true}

    }
    return inputStateReducer;
}

const initialInputState = {
        value: '',
        isTouched: false
}
const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState );

    

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;


    const valueChangeHandler = event => {
        dispatch({type: 'INPUT', value: event.target.value});
        
    }
 
    const inputBlurHandler = () => {
        dispatch({type: 'BLUR'});
    }
    
    const reset = () => {
        dispatch({type: 'RESET'});
    }

    return {
        value: inputState.value, isValid: valueIsValid, hasError, valueChangeHandler, inputBlurHandler, reset
    }
};

export default useInput;