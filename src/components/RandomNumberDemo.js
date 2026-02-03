import { useState } from "react";

// Oma hook: palauttaa satunnaisluvun ja funktion sen päivittämiseen
function useRandomNumber(initial = 0) {
  const [num, setNum] = useState(initial);

  const generate = () => setNum(Math.floor(Math.random() * 100));
  return [num, generate];
}

// Demo-komponentti hookin käyttöön
export default function RandomNumberDemo() {
  const [number, generate] = useRandomNumber();

  return (
    <div>
      <h3>Random Number</h3>
      <p>Random number: {number}</p>
      <button onClick={generate}>Klick for random number!</button>
    </div>
  );
}
