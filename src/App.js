import React from "react";
// Tuodaan kaikki komponentit, jotka demonstroivat Reactin perusteita ohjeistuksen mukaisesti
import Counter from "./components/counter";                 // 1. useState (laskuri)
import Event from "./components/Event";                     // 2. Tapahtumat (onClick & onChange)
import ControlledInput from "./components/ControlledInput"; // 3. Controlled state (inputin tila hallinnassa)
import Effect from "./components/Effect";                   // 4. useEffect
import Parent from "./components/Parent";                   // 5-6. Props ja children
import RandomNumber from "./components/RandomNumber";       // 7. Oma hook (RandomNumber)
import './App.css';                                         // CSS-tyylit

function App() {
  return (
    <div className="App">
      <h1>React Tehtävä 2.1</h1>

      {/*  1. Counter  */}
      <section>
        <h2>1. Counter</h2>
        {/* Counter-komponentti näyttää laskurin ja napin, joka kasvattaa count-arvoa */}
        <Counter />
      </section>

      {/*  2. Events */}
      <section>
        <h2>2. Events</h2>
        {/* Event-komponentti demonstroi: 
            - onClick: napin klikkaus
            - onChange: inputin arvon muutos
            Kaikki tilamuutokset hallitaan Reactin stateilla */}
        <Event />
      </section>

      {/*  3. Controlled State  */}
      <section>
        <h2>3. Controlled State</h2>
        {/* ControlledInput-komponentti hallitsee inputin arvon Reactin tilan kautta,
            näin inputin arvo voidaan lukea ja päivittää ohjelmallisesti */}
        <ControlledInput />
      </section>

      {/*  4. UseEffect  */}
      <section>
        <h2>4. UseEffect</h2>
        {/* Effect-komponentti demonstroi useEffect-hookin käyttöä:
            - Sivuvaikutuksena voi olla esim. konsoliloki
            - Cleanup-funktion käyttö komponentin purkautuessa
            - Riippuvuustaulukko määrittää, milloin effect suoritetaan */}
        <Effect />
      </section>

      {/*  5-6. Props  */}
      <section>
        <h2>5-6. Props</h2>
        {/* Parent-komponentti lähettää tietoa Child-komponentille propsien avulla
            - Kun Parentin tila muuttuu, Child renderöityy uudelleen
            - Children-prop demonstroi komponentin joustavan sisällön käyttöä */}
        <Parent />
      </section>

      {/*  7. Oma hook  */}
      <section>
        <h2>7. Oma hook</h2>
        {/* RandomNumber-komponentti käyttää omaa hookia (useRandomNumber):
            - Hook palauttaa satunnaisluvun ja funktion sen päivittämiseen
            - Näyttää, miten minun oma hook toimii ja päivittyy komponentissa */}
        <RandomNumber />
      </section>
    </div>
  );
}

export default App;
