import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <ul style={styles.list}>
        <li><Link to="/admin-dashboard" style={styles.link}>Admin Dashboard</Link></li>
        <li><Link to="/sales-manager-dashboard" style={styles.link}>Sales Manager Dashboard</Link></li>
        <li><Link to="/hr-dashboard" style={styles.link}>HR Dashboard</Link></li>
        <li><Link to="/labour-dashboard" style={styles.link}>Labour Dashboard</Link></li>
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "250px",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    height: "100vh",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    display: "block",
    padding: "10px 0",
    fontSize: "18px",
  },
};

export default Sidebar;
