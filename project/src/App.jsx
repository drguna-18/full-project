import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
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
            {/* <Route path="/status" element={<ApplicationStatus />} /> */}
            <Route path="/expert" element={<ExpertDashboard />} />
            <Route path="/businessDashboard" element={<BusinessDashboard />} />
            <Route path="/environmentalclearance" element={<EnvironmentalClearance />} />
            <Route path="/TradeLicense" element={<TradeLicensePage/>} />
            <Route path="/AboutPage" element={<AboutPage/>} />
            <Route path="/ContactPage" element={<ContactPage/>} />
            <Route path="/Forget" element={<Forget/>} />
            <Route path="/GstRegistration" element={<GstRegistrationPage />} />
            
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
