import React, { useState } from "react";
import PropTypes from "prop-types";
import "./LoginCard.css"; // Include card-specific styles

const LoginCard = ({ role, onLogin }) => {
  const [id, setId] = useState(""); // State to handle ID input
  const [password, setPassword] = useState(""); // State to handle Password input
  const [errorMessage, setErrorMessage] = useState(""); // To show error messages

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the inputs
    if (id.trim() === "" || password.trim() === "") {
      setErrorMessage("Please fill in all fields.");
    } else {
      setErrorMessage(""); // Clear previous error messages
      onLogin(role, id, password); // Pass the role, id, and password to the parent component
    }
  };

  return (
    <div className="card">
      <img
        src={`https://randomuser.me/api/portraits/men/1.jpg`} // Avatar image URL
        alt="Avatar"
        className="avatar"
      />
      <h3 className="roleHeader">{role}</h3>
      
      {/* Show error message if exists */}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>} 
      
      <form onSubmit={handleSubmit} className="form">
        {/* Input fields */}
        <input
          type="text"
          className="input"
          placeholder="Enter ID"
          value={id} // Bind the input value to the state
          onChange={(e) => setId(e.target.value)} // Update the state as the user types
        />
        <input
          type="password"
          className="input"
          placeholder="Enter Password"
          value={password} // Bind the password input value to the state
          onChange={(e) => setPassword(e.target.value)} // Update the state as the user types
        />
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
};

LoginCard.propTypes = {
  role: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginCard;
