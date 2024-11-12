import React from 'react';

const HRDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>HR Dashboard</h2>
      <div className="card">
        <h3>Calculate Attendance</h3>
        <button className="dashboard-button">View Attendance</button>
        <button className="dashboard-button">Add Attendance</button>
      </div>
      <div className="card">
        <h3>Calculate Salaries</h3>
        <button className="dashboard-button">Calculate</button>
        <button className="dashboard-button">View Salary Report</button>
      </div>
      <div className="card">
        <h3>Task Management</h3>
        <button className="dashboard-button">View Tasks</button>
        <button className="dashboard-button">Assign Task</button>
      </div>
    </div>
  );
};

export default HRDashboard;
