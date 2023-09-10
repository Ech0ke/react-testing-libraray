import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function NameForm({ onSubmit }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "") return;

    onSubmit(name);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <br />
      <button>Submit</button>
    </form>
  );
}

export default NameForm;
