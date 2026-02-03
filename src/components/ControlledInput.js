import React, { useState } from "react";

function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name} // controlled
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default ControlledInput;
