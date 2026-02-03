import React from "react";
import Counter from "./components/counter";
import EventDemo from "./components/EventDemo";
import ControlledInput from "./components/ControlledInput";
import EffectDemo from "./components/EffectDemo";
import Parent from "./components/Parent";
import RandomNumberDemo from "./components/RandomNumberDemo";
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>React Tehtävä 2.1</h1>

      <section>
        <h2>1. Counter</h2>
        <Counter />
      </section>

      <section>
        <h2>2. Events</h2>
        <EventDemo />
      </section>

      <section>
        <h2>3. Controlled State</h2>
        <ControlledInput />
      </section>

      <section>
        <h2>4. UseEffect</h2>
        <EffectDemo />
      </section>

      <section>
        <h2>5-6. Props</h2>
        <Parent />
      </section>

      <section>
        <h2>7. Oma hook</h2>
        <RandomNumberDemo />
      </section>
    </div>
  );
}

export default App;
