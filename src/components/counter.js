import React, { useState } from "react";

// Counter-komponentti demonstroi Reactin useState-hookin käyttöä
// useState mahdollistaa komponentin tilan hallinnan
function Counter() {
  // Tilamuuttuja 'count' ja sen päivitysfunktio 'setCount'
  // Alustetaan arvolla 0
  const [count, setCount] = useState(0);

  // Näytetään laskurin nykyinen arvo
  // Nappi, joka kasvattaa laskuria yhdellä klikkauksella
  // onClick on tapahtumankuuntelija
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}

export default Counter;