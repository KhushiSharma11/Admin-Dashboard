import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import SalesManagerDashboard from "./pages/SalesManagerDashboard";
import HRDashboard from "./pages/HRDashboard";
import LabourDashboard from "./pages/LabourDashboard";
import Signup from "./pages/Signup";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/sales-manager" element={<SalesManagerDashboard />} />
        <Route path="/dashboard/hr" element={<HRDashboard />} />
        <Route path="/dashboard/labour" element={<LabourDashboard />} />
        
      </Routes>
    </Router>
  );
}

export default App;
