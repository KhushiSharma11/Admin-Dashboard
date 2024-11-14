import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [salesManagers, setSalesManagers] = useState([
    { id: nanoid(6), name: "Sam", location: "Delhi" },
    { id: nanoid(6), name: "John", location: "Noida" },
    { id: nanoid(6), name: "Joy", location: "Greater Noida" },
  ]);
  const [labours, setLabours] = useState([
    { id: nanoid(6), name: "Aish", location: "Greater Noida" },
    { id: nanoid(6), name: "Rio", location: "Delhi" },
    { id: nanoid(6), name: "Emi", location: "Noida" },
  ]);

  const [newSalesManagerName, setNewSalesManagerName] = useState("");
  const [newSalesManagerLocation, setNewSalesManagerLocation] = useState("");
  const [newLabourName, setNewLabourName] = useState("");
  const [newLabourLocation, setNewLabourLocation] = useState("");

  const [editItem, setEditItem] = useState(null); 

  const locations = [
    "Noida", 
    "Delhi",
    "Greater Noida",

  ];

  const handleAdd = (type, name, location) => {
    if (!name.trim() || !location.trim()) {
      alert("Name and location cannot be empty!");
      return;
    }

    const newItem = { id: nanoid(6), name, location };
    if (type === "salesManager") {
      setSalesManagers([...salesManagers, newItem]);
      setNewSalesManagerName("");
      setNewSalesManagerLocation("");
    } else if (type === "labour") {
      setLabours([...labours, newItem]);
      setNewLabourName("");
      setNewLabourLocation("");
    }
  };

  const handleDelete = (type, id) => {
    if (type === "salesManager") {
      setSalesManagers(salesManagers.filter((item) => item.id !== id));
    } else if (type === "labour") {
      setLabours(labours.filter((item) => item.id !== id));
    }
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleSave = (type, updatedItem) => {
    if (type === "salesManager") {
      setSalesManagers(
        salesManagers.map((item) => (item.id === updatedItem.id ? updatedItem : item))
      );
    } else if (type === "labour") {
      setLabours(
        labours.map((item) => (item.id === updatedItem.id ? updatedItem : item))
      );
    }
    setEditItem(null); 
  };

  return (
    <div className="dashboard">
      <h2 className="header">Admin Dashboard</h2>

      {}
      <ManageSection
        title="Manage Sales Managers"
        items={salesManagers}
        newItemName={newSalesManagerName}
        setNewItemName={setNewSalesManagerName}
        newItemLocation={newSalesManagerLocation}
        setNewItemLocation={setNewSalesManagerLocation}
        locations={locations}
        onAdd={() =>
          handleAdd("salesManager", newSalesManagerName, newSalesManagerLocation)
        }
        onDelete={(id) => handleDelete("salesManager", id)}
        onEdit={handleEdit}
        onSave={(updatedItem) => handleSave("salesManager", updatedItem)}
        editItem={editItem}
      />

      <ManageSection
        title="Manage Labours"
        items={labours}
        newItemName={newLabourName}
        setNewItemName={setNewLabourName}
        newItemLocation={newLabourLocation}
        setNewItemLocation={setNewLabourLocation}
        locations={locations}
        onAdd={() => handleAdd("labour", newLabourName, newLabourLocation)}
        onDelete={(id) => handleDelete("labour", id)}
        onEdit={handleEdit}
        onSave={(updatedItem) => handleSave("labour", updatedItem)}
        editItem={editItem}
      />
    </div>
  );
}

function ManageSection({
  title,
  items,
  newItemName,
  setNewItemName,
  newItemLocation,
  setNewItemLocation,
  locations,
  onAdd,
  onDelete,
  onEdit,
  onSave,
  editItem,
}) {
  return (
    <div className="manage-section">
      <h3>{title}</h3>
      <div className="form-group">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder={`Enter ${title.split(" ")[1]} Name`}
          className="form-control"
        />
        <select
          value={newItemLocation}
          onChange={(e) => setNewItemLocation(e.target.value)}
          className="form-control"
        >
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <button className="add-button" onClick={onAdd}>
          Add New
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              {editItem?.id === item.id ? (
                <>
                  <td>{item.id}</td>
                  <td>
                    <input
                      type="text"
                      value={editItem.name}
                      onChange={(e) =>
                        onSave({ ...editItem, name: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <select
                      value={editItem.location}
                      onChange={(e) =>
                        onSave({ ...editItem, location: e.target.value })
                      }
                    >
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      className="save-button"
                      onClick={() => onSave(editItem)}
                    >
                      Save
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.location}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() => onEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => onDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
