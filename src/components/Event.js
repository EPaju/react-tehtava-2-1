import React, { useState } from "react";

// Event-komponentti demonstroi Reactin tapahtumankuuntelijoita (events)
// Käytetään kahta tapahtumaa:
// 1. onClick - napin klikkaus
// 2. onChange - inputin arvon muutos
function Event() {
  // Tilamuuttuja 'text' ja sen päivitysfunktio 'setText'
  // Alustetaan tyhjällä merkkijonolla
  const [text, setText] = useState("");

  // Funktio, joka suoritetaan napin klikattaessa
  const handleClick = () => {
    // Näyttää alert-viestin
    alert("You pushed the button!");
  };

  // Funktio, joka suoritetaan kun inputin arvo muuttuu
  const handleChange = (e) => {
    // Päivitetään Reactin tila käyttäjän syötteen perusteella
    setText(e.target.value);
  };

  // Nappi, jonka klikattavuus on määritelty onClick-tapahtumalla
  // Input, jonka arvo on "kontrolloitu" Reactin tilan kautta
  // Näytetään reaaliaikaisesti käyttäjän kirjoittama teksti
  return (
    <div>
      <button onClick={handleClick}>Klick me!</button>
      <input type="text" value={text} onChange={handleChange} />
      <p>Your text: {text}</p>
    </div>
  );
}

export default Event;