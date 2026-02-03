import React, { useState } from "react";

function EventDemo() {
  const [text, setText] = useState("");

  const handleClick = () => {
    alert("You pushed the button!");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <button onClick={handleClick}>Klick me!</button>
      <input type="text" value={text} onChange={handleChange} />
      <p>Your text: {text}</p>
    </div>
  );
}

export default EventDemo;