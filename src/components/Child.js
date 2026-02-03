import React from "react";

// Child-komponentti vastaanottaa tiedon Parent-komponentilta propsin avulla
// Props: { message } - merkkijono, joka näytetään Childissa
export default function Child({ message }) {
  return (
    // Näytetään Parentilta saatu viesti
    <p>Child says: {message}</p>
  );
}
