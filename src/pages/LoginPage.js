import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

function LoginPage() {
  const navigate = useNavigate();

  const [adminID, setAdminID] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [salesManagerID, setSalesManagerID] = useState("");
  const [salesManagerPassword, setSalesManagerPassword] = useState("");
  const [hrID, setHrID] = useState("");
  const [hrPassword, setHrPassword] = useState("");
  const [labourID, setLabourID] = useState("");
  const [labourPassword, setLabourPassword] = useState("");
  const [role, setRole] = useState("");

  // Mock authentication data
  const users = {
    Admin: { id: "admin", password: "admin123" },
    "Sales Manager": { id: "manager", password: "manager123" },
    HR: { id: "hr", password: "hr123" },
    Labour: { id: "labour", password: "labour123" },
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "Admin" && adminID === users.Admin.id && adminPassword === users.Admin.password) {
      localStorage.setItem("userRole", "Admin");
      navigate("/admin-dashboard");
    } else if (role === "Sales Manager" && salesManagerID === users["Sales Manager"].id && salesManagerPassword === users["Sales Manager"].password) {
      localStorage.setItem("userRole", "Sales Manager");
      navigate("/sales-manager-dashboard");
    } else if (role === "HR" && hrID === users.HR.id && hrPassword === users.HR.password) {
      localStorage.setItem("userRole", "HR");
      navigate("/hr-dashboard");
    } else if (role === "Labour" && labourID === users.Labour.id && labourPassword === users.Labour.password) {
      localStorage.setItem("userRole", "Labour");
      navigate("/labour-dashboard");
    } else {
      alert("Invalid credentials or role.");
    }
  };

  return (
    <div style={styles.loginPage}>
      <div style={styles.loginContainer}>
        <h2 style={styles.header}>Login to Your Account</h2>
        <div style={styles.roleContainer}>
          {/* Admin and Sales Manager Login Boxes */}
          <div style={styles.loginColumn}>
            <div style={styles.loginBox}>
              <h3>Admin Login</h3>
              <InputField
                label="Admin ID"
                type="text"
                placeholder="Enter Admin ID"
                value={adminID}
                onChange={(e) => setAdminID(e.target.value)}
              />
              <InputField
                label="Password"
                type="password"
                placeholder="Enter Password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
              <Button label="Login" onClick={(e) => { setRole("Admin"); handleLogin(e); }} styleType="primary" />
            </div>
            <div style={styles.loginBox}>
              <h3>Sales Manager Login</h3>
              <InputField
                label="Sales Manager ID"
                type="text"
                placeholder="Enter Sales Manager ID"
                value={salesManagerID}
                onChange={(e) => setSalesManagerID(e.target.value)}
              />
              <InputField
                label="Password"
                type="password"
                placeholder="Enter Password"
                value={salesManagerPassword}
                onChange={(e) => setSalesManagerPassword(e.target.value)}
              />
              <Button label="Login" onClick={(e) => { setRole("Sales Manager"); handleLogin(e); }} styleType="primary" />
            </div>
          </div>

          {/* HR and Labour Login Boxes */}
          <div style={styles.loginColumn}>
            <div style={styles.loginBox}>
              <h3>HR Login</h3>
              <InputField
                label="HR ID"
                type="text"
                placeholder="Enter HR ID"
                value={hrID}
                onChange={(e) => setHrID(e.target.value)}
              />
              <InputField
                label="Password"
                type="password"
                placeholder="Enter Password"
                value={hrPassword}
                onChange={(e) => setHrPassword(e.target.value)}
              />
              <Button label="Login" onClick={(e) => { setRole("HR"); handleLogin(e); }} styleType="primary" />
            </div>
            <div style={styles.loginBox}>
              <h3>Labour Login</h3>
              <InputField
                label="Labour ID"
                type="text"
                placeholder="Enter Labour ID"
                value={labourID}
                onChange={(e) => setLabourID(e.target.value)}
              />
              <InputField
                label="Password"
                type="password"
                placeholder="Enter Password"
                value={labourPassword}
                onChange={(e) => setLabourPassword(e.target.value)}
              />
              <Button label="Login" onClick={(e) => { setRole("Labour"); handleLogin(e); }} styleType="primary" />
            </div>
          </div>
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
    background: "linear-gradient(45deg, #6a11cb, #2575fc)", // Gradient background
    padding: "50px",
    boxSizing: "border-box",
  },
  loginContainer: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "40px",
    width: "100%",
    maxWidth: "1200px",
    textAlign: "center",
    boxSizing: "border-box",
  },
  header: {
    marginTop: "0",
    marginBottom: "40px",
    fontSize: "28px",
    color: "#333",
    fontWeight: "600",
  },
  roleContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "30px",
    flexWrap: "wrap",
    paddingBottom: "30px",
  },
  loginColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    maxWidth: "540px",
  },
  loginBox: {
    width: "100%",
    maxHeight: "auto",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    overflow: "hidden",
    boxSizing: "border-box",
  },
};

export default LoginPage;
