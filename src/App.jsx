import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("1-234-567-8900");
  const [showAll, setShowAll] = useState(true);
  const [filterStr, setFilterStr] = useState("");

  const personsToShow = showAll
    ? persons
    : persons.filter((person) => person.name.includes(filterStr));

  const addName = (event) => {
    event.preventDefault();

    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} already exists!`);
      return;
    }

    const newPersonObj = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(newPersonObj));
    setNewName("");

    console.log("button clicked ", event.target);
  };

  const handleFilterChange = (event) => {
    setFilterStr(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addFilter = (event) => {
    event.preventDefault();
    if (showAll) {
      setFilterStr("");
      console.log("cleared filter");
    } else {
      setFilterStr(filterStr);
      console.log("set filter str ", filterStr);
    }
  };

  return (
    <div>
      <h1>phonebook</h1>
      <h2>filter by name</h2>
      <div>
        <form onSubmit={addFilter}>
          <input value={filterStr} onChange={handleFilterChange} />
          <button type="submit" onClick={() => setShowAll(!showAll)}>
            {showAll ? "set filter" : "clear filter"}
          </button>
        </form>
      </div>
      <h2>add number</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.id}>
            {person.id}: {person.name} :: {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
