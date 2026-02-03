import React, { useState, useEffect } from "react";

// Effect-komponentti demonstroi Reactin useEffect-hookin käyttöä
// useEffect: suoritetaan sivuvaikutuksia (side effects) aina, kun riippuvuudet muuttuvat
function Effect() {
  // Tilamuuttuja 'count' ja sen päivitysfunktio 'setCount'
  // Alustetaan arvolla 0
  const [count, setCount] = useState(0);

  // useEffect suoritetaan aina, kun 'count' muuttuu
  useEffect(() => {
    // Sivuvaikutus: tulostetaan konsoliin nykyinen count
    console.log("Count muuttui:", count);

    // Cleanup-funktio suoritetaan ennen seuraavaa effectia tai komponentin purkautuessa
    return () => {
      console.log("Cleanup ennen seuraavaa effectia tai komponentin tuhoa");
    };
  }, [count]); // riippuvuustaulukko: effect suoritetaan vain, kun 'count' muuttuu

  // Näytetään nykyinen laskurin arvo
  // Nappi, joka kasvattaa laskuria yhdellä klikkauksella
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

export default Effect;
