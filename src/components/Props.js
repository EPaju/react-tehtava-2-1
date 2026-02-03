// Wrapper-komponentti demonstroi "children"-propin käyttöä
// 'children' sisältää kaiken JSX-sisällön, joka sijoitetaan Wrapperin sisälle
function Wrapper({ children }) {
  return <div style={{ border: "2px solid blue", padding: "10px" }}>{children}</div>;
}

// Props-komponentti näyttää esimerkin Parentin tilan ja Childin käytöstä
// Käytetään samalla Wrapper-komponenttia
function Props() {
  // Tilamuuttuja 'parentState' ja sen päivitysfunktio 'setParentState'
  const [parentState, setParentState] = useState(0);

  // Näytetään Parentin nykyinen tila
  // Nappi kasvattaa Parentin tilaa yhdellä klikkauksella
  // Child-komponentti saa propsin 'message'
  // Kun parentState muuttuu, Child renderöityy uudelleen ja saa uuden propsin
  return (
    <Wrapper>
      <h3>Parent state: {parentState}</h3>
      <button onClick={() => setParentState(parentState + 1)}>Lisää</button>
      <Child message={`Parent state on nyt ${parentState}`} />
    </Wrapper>
  );
}
