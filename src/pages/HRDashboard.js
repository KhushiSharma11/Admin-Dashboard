import React, { useState } from "react";
import Button from "../components/Button";

function HRDashboard() {
  return (
    <div className="hr-dashboard">
      <h2>HR Dashboard</h2>
      <div className="dashboard-actions">
        <Button label="Calculate Attendance" />
        <Button label="Calculate Salaries" />
      </div>
    </div>
  );
}

export default HRDashboard;
