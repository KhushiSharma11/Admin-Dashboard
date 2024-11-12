import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import SalesManagerDashboard from './pages/SalesManagerDashboard';
import LabourDashboard from './pages/LabourDashboard';
import HRDashboard from './pages/HRDashboard';
import LoginPage from './pages/LoginPage';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/sales-manager-dashboard" element={<SalesManagerDashboard />} />
        <Route path="/labour-dashboard" element={<LabourDashboard />} />
        <Route path="/hr-dashboard" element={<HRDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
