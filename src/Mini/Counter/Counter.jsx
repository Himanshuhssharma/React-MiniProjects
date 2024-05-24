import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const addFunc = () => {
    if (count < 20) setCount(count + 1);
  };

  const removeFunc = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={addFunc}>Add</button>
      <h4>{count}</h4>
      <button onClick={removeFunc}>Remove</button>
    </div>
  );
};

export default Counter;
