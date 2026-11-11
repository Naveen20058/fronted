
import React, { useState } from "react";

function App() {

  const [page, setPage] = useState("register");

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: ""
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const [currentUser, setCurrentUser] = useState(null);

  const [error, setError] = useState("");

  // Register input
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  // Login input
  const handleLoginChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  };

  // Register
  const handleRegister = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.username ||
      !formData.password
    ) {
      setError("Please fill all fields");
      return;
    }

    const exists = users.find(
      (user) =>
        user.username === formData.username ||
        user.email === formData.email
    );

    if (exists) {
      setError("User already exists");
      return;
    }

    const newUser = {
      id: Date.now(),
      ...formData
    };

    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    setFormData({
      name: "",
      email: "",
      username: "",
      password: ""
    });

    setError("Registration Successful");

    setPage("login");
  };

  // Login
  const handleLogin = (event) => {
    event.preventDefault();

    const user = users.find(
      (item) =>
        item.username === loginData.username &&
        item.password === loginData.password
    );

    if (user) {
      setCurrentUser(user);

      localStorage.setItem(
        "loggedUser",
        JSON.stringify(user)
      );

      setError("");

      setPage("dashboard");
    } else {
      setError("Invalid Username or Password");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("loggedUser");

    setCurrentUser(null);

    setLoginData({
      username: "",
      password: ""
    });

    setPage("login");
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>

      <h1>User Authentication</h1>

      {/* REGISTER PAGE */}

      {page === "register" && (
        <>
          <h2>Register</h2>

          <form onSubmit={handleRegister}>

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />

            <br /><br />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />

            <br /><br />

            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
            />

            <br /><br />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />

            <br /><br />

            <button type="submit">Register</button>

          </form>

          <p>{error}</p>

          <p>
            Already have an account?
            <button onClick={() => {
              setError("");
              setPage("login");
            }}>
              Login
            </button>
          </p>
        </>
      )}

      {/* LOGIN PAGE */}

      {page === "login" && (
        <>
          <h2>Login</h2>

          <form onSubmit={handleLogin}>

            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={loginData.username}
              onChange={handleLoginChange}
            />

            <br /><br />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={handleLoginChange}
            />

            <br /><br />

            <button type="submit">Login</button>

          </form>

          <p>{error}</p>

          <p>
            Don't have an account?
            <button onClick={() => {
              setError("");
              setPage("register");
            }}>
              Register
            </button>
          </p>
        </>
      )}

      {/* DASHBOARD PAGE */}

      {page === "dashboard" && currentUser && (
        <>
          <h2>Welcome to Dashboard</h2>

          <h3>User Details</h3>

          <p>ID: {currentUser.id}</p>

          <p>Name: {currentUser.name}</p>

          <p>Email: {currentUser.email}</p>

          <p>Username: {currentUser.username}</p>

          <button onClick={handleLogout}>
            Logout
          </button>
        </>
      )}

    </div>
  );
}

export default App;
