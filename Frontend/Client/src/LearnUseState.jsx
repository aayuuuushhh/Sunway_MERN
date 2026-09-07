// useState=>to manupulate the state using react react hooks
//state=>piece of info that change with time

import React, { useState } from "react";

const LearnUseState = () => {
  const [count, setCount] = useState(0);
  //onChange
  //onClick
  //onSubmit
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default LearnUseState;