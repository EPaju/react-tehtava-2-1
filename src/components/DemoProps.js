function Wrapper({ children }) {
  return <div style={{ border: "2px solid blue", padding: "10px" }}>{children}</div>;
}

// Demo käyttö
function DemoProps() {
  const [parentState, setParentState] = useState(0);

  return (
    <Wrapper>
      <h3>Parent state: {parentState}</h3>
      <button onClick={() => setParentState(parentState + 1)}>Lisää</button>
      <Child message={`Parent state on nyt ${parentState}`} />
    </Wrapper>
  );
}
