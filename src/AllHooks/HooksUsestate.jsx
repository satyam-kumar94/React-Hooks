import { useState } from 'react';

function HooksUsestate() {
  let [count, setCount] = useState(0)
  const addValue = () =>{
    if(count<5){
      setCount(count+1 )
      
    }
  }

  const removeValue = () => {
    if(count>0){
      setCount(count-1)
    }
  }
  const resetValue = () =>{
    setCount(0)
  }

  return (
    <>
    <div>
     <h1>Count: = {count}</h1>
     <h6>Number is: {count % 2 === 0 ? "Even" : "Odd"}</h6>
     <button onClick={addValue}>Add</button>
     <button onClick={removeValue}>Remove</button>
     <button onClick={resetValue}>Reset</button>
     </div>
    </>
  )
}

export default HooksUsestate

