import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div style={styles.dashboardPage}>
      <h1>Admin Dashboard</h1>
      <div style={styles.dashboardContent}>
        <div style={styles.card}>
          <h3>Manage Sales Managers</h3>
          <Link to="/manage-sales-managers">Manage</Link>
        </div>
        <div style={styles.card}>
          <h3>Manage Labourers</h3>
          <Link to="/manage-labourers">Manage</Link>
        </div>
        <div style={styles.card}>
          <h3>View Locations</h3>
          <Link to="/view-locations">View</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  dashboardPage: {
    padding: "20px",
    textAlign: "center",
  },
  dashboardContent: {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
    marginTop: "40px",
  },
  card: {
    width: "250px",
    padding: "20px",
    backgroundColor: "#f4f6f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
};

export default AdminDashboard;
