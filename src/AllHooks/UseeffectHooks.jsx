import { useEffect,useState } from "react";

import React from 'react'

const UseeffectHooks = () => {
    const [count,setCount] = useState(0)

    useEffect(() =>{
        console.log("i am mounting...");
    }, []);

    useEffect(() =>{
         console.log("count got updated",count);
         return function(){
            console.log("Returning count",count);
         }
    }, [count])


  return (
    <div>
      <h1>count is {count} </h1>
      <button onClick={() => setCount(count+1)}>Update</button>
    </div>
  )
}

export default UseeffectHooks
