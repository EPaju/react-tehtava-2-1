import { useState } from "react";

// Oma custom hook, joka on: useRandomNumber
// Palauttaa satunnaisluvun (num)
// Palauttaa funktion (generate), jolla satunnaisluku päivitetään
function useRandomNumber(initial = 0) {
  // Tilamuuttuja 'num' ja päivitysfunktio 'setNum'
  const [num, setNum] = useState(initial);

  // Funktio uuden satunnaisluvun generointiin välillä 0–99
  const generate = () => setNum(Math.floor(Math.random() * 100));
  // Palautetaan taulukko: [nykyinen luku, generointifunktio]
  return [num, generate];
}

// Demo-komponentti hookin käyttöön
export default function RandomNumber() {
  // Käytetään omaa hookia: saadaan luku ja sen päivitysfunktio
  const [number, generate] = useRandomNumber();

  // Otsikko komponentille
  // Näytetään hookin palauttama satunnaisluku
  // Nappi, joka generoi uuden satunnaisluvun
  // onClick kutsuu hookin generate-funktiota
  return (
    <div>
      <h3>Random Number</h3>
      <p>Random number: {number}</p>
      <button onClick={generate}>Klick for random number!</button>
    </div>
  );
}
