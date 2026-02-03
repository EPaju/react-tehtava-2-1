import React, { useState } from "react";

// ControlledInput-komponentti demonstroi "Controlled State" -konseptia
// Controlled state tarkoittaa, että inputin arvo hallitaan Reactin tilan kautta
function ControlledInput() {
    // Tilamuuttuja 'name' ja sen päivitysfunktio 'setName'
    // Alustetaan tyhjällä merkkijonolla
  const [name, setName] = useState("");
    // Input-elementti, jonka arvo on "kontrolloitu" Reactin tilan kautta
    // - value={name} pitää inputin arvon synkronoituna state-muuttujan kanssa
    // - onChange päivittää statea aina kun käyttäjä kirjoittaa
  return (
    <div>
      <input
        type="text"
        value={name} // controlled
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
    // Näytetään käyttäjän kirjoittama nimi reaaliaikaisesti
  );
}

export default ControlledInput;
