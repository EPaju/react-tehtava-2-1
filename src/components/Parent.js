import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [parentState, setParentState] = useState(0);

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={() => setParentState(parentState + 1)}>Add Parent state</button>
      <Child message={`Parent state is now ${parentState}`} />
    </div>
  );
}
