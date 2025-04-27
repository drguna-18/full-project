import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"; // Import Button for profile icon
import { useState } from "react";
import { Offcanvas } from "react-bootstrap"; // For sidebar

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const user = {
    name: "John Doe",
    email: "john@example.com",
  };

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary custom-navbar">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <i className="bi bi-building me-2"></i>
            Entrepreneur HUB
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="bi bi-house-door me-1"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/BusinessDashboard">
                  <i className="bi bi-clipboard-check me-1"></i> Business Registration
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactPage">
                  <i className="bi bi-file-earmark-text me-1"></i> Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutPage">
                  <i className="bi bi-file-earmark-text me-1"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link1" to="/login">
                  <i className="bi bi-box-arrow-in-right me-1"></i> Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link2" to="/Signup">
                  <i className="bi bi-person-plus me-1"></i> Signup
                </Link>
              </li>

              {/* User Icon Button */}
              <li className="nav-item">
                <Button variant="light" onClick={toggleSidebar}>
                  <i className="bi bi-person" style={{ fontSize: '20px' }}></i>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar (Offcanvas) */}
      <Offcanvas 
        show={showSidebar} 
        onHide={toggleSidebar} 
        placement="end"
        style={{ width: '250px' }} // Set compact sidebar width
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>User Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-center">
          <i className="bi bi-person-circle" style={{ fontSize: '80px' }}></i>
          <h5>{user.name}</h5>
          <p className="text-muted">{user.email}</p>
          <Button variant="danger" onClick={() => console.log('Logging out...')}>
            Logout
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;
