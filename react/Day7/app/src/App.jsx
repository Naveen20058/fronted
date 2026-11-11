
import React, { useState } from "react";

const App = () => {

  const [login, setLogin] = useState(false);

  return (
    <div>
      <h1>
        {login ? "Welcome User" : "Please Login"}
      </h1>

      <button onClick={() => setLogin(true)}>
        Login
      </button>

      <button onClick={() => setLogin(false)}>
        Logout
      </button>

    </div>
  );
};

export default App;
