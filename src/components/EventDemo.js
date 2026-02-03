import React, { useState } from "react";

function EventDemo() {
  const [text, setText] = useState("");

  const handleClick = () => {
    alert("Painoit nappia!");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <button onClick={handleClick}>Klikkaa minua</button>
      <input type="text" value={text} onChange={handleChange} />
      <p>Syöttämäsi teksti: {text}</p>
    </div>
  );
}

export default EventDemo;