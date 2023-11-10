import React, { memo } from "react";

const Child = ({count2, setCount2}) => {
  console.log("child render");

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default memo(Child);
