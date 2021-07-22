import { useState } from "react";

const TestComp = (props) => {
  const [count, setCount] = useState(1);
  const plusHandler = () => {
    setCount(count + 1);
  };

  const minusHandler = () => {
    setCount(count - 1);
  };

  console.log(count);
  return (
    <>
      <div>{count}</div>
      <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button>
    </>
  );
};

export default TestComp;
