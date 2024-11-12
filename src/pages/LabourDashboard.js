import React from 'react';

const LabourDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Labour Dashboard</h2>
      <div className="card">
        <h3>Task Management</h3>
        <ul>
          <li>
            Task 1 <button className="dashboard-button">Complete Task</button>
          </li>
          <li>
            Task 2 <button className="dashboard-button">Complete Task</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LabourDashboard;
