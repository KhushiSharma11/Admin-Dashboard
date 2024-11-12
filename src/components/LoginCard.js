import React, { useState } from "react";
import './LoginCard.css'; // Import the CSS file

function LoginCard({ role, onLogin }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    onLogin(role, id, password);
  };

  return (
    <div className="card">
      <h3 className="header">{role} Login</h3>
      <input
        type="text"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
      <button onClick={handleLoginClick} className="button">
        Login
      </button>
    </div>
  );
}

export default LoginCard;
