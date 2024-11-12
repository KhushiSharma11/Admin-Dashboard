import React from "react";
import { useNavigate } from "react-router-dom";
import LoginCard from "../components/LoginCard";
import { useAuth } from "./useAuth"; // Custom hook for authentication

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (role, id, password) => {
    try {
      // Example async login logic
      await login(role, id, password);
      navigate("/dashboard"); // Navigate on success
    } catch (error) {
      throw new Error("Invalid credentials");
    }
  };

  return (
    <div style={styles.loginPage}>
      <div style={styles.loginContainer}>
        <h2 style={styles.header}>Login to Your Account</h2>
        <div style={styles.roleContainer}>
          {["Admin", "Sales Manager", "HR", "Labour"].map((role) => (
            <div key={role} style={styles.cardWrapper}>
              <LoginCard role={role} onLogin={handleLogin} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  loginPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    background: "linear-gradient(135deg, #6e7dff, #42d8c9)",
    padding: "50px",
  },
  loginContainer: {
    backgroundColor: "#fff",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
    borderRadius: "15px",
    padding: "50px",
    width: "100%",
    maxWidth: "1200px",
    textAlign: "center",
  },
  header: {
    marginTop: "0",
    marginBottom: "40px",
    fontSize: "32px",
    color: "#333",
    fontWeight: "700",
  },
  roleContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardWrapper: {
    flex: "1 1 calc(50% - 40px)",
    padding: "20px",
  },
};

export default LoginPage;
