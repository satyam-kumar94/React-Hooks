import React, { useMemo, useState } from "react";

const UsememoHook = () => {

  const [Counter, setCounter] = useState(0);
  const [Counter2, setCounter2] = useState(0);

  const increment1 = () => {
    setCounter(Counter + 1);
  };

  const increment2 = () => {
    setCounter2(Counter2 + 1);
  };

  const isEven = useMemo(() => {
    console.warn("Function Calling")
    let i = 0;
    while(i<200000000) i++;
    return Counter % 2 === 0;
  },[Counter])
  
//   const isEven = () => {
//     console.warn("Function Calling")
//     let i = 0;
//     while(i<200000000) i++;
//     return Counter % 2 === 0;
//   };

  return (
    <div>
      <h1>{isEven ? "Even" : "Odd"}</h1>
      <button onClick={increment1}>BTN1:{Counter}</button>
      <button onClick={increment2}>BTN2:{Counter2}</button>
    </div>
  );
};

export default UsememoHook;
