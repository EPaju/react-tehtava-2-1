import React, { useState } from "react";
import Child from "./Child"; // Tuodaan Child-komponentti, joka vastaanottaa propsin

// Parent-komponentti demonstroi Reactin propsien käyttöä ja tilan hallintaa
export default function Parent() {
  // Tilamuuttuja 'parentState' ja sen päivitysfunktio 'setParentState'
  // Alustetaan arvolla 0
  const [parentState, setParentState] = useState(0);

  // Parentin otsikko
  // Nappi, joka kasvattaa Parentin tilaa yhdellä klikkauksella
  // Kun tila muuttuu, Child-komponentti renderöityy uudelleen
  // Child-komponentti saa propsin 'message', joka sisältää Parentin nykyisen tilan
  // Kun parentState muuttuu:
    // 1. Parent renderöityy uudelleen
    // 2. Child renderöityy uudelleen ja saa uuden propsin
  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={() => setParentState(parentState + 1)}>Add Parent state</button>
      <Child message={`Parent state is now ${parentState}`} />
    </div>
  );
}
