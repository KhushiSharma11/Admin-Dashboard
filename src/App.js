import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import SalesManagerDashboard from "./pages/SalesManagerDashboard";
import HRDashboard from "./pages/HRDashboard";
import LabourDashboard from "./pages/LabourDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/sales-manager" element={<SalesManagerDashboard />} />
        <Route path="/dashboard/hr" element={<HRDashboard />} />
        <Route path="/dashboard/labour" element={<LabourDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
