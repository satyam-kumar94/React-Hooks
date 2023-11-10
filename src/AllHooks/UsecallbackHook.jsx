import React, { useCallback, useState } from "react";
import Child from "./Child";

const UsecallbackHook = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState([]);

  const increment = () => {
    setCount(count+ 1);
  };

  const fun = useCallback(() => {
    console.log("some operation");
  }, count2);

  return (
    <div>
      <h1>Counter Value: {count} </h1>
      <Child count2={count2} fun={fun} />
      <button onClick={increment}>Add</button>
    </div>
  );
};

export default UsecallbackHook;
