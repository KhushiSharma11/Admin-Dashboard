// src/pages/ViewLocations.js

import React from "react";

function ViewLocations() {
  const locations = [
    { id: 1, name: "Location 1" },
    { id: 2, name: "Location 2" },
  ];

  return (
    <div style={styles.page}>
      <h2>View Locations</h2>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
    textAlign: "center",
  },
};

export default ViewLocations;
