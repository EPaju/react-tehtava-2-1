import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // lähtöarvo 0

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Lisää 1</button>
    </div>
  );
}

export default Counter;