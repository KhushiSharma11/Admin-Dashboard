import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AdminDashboard.css"; // Import the CSS file

function AdminDashboard() {
  const [salesManagers, setSalesManagers] = useState([
    { id: uuidv4(), name: "Sam" },
    { id: uuidv4(), name: "John" },
    { id: uuidv4(), name: "Joy" }, // New Sales Manager
  ]);
  const [labours, setLabours] = useState([
    { id: uuidv4(), name: "Aish" },
    { id: uuidv4(), name: "Rio" },
    { id: uuidv4(), name: "Emi" }, // New Labour
  ]);
  const [locations] = useState([
    { id: uuidv4(), manager: "Sam", location: "Noida" },
    { id: uuidv4(), manager: "John", location: "Delhi" },
    { id: uuidv4(), manager: "Joy", location: "Mumbai" }, // New Location
  ]);

  const [newSalesManagerName, setNewSalesManagerName] = useState("");
  const [newLabourName, setNewLabourName] = useState("");

  const handleAdd = (type, name) => {
    if (!name.trim()) {
      alert("Name cannot be empty");
      return;
    }

    const newItem = { id: uuidv4(), name };
    if (type === "salesManager") {
      setSalesManagers([...salesManagers, newItem]);
      setNewSalesManagerName("");
    } else if (type === "labour") {
      setLabours([...labours, newItem]);
      setNewLabourName("");
    }
  };

  const handleDelete = (type, id) => {
    if (type === "salesManager") {
      setSalesManagers(salesManagers.filter((item) => item.id !== id));
    } else if (type === "labour") {
      setLabours(labours.filter((item) => item.id !== id));
    }
  };

  const handleViewLocation = (managerName) => {
    const location = locations.find((loc) => loc.manager === managerName);
    alert(`Manager Location: ${location ? location.location : "Unknown"}`);
  };

  return (
    <div className="dashboard">
      <h2 className="header">Admin Dashboard</h2>

      <ManageSection
        title="Manage Sales Managers"
        items={salesManagers}
        newItemName={newSalesManagerName}
        setNewItemName={setNewSalesManagerName}
        onAdd={() => handleAdd("salesManager", newSalesManagerName)}
        onDelete={(id) => handleDelete("salesManager", id)}
      />

      <ManageSection
        title="Manage Labours"
        items={labours}
        newItemName={newLabourName}
        setNewItemName={setNewLabourName}
        onAdd={() => handleAdd("labour", newLabourName)}
        onDelete={(id) => handleDelete("labour", id)}
      />

      <div className="manage-section">
        <h3 className="section-title">View Locations</h3>
        <table className="table">
          <thead>
            <tr className="table-header">
              <th className="table-header-cell">Sales Manager</th>
              <th className="table-header-cell">Location</th>
              <th className="table-header-cell">Action</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((loc) => (
              <tr key={loc.id} className="table-row">
                <td className="table-cell">{loc.manager}</td>
                <td className="table-cell">{loc.location}</td>
                <td className="table-cell">
                  <button
                    className="view-button"
                    onClick={() => handleViewLocation(loc.manager)}
                  >
                    View Location
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ManageSection({
  title,
  items,
  newItemName,
  setNewItemName,
  onAdd,
  onDelete,
}) {
  return (
    <div className="manage-section">
      <h3 className="section-title">{title}</h3>
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder={`Enter ${title.split(" ")[1]} Name`}
        className="input"
      />
      <button className="add-button" onClick={onAdd}>
        Add New
      </button>
      <table className="table">
        <thead>
          <tr className="table-header">
            <th className="table-header-cell">Name</th>
            <th className="table-header-cell">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="table-row">
              <td className="table-cell">{item.name}</td>
              <td className="table-cell">
                <button
                  className="delete-button"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
