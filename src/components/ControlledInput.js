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
      <p>Hei, {name}!</p>
    </div>
  );
}

export default ControlledInput;
