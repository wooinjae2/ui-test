import useChallenge from "../hooks/challenge-input";

const BasicForm = (props) => {
  const {
    value: nameValue,
    valid: nameValid,
    touch: nameTouch,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useChallenge((value) => {
    return value.trim() !== "";
  });

  const {
    value: lastNameValue,
    valid: lastNameValid,
    touch: lastNameTouch,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useChallenge((value) => {
    return value.trim() !== "";
  });

  const {
    value: emailValue,
    valid: emailValid,
    touch: emailTouch,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useChallenge((value) => {
    return value.trim() !== "";
  });
  /**
   *
   *
   */

  const submitHander = (e) => {
    e.preventDefault();

    if (nameValid && emailValid && lastNameValid) {
      nameReset();
      lastNameReset();
      emailReset();
    }
  };

  const emailClass = emailTouch && emailValid ? 'form-control' : 'form-control invalid' ;
  const nameClass = nameTouch && nameValid ? 'form-control' : 'form-control invalid' ;
  const lastNameClass = lastNameTouch && lastNameValid ? 'form-control' : 'form-control invalid' ;

  console.log('emailClass, nameClass, lastNameClass', emailClass, nameClass, lastNameClass) 
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            className={nameClass}
            type="text"
            id="name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" 
          className={lastNameClass}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          value={lastNameValue}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" 
        className={emailClass}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={emailValue}
        />
      </div>
      <div className="form-actions">
        <button onClick={submitHander}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
