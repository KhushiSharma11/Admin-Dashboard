import React, { useState } from 'react';
import './SalesManagerDashboard.css'; // Import styles

const SalesManagerDashboard = () => {
  const [labours, setLabours] = useState([]);
  const [newLabour, setNewLabour] = useState({ name: '', id: '', role: '' });
  const [editingLabour, setEditingLabour] = useState(null);
  const [message, setMessage] = useState('');

  // Handle Create (Add New Labour)
  const handleAddLabour = () => {
    if (!newLabour.name || !newLabour.id || !newLabour.role) {
      setMessage('All fields are required!');
      return;
    }
    setLabours([...labours, newLabour]);
    setNewLabour({ name: '', id: '', role: '' });
    setMessage('Labour added successfully!');
  };

  // Handle Edit (Update Labour details)
  const handleEditLabour = (labour) => {
    setEditingLabour(labour);
  };

  const handleUpdateLabour = () => {
    setLabours(
      labours.map((labour) =>
        labour.id === editingLabour.id ? editingLabour : labour
      )
    );
    setEditingLabour(null);
    setMessage('Labour updated successfully!');
  };

  // Handle Delete
  const handleDeleteLabour = (id) => {
    setLabours(labours.filter((labour) => labour.id !== id));
    setMessage('Labour deleted successfully!');
  };

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingLabour) {
      setEditingLabour({ ...editingLabour, [name]: value });
    } else {
      setNewLabour({ ...newLabour, [name]: value });
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Sales Manager Dashboard</h2>

      {/* Message */}
      {message && <div className="message">{message}</div>}

      {/* Create New Labour */}
      <div className="card">
        <h3 className="card-title">Add New Labour</h3>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={editingLabour ? editingLabour.name : newLabour.name}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="text"
            name="id"
            placeholder="Enter ID"
            value={editingLabour ? editingLabour.id : newLabour.id}
            onChange={handleInputChange}
            className="input-field"
          />
          <input
            type="text"
            name="role"
            placeholder="Enter Role"
            value={editingLabour ? editingLabour.role : newLabour.role}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>

        {editingLabour ? (
          <button onClick={handleUpdateLabour} className="action-button">
            Update Labour
          </button>
        ) : (
          <button onClick={handleAddLabour} className="action-button">
            Add Labour
          </button>
        )}
      </div>

      {/* Manage Labours */}
      <div className="card">
        <h3 className="card-title">Manage Labours within Area</h3>
        {labours.length === 0 ? (
          <p>No labours added yet.</p>
        ) : (
          <ul className="labour-list">
            {labours.map((labour) => (
              <li key={labour.id} className="labour-item">
                <span>{labour.name} ({labour.role})</span>
                <button
                  onClick={() => handleEditLabour(labour)}
                  className="action-button edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteLabour(labour.id)}
                  className="action-button delete-button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Track In-time/Out-time */}
      <div className="card">
        <h3 className="card-title">Track In-time/Out-time</h3>
        <button className="action-button">Track</button>
        <button className="action-button">View Logs</button>
      </div>
    </div>
  );
};

export default SalesManagerDashboard;
