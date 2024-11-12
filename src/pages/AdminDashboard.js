import React, { useState } from 'react';
import './AdminDashboard.css'; // External CSS for styling

const AdminDashboard = () => {
  const [salesManagers, setSalesManagers] = useState([]);
  const [labours, setLabours] = useState([]);
  const [newSalesManager, setNewSalesManager] = useState('');
  const [newLabour, setNewLabour] = useState('');
  const [locations, setLocations] = useState([
    { id: 1, name: 'John Doe', role: 'Sales Manager', location: 'Noida' },
    { id: 2, name: 'Jane Smith', role: 'Labour', location: 'Delhi' },
  ]);

  // CRUD Functions
  const addUser = (type) => {
    const id = Date.now();
    if (type === 'Sales Manager') {
      setSalesManagers([...salesManagers, { id, name: newSalesManager }]);
      setLocations([...locations, { id, name: newSalesManager, role: 'Sales Manager', location: 'Unknown' }]);
      setNewSalesManager('');
    } else {
      setLabours([...labours, { id, name: newLabour }]);
      setLocations([...locations, { id, name: newLabour, role: 'Labour', location: 'Unknown' }]);
      setNewLabour('');
    }
  };

  // Function to handle location change for a user
  const handleLocationChange = (e, id) => {
    const updatedLocations = locations.map((loc) =>
      loc.id === id ? { ...loc, location: e.target.value } : loc
    );
    setLocations(updatedLocations);
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>

      {/* Manage Sales Managers */}
      <div className="card">
        <h3>Manage Sales Managers</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Sales Manager Name"
            value={newSalesManager}
            onChange={(e) => setNewSalesManager(e.target.value)}
            className="input-field"
          />
          <button className="dashboard-button" onClick={() => addUser('Sales Manager')}>
            Add New
          </button>
        </div>
        <table className="crud-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {salesManagers.map((manager) => (
              <tr key={manager.id}>
                <td>{manager.id}</td>
                <td>{manager.name}</td>
                <td>
                  <button className="action-button">Edit</button>
                  <button className="action-button delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Manage Labours */}
      <div className="card">
        <h3>Manage Labours</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Labour Name"
            value={newLabour}
            onChange={(e) => setNewLabour(e.target.value)}
            className="input-field"
          />
          <button className="dashboard-button" onClick={() => addUser('Labour')}>
            Add New
          </button>
        </div>
        <table className="crud-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {labours.map((labour) => (
              <tr key={labour.id}>
                <td>{labour.id}</td>
                <td>{labour.name}</td>
                <td>
                  <button className="action-button">Edit</button>
                  <button className="action-button delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Locations */}
      <div className="card">
        <h3>View Locations</h3>
        <table className="crud-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((loc) => (
              <tr key={loc.id}>
                <td>{loc.name}</td>
                <td>{loc.role}</td>
                <td>
                  <select
                    value={loc.location}
                    onChange={(e) => handleLocationChange(e, loc.id)}
                    className="location-select"
                  >
                    <option value="Noida">Noida</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Greater Noida">Greater Noida</option>
                    <option value="Unknown">Unknown</option>
                  </select>
                </td>
                <td>
                  <button className="action-button">Edit</button>
                  <button className="action-button delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
