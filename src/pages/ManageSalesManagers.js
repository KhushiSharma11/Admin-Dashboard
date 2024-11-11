// src/pages/ManageSalesManagers.js

import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

function ManageSalesManagers() {
  const [salesManagers, setSalesManagers] = useState([]);
  const [newManagerID, setNewManagerID] = useState("");
  const [newManagerName, setNewManagerName] = useState("");

  // Handle Add New Sales Manager
  const handleAddSalesManager = (e) => {
    e.preventDefault();
    const newManager = { id: newManagerID, name: newManagerName };
    setSalesManagers([...salesManagers, newManager]);
    setNewManagerID("");
    setNewManagerName("");
  };

  // Handle Delete Sales Manager
  const handleDeleteSalesManager = (id) => {
    setSalesManagers(salesManagers.filter((manager) => manager.id !== id));
  };

  return (
    <div style={styles.page}>
      <h2>Manage Sales Managers</h2>
      <form onSubmit={handleAddSalesManager} style={styles.form}>
        <InputField
          label="Sales Manager ID"
          type="text"
          placeholder="Enter Sales Manager ID"
          value={newManagerID}
          onChange={(e) => setNewManagerID(e.target.value)}
        />
        <InputField
          label="Sales Manager Name"
          type="text"
          placeholder="Enter Sales Manager Name"
          value={newManagerName}
          onChange={(e) => setNewManagerName(e.target.value)}
        />
        <Button label="Add Sales Manager" onClick={handleAddSalesManager} />
      </form>
      <div style={styles.managerList}>
        <h3>Sales Manager List</h3>
        {salesManagers.length === 0 ? (
          <p>No Sales Managers found.</p>
        ) : (
          salesManagers.map((manager) => (
            <div key={manager.id} style={styles.managerItem}>
              <span>{manager.name}</span>
              <button onClick={() => handleDeleteSalesManager(manager.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
    textAlign: "center",
  },
  form: {
    marginBottom: "20px",
  },
  managerList: {
    marginTop: "20px",
  },
  managerItem: {
    marginBottom: "10px",
  },
};

export default ManageSalesManagers;
