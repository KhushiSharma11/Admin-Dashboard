import React, { useState } from "react";

function LoginCard({ role, onLogin }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      // Simulate login or use actual login logic
      await onLogin(role, "demoID", "demoPassword");
    } catch (error) {
      setErrorMessage(error.message || "Login failed!");
    } finally {
      setIsLoading(false);
    }
  };

  // Map roles to profile images
  const roleImages = {
    Admin: "https://via.placeholder.com/100?text=Admin",       // Replace with actual URLs
    "Sales Manager": "https://via.placeholder.com/100?text=Sales",
    HR: "https://via.placeholder.com/100?text=HR",
    Labour: "https://via.placeholder.com/100?text=Labour",
  };

  return (
    <div style={styles.card} onClick={!isLoading ? handleLogin : undefined}>
      <img src={roleImages[role]} alt={`${role} Profile`} style={styles.profileImage} />
      <h3 style={styles.roleTitle}>{role}</h3>
      <button style={styles.loginButton} disabled={isLoading}>
        {isLoading ? "Logging in..." : `Login as ${role}`}
      </button>
      {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    width: "100%",
    boxSizing: "border-box",
  },
  profileImage: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "15px",
    objectFit: "cover",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  roleTitle: {
    fontSize: "22px",
    color: "#333",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  loginButton: {
    backgroundColor: "#6e7dff",
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.3s",
  },
  errorMessage: {
    color: "red",
    marginTop: "10px",
    fontSize: "14px",
  },
};

export default LoginCard;
