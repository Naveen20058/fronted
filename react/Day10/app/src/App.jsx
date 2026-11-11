
import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState("");
  const [student, setStudent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudent(name);
  };

  return (
    <>
      <h1>Student Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Student Name"
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Submit</button>

      </form>

      <h2>Student Name: {student}</h2>
    </>
  );
};

export default App;
