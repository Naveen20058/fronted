
import React, { useState, useEffect } from "react";

function App() {

  // Store form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    username: ""
  });

  // Store users
  const [users, setUsers] = useState([]);

  // Store error message
  const [error, setError] = useState("");

  // GET API - Fetch existing users
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });

  }, []);

  // Handle input change
  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  };

  // POST API - Register new user
  const handleSubmit = (event) => {

    event.preventDefault();

    // Form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.username
    ) {
      setError("Please fill all fields");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Please enter a valid email");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Phone number must contain 10 digits");
      return;
    }

    setError("");

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(formData)

    })
      .then((response) => response.json())
      .then((data) => {

        // Display newly registered user
        setUsers((prevUsers) => [
          ...prevUsers,
          data
        ]);

        // Clear input fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          username: ""
        });

        alert("User Registered Successfully!");

      })
      .catch((error) => {
        console.log("Error:", error);
      });

  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>User Registration</h1>

      <form onSubmit={handleSubmit}>

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
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
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

        <button type="submit">
          Register
        </button>

      </form>

      <p style={{ color: "red" }}>{error}</p>

      <h2>Registered Users</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default App;
