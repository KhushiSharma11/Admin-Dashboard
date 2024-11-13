import React, { useEffect, useState } from "react"; 
import axios from 'axios'; 
import './SalesManagerDashboard.css'; 

function SalesManagerDashboard() {
  const [labours, setLabours] = useState([]); 
  const [newLabour, setNewLabour] = useState({ name: "", area: "", inTime: "", outTime: "" }); 
  const [isEditing, setIsEditing] = useState(false); 
  const [editLabourIndex, setEditLabourIndex] = useState(null); 
  
  const areas = ["Noida", "Delhi", "Greater Noida"]; 

  // Function to fetch labors from the API
  const fetchLabours = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/labours/');
      console.log("Labours fetched:", response.data);  // Added debug log
      setLabours(response.data); 
    } catch (error) {
      console.error("Error fetching labours:", error);
    }
  };

  useEffect(() => {
    fetchLabours();
  }, []);

  // Function to add a new labor
  const addLabour = async () => {
    if (!newLabour.name || !newLabour.area || !newLabour.inTime || !newLabour.outTime) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/labours/', newLabour);
      console.log("Labour added:", response.data);  // Added debug log
      setLabours([...labours, response.data]);
      setNewLabour({ name: "", area: "", inTime: "", outTime: "" });
    } catch (error) {
      console.error("Error adding labour:", error);
    }
  };

  // Function to set the labor to edit
  const editLabour = (index) => {
    setIsEditing(true);
    setEditLabourIndex(index);
    setNewLabour(labours[index]);
  };

  // Function to update labor details
  const updateLabour = async () => {
    if (!newLabour.name || !newLabour.area || !newLabour.inTime || !newLabour.outTime) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/labours/${labours[editLabourIndex].id}/`, newLabour);
      console.log("Labour updated:", response.data);  // Added debug log
      const updatedLabours = [...labours];
      updatedLabours[editLabourIndex] = response.data; 
      setLabours(updatedLabours);
      setNewLabour({ name: "", area: "", inTime: "", outTime: "" });
      setIsEditing(false);
      setEditLabourIndex(null);
    } catch (error) {
      console.error("Error updating labour:", error);
    }
  };

  // Function to delete a labor
  const deleteLabour = async (index) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/labours/${labours[index].id}/`);
      console.log("Labour deleted:", labours[index]);  // Added debug log
      const updatedLabours = labours.filter((_, i) => i !== index);
      setLabours(updatedLabours);
    } catch (error) {
      console.error("Error deleting labour:", error);
    }
  };

  return (
    <div className="dashboard">
      <h2>Sales Manager Dashboard</h2>
      <div className="card">
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
        </div>
        <div className="labourList">
          <h3>Labour List</h3>
          {labours.length === 0 ? (
            <p>No labours in this area.</p>
          ) : (
            <table className="labourTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Area</th>
                  <th>In Time</th>
                  <th>Out Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {labours.map((labour, index) => (
                  <tr key={labour.id} className="labourItem">
                    <td>{labour.name}</td>
                    <td>{labour.area}</td>
                    <td>{labour.in_time}</td>
                    <td>{labour.out_time}</td>
                    <td>
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default SalesManagerDashboard;
