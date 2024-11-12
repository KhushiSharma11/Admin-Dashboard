import React, { useState } from "react";
import './SalesManagerDashboard.css'; // Make sure the CSS file exists

function SalesManagerDashboard() {
  const [labours, setLabours] = useState([]);
  const [newLabour, setNewLabour] = useState({ name: "", area: "", inTime: "", outTime: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editLabourIndex, setEditLabourIndex] = useState(null);

  const areas = ["Noida", "Delhi", "Greater Noida"];

  // Function to add new Labour
  const addLabour = () => {
    if (!newLabour.name || !newLabour.area || !newLabour.inTime || !newLabour.outTime) {
      alert("Please fill in all fields!");
      return;
    }

    setLabours([...labours, { ...newLabour, id: labours.length + 1 }]);
    setNewLabour({ name: "", area: "", inTime: "", outTime: "" });
  };

  // Function to edit Labour
  const editLabour = (index) => {
    setIsEditing(true);
    setEditLabourIndex(index);
    setNewLabour(labours[index]);
  };

  // Function to update Labour details
  const updateLabour = () => {
    const updatedLabours = [...labours];
    updatedLabours[editLabourIndex] = { ...newLabour };
    setLabours(updatedLabours);
    setNewLabour({ name: "", area: "", inTime: "", outTime: "" });
    setIsEditing(false);
    setEditLabourIndex(null);
  };

  // Function to delete a Labour
  const deleteLabour = (index) => {
    const updatedLabours = labours.filter((_, i) => i !== index);
    setLabours(updatedLabours);
  };

  return (
    <div className="dashboard">
      <h2>Sales Manager Dashboard</h2>
      <div className="manageButtons">
        <h3>Manage Labours in Your Area</h3>
        <div className="form">
          <input
            type="text"
            placeholder="Labour Name"
            value={newLabour.name}
            onChange={(e) => setNewLabour({ ...newLabour, name: e.target.value })}
            className="input"
          />
          <select
            value={newLabour.area}
            onChange={(e) => setNewLabour({ ...newLabour, area: e.target.value })}
            className="input"
          >
            <option value="">Select Area</option>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          <input
            type="time"
            value={newLabour.inTime}
            onChange={(e) => setNewLabour({ ...newLabour, inTime: e.target.value })}
            className="input"
          />
          <input
            type="time"
            value={newLabour.outTime}
            onChange={(e) => setNewLabour({ ...newLabour, outTime: e.target.value })}
            className="input"
          />
          <button
            className="button"
            onClick={isEditing ? updateLabour : addLabour}
          >
            {isEditing ? "Update Labour" : "Add New Labour"}
          </button>
        </div>
        <div className="labourList">
          <h3>Labour List</h3>
          {labours.length === 0 ? (
            <p>No labours in this area.</p>
          ) : (
            <ul>
              {labours.map((labour, index) => (
                <li key={labour.id} className="labourItem">
                  <span>
                    {labour.name} ({labour.area}) - In Time: {labour.inTime} - Out Time: {labour.outTime}
                  </span>
                  <button
                    className="editButton"
                    onClick={() => editLabour(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="deleteButton"
                    onClick={() => deleteLabour(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default SalesManagerDashboard;
