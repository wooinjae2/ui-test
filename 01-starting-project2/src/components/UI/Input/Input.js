import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };


  //useImperativeHandle
  //2번째 parameter는 function을 넘겨주고, 이 Ref를 가진 상우 컴포넌트에서 접근할수 있는 데이터를 전달한다. 
  // 상위 객체에서는 ref를 통해 여기서 return한 객체들에 접근할 수 있다.
  useImperativeHandle(ref, () => {
    return {
      activate: activate,
    };
  });
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
