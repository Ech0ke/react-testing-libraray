import Counter from "./Counter";
import NameForm from "./NameForm";

function App() {
  return (
    <>
      <Counter />
      <br />
      <NameForm onSubmit={(name) => alert(name)} />
    </>
  );
}

export default App;
