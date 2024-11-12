import React from 'react';

function Header({ title }) {
  return (
    <div style={styles.header}>
      <h1>{title}</h1>
    </div>
  );
}

const styles = {
  header: {
    padding: "20px",
    backgroundColor: "#007bff",
    color: "#fff",
    textAlign: "center",
  },
};

export default Header;