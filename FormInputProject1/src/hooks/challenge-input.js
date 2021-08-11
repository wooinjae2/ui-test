import {useState} from 'react';



const useChallenge = (validation) => {
    const [value, setValue] = useState('');
    const [valid, setValid] = useState('');
    const [touch, setTouch] = useState('');
    
    const changeHandler = (e) => {
        setValue(e.target.value);
        if(validation(e.target.value)){
            setValid(true);
        }else{
            setValid(false);
        }
    }
        
    

    const blurHandler = (e) => {
        setTouch(true);
    }

    const reset = () => {
        setValue('');
        setValid('');
        setTouch(false);
    }
    

    


    return {
        value,
        valid,
        touch,
        changeHandler,
        blurHandler,
        reset,

    }
}

export default useChallenge;