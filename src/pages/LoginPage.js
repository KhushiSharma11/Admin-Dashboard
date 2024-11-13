import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginCard from "../components/LoginCard";
import { useAuth } from "./useAuth"; // Custom hook for authentication
import './LoginPage.css'; // Import the updated CSS

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState(null); // Handle error messages

  const handleLogin = async (role, id, password) => {
    try {
      // Example async login logic
      await login(role, id, password);
      navigate(`/dashboard/${role.toLowerCase()}`); // Navigate based on role
    } catch (error) {
      setErrorMessage("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h2 className="header">Login to Your Account</h2>
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        <div className="roleContainer">
          {["Admin", "Sales-Manager", "HR", "Labour"].map((role) => (
            <div key={role} className="cardWrapper">
              <LoginCard role={role} onLogin={handleLogin} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
