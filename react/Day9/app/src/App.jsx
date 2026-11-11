
import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState("Arun");

  const changeName = () => {
    setName("Kumar");
  };

  return (
    <>
      <h1>Student Name: {name}</h1>

      <button onClick={changeName}>
        Change Name
      </button>
    </>
  );
};

export default App;
