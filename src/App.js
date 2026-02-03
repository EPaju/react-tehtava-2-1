import React from "react";
import Counter from "./components/counter";
import EventDemo from "./components/EventDemo";
import ControlledInput from "./components/ControlledInput";
import EffectDemo from "./components/EffectDemo";
import Parent from "./components/Parent";
import WindowWidthDemo from "./components/WindowWidthDemo";

function App() {
  return (
    <div className="App">
      <h1>React Tehtävä 2.1 Demo</h1>

      <section>
        <h2>1. Counter (useState)</h2>
        <Counter />
      </section>

      <section>
        <h2>2. EventDemo (onClick & onChange)</h2>
        <EventDemo />
      </section>

      <section>
        <h2>3. ControlledInput</h2>
        <ControlledInput />
      </section>

      <section>
        <h2>4. EffectDemo (useEffect)</h2>
        <EffectDemo />
      </section>

      <section>
        <h2>5-6. Parent & Child (props & children)</h2>
        <Parent />
      </section>

      <section>
        <h2>7. WindowWidthDemo (oma hook)</h2>
        <WindowWidthDemo />
      </section>
    </div>
  );
}

export default App;
