import React, { useState } from "react";
import TimePicker from "react-time-picker";

function SalesManagerDashboard() {
  const [labours, setLabours] = useState([
    { id: 1, name: "John Doe", hoursWorked: 40, inTime: "08:00", outTime: "05:00" },
    { id: 2, name: "Jane Smith", hoursWorked: 35, inTime: "09:00", outTime: "06:00" },
    { id: 3, name: "Alex Johnson", hoursWorked: 45, inTime: "08:30", outTime: "05:30" },
  ]);
  const [newLabour, setNewLabour] = useState({
    name: "",
    hoursWorked: 0,
    inTime: "08:00",
    outTime: "05:00",
  });
  const [editingLabour, setEditingLabour] = useState(null);

  const handleAddLabour = () => {
    if (!newLabour.name || newLabour.hoursWorked <= 0 || !newLabour.inTime || !newLabour.outTime) {
      alert("Please enter valid details.");
      return;
    }
    const newId = labours.length ? labours[labours.length - 1].id + 1 : 1;
    setLabours([...labours, { ...newLabour, id: newId }]);
    setNewLabour({ name: "", hoursWorked: 0, inTime: "08:00", outTime: "05:00" });
  };

  const handleUpdateLabour = () => {
    if (!editingLabour || editingLabour.hoursWorked <= 0 || !editingLabour.inTime || !editingLabour.outTime) {
      alert("Please enter valid work hours and time details.");
      return;
    }

    setLabours(
      labours.map((labour) =>
        labour.id === editingLabour.id
          ? { ...labour, hoursWorked: editingLabour.hoursWorked, inTime: editingLabour.inTime, outTime: editingLabour.outTime }
          : labour
      )
    );
    setEditingLabour(null);
  };

  const handleDeleteLabour = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this labourer?");
    if (confirmDelete) {
      setLabours(labours.filter((labour) => labour.id !== id));
    }
  };

  return (
    <div style={styles.dashboardPage}>
      <h1 style={styles.header}>Sales Manager Dashboard</h1>
      <div style={styles.dashboardContent}>
        {/* Manage Labourers Section */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Manage Labours</h3>

          {/* Add Labour Form */}
          <div style={styles.formContainer}>
            <input
              type="text"
              placeholder="Labour Name"
              value={newLabour.name}
              onChange={(e) => setNewLabour({ ...newLabour, name: e.target.value })}
              style={styles.input}
            />
            <input
              type="number"
              placeholder="Hours Worked"
              value={newLabour.hoursWorked}
              onChange={(e) => setNewLabour({ ...newLabour, hoursWorked: e.target.value })}
              style={styles.input}
            />

            {/* Time Pickers for In-time and Out-time */}
            {["In-time", "Out-time"].map((label, index) => (
              <div key={index} style={styles.timeRow}>
                <div style={styles.timePickerWrapper}>
                  <label>{label}</label>
                  <TimePicker
                    onChange={(time) => setNewLabour({ ...newLabour, [label.toLowerCase()]: time })}
                    value={newLabour[label.toLowerCase()]}
                    disableClock={true}
                    format="hh:mm a"
                    clearIcon={null}
                    style={styles.timePicker}
                  />
                </div>
                <button onClick={() => setNewLabour({ ...newLabour, [label.toLowerCase()]: "" })} style={styles.deleteButton}>❌</button>
              </div>
            ))}

            <button onClick={handleAddLabour} style={styles.addButton}>Add Labour</button>
          </div>
        </div>

        {/* Existing Labours Box */}
        <div style={styles.card}>
          <h3 style={ styles.cardTitle}>Existing Labours</h3>
          <ul style={styles.labourList}>
            {labours.map((labour) => (
              <li key={labour.id} style={styles.labourItem}>
                <span>{labour.name} - {labour.hoursWorked} hrs | {labour.inTime} - {labour.outTime}</span>
                <button onClick={() => setEditingLabour(labour)} style={styles.editButton}>Edit</button>
                <button onClick={() => handleDeleteLabour(labour.id)} style={styles.deleteButton}>Delete</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Edit Labour Section */}
        {editingLabour && (
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Edit Labour Work Hours and Time</h3>
            <input
              type="number"
              placeholder="Enter new hours worked"
              value={editingLabour.hoursWorked}
              onChange={(e) => setEditingLabour({ ...editingLabour, hoursWorked: parseInt(e.target.value) })}
              style={styles.input}
            />

            {/* Time Pickers for In-time and Out-time */}
            {["In-time", "Out-time"].map((label, index) => (
              <div key={index} style={styles.timeRow}>
                <div style={styles.timePickerWrapper}>
                  <label>{label}</label>
                  <TimePicker
                    onChange={(time) => setEditingLabour({ ...editingLabour, [label.toLowerCase()]: time })}
                    value={editingLabour[label.toLowerCase()]}
                    disableClock={true}
                    format="hh:mm a"
                    clearIcon={null}
                    style={styles.timePicker}
                  />
                </div>
                <button onClick={() => setEditingLabour({ ...editingLabour, [label.toLowerCase()]: "" })} style={styles.deleteButton}>❌</button>
              </div>
            ))}

            <button onClick={handleUpdateLabour} style={styles.updateButton}>Update</button>
            <button onClick={() => setEditingLabour(null)} style={styles.cancelButton}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  dashboardPage: {
    margin: 0,
    padding: "20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    minHeight: "100vh",
  },
  header: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "40px",
  },
  dashboardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    paddingTop: "20px",
  },
  card: {
    width: "350px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    boxSizing: "border-box",
    marginBottom: "30px",
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "15px",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background-color 0.3s",
  },
  updateButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s",
  },
  cancelButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#FF9800",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s",
  },
  input: {
    width: "90%",
    padding : "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  labourList: {
    listStyle: "none",
    padding: "0",
  },
  labourItem: {
    margin: "10px 0",
    fontSize: "16px",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editButton: {
    padding: "5px 10px",
    fontSize: "14px",
    backgroundColor: "#FF9800",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
    transition: "background-color 0.3s",
  },
  deleteButton: {
    padding: "5px 10px",
    fontSize: "14px",
    backgroundColor: "#F44336",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
    transition: "background-color 0.3s",
  },
  timeRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    width: "100%",
  },
  timePickerWrapper: {
    width: "100%",
  },
  timePicker: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};

// Add hover effects for buttons
const buttonStyles = {
  addButton: {
    ...styles.addButton,
    ':hover': {
      backgroundColor: '#45a049',
    },
  },
  updateButton: {
    ...styles.updateButton,
    ':hover': {
      backgroundColor: '#1e88e5',
    },
  },
  cancelButton: {
    ...styles.cancelButton,
    ':hover': {
      backgroundColor: '#fb8c00',
    },
  },
  editButton: {
    ...styles.editButton,
    ':hover': {
      backgroundColor: '#fb8c00',
    },
  },
  deleteButton: {
    ...styles.deleteButton,
    ':hover': {
      backgroundColor: '#d32f2f',
    },
  },
};

export default SalesManagerDashboard;