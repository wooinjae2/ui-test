import { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredUserName, setEnteredUserName] = useState(""); //destructuring;
  const [enteredUserAge, setEnteredUserAge] = useState(""); //destructuring;
  const [error, setError] = useState();
  
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log('nameInputRef.current.value', nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title : "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)."
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title : "Invalid Age",
        message: "Please enter a valid age (> 0)."
      })
      return;
    }
    props.saveUserInfo({ name: enteredName, age: enteredAge });
    console.log(enteredName, enteredAge);
    console.log(enteredAge);
  };

  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setEnteredUserAge(e.target.value);
  };

  

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={userNameChangeHandler}
          ref={nameInputRef}
        />
        <label htmlFor="age" type="number">
          Age
        </label>
        <input
          id="age"
          type="text"
          value={enteredUserAge}
          onChange={userAgeChangeHandler}
          // ref={ageInputRef}
        />
        <Button type="submit" onClick={addUserHandler}>
          Add User{" "}
        </Button>
      </form>
      {error ? (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={() => {
            setError();
          }}
        />
      ): null
      }
    </Card>
  );
};

export default UserForm;
