import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import SalesManagerDashboard from "./pages/SalesManagerDashboard";
// Import HR and Labour Dashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/sales-manager-dashboard" element={<SalesManagerDashboard />} />
        {/* Add HR and Labour Dashboard Routes */}
      </Routes>
    </Router>
  );
}

export default App;
