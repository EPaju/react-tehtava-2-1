import React, { useState, useEffect } from "react";

function EffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count muuttui:", count);

    return () => {
      console.log("Cleanup ennen seuraavaa effectia tai komponentin tuhoa");
    };
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

export default EffectDemo;
