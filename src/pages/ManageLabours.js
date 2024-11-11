import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";


function ManageLabours() {
  const [labours, setLabours] = useState([]);
  const [newLabourID, setNewLabourID] = useState("");
  const [newLabourName, setNewLabourName] = useState("");

  // Handle Add New Labour
  const handleAddLabour = (e) => {
    e.preventDefault();
    const newLabour = { id: newLabourID, name: newLabourName };
    setLabours([...labours, newLabour]);
    setNewLabourID("");
    setNewLabourName("");
  };

  // Handle Delete Labour
  const handleDeleteLabour = (id) => {
    setLabours(labours.filter((labour) => labour.id !== id));
  };

  return (
    <div style={styles.page}>
      <h2>Manage Labours</h2>
      <form onSubmit={handleAddLabour} style={styles.form}>
        <InputField
          label="Labour ID"
          type="text"
          placeholder="Enter Labour ID"
          value={newLabourID}
          onChange={(e) => setNewLabourID(e.target.value)}
        />
        <InputField
          label="Labour Name"
          type="text"
          placeholder="Enter Labour Name"
          value={newLabourName}
          onChange={(e) => setNewLabourName(e.target.value)}
        />
        <Button label="Add Labour" onClick={handleAddLabour} />
      </form>
      <div style={styles.labourList}>
        <h3>Labour List</h3>
        {labours.length === 0 ? (
          <p>No Labours found.</p>
        ) : (
          labours.map((labour) => (
            <div key={labour.id} style={styles.labourItem}>
              <span>{labour.name}</span>
              <button onClick={() => handleDeleteLabour(labour.id)}>Delete</button>
              <Link to={`/edit-labour/${labour.id}`}>Edit</Link>
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
  labourList: {
    marginTop: "20px",
  },
  labourItem: {
    marginBottom: "10px",
  },
};

export default ManageLabours;
