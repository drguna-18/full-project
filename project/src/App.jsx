import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ApplicationForm from "./pages/ApplicationForm";
import ApplicationStatus from "./pages/ApplicationStatus";
import ExpertDashboard from "./pages/ExpertDashboard";
import BusinessDashboard from "./pages/BusinessDashboard";
import AboutPage from "./components/bussness/about";
import ContactPage from "./components/bussness/contact";
import Forget from "./pages/Forget";
import EnvironmentalClearance from "./components/bussness/EnvironmentalClearance";
import TradeLicensePage from "./components/bussness/tradeLicense";
import GstRegistrationPage from "./components/bussness/gstRegistration";
import FssaiPermitPage from "./components/bussness/FssaiPermitPage";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/Admin Dashboard";
import AdminRoute from "./pages/AdminRoute";
import ApplicationTable from "./pages/ApplicationTable";
import TradeLicenseApproval from "./pages/TradeLicenseApproval";
import GstApproval from "./pages/GstApproval";
import EnvApproval from "./pages/EnvApproval";
import Tl from "./pages/ApprovalForm/TL";
import Gst from "./pages/ApprovalForm/Gst";
import Envc from "./pages/ApprovalForm/Envc";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const role = localStorage.getItem("userRole");
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/apply" element={<ApplicationForm />} />
            <Route path="/expert" element={<ExpertDashboard />} />
            <Route path="/businessDashboard" element={<BusinessDashboard />} />
            <Route
              path="/environmentalclearance"
              element={<EnvironmentalClearance />}
            />
            <Route path="/TradeLicense" element={<TradeLicensePage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/Forget" element={<Forget />} />
            <Route path="/GstRegistration" element={<GstRegistrationPage />} />
            <Route path="/FssaiPermitPage" element={<FssaiPermitPage />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />
            <Route path="/TL" element={<Tl />} />
            <Route path="/Gst" element={<Gst />} />
            <Route path="/Envc" element={<Envc />} />
            <Route path="/ApplicationTable" element={<ApplicationTable />} />
            <Route path="/EnvApproval" element={<EnvApproval />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route
              path="/TradeLicenseApproval"
              element={<TradeLicenseApproval />}
            />
            <Route path="/GstApproval" element={<GstApproval />} />
          </Routes>
        </main>
        <footer className="bg-dark text-light py-4 mt-auto">
          <div className="container text-center">
            <p className="mb-0">
              &copy; 2025 EntrepreneurHUB. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
