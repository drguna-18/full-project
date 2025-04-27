import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { useState, useEffect } from "react";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  // Dummy user data (replace with real data later)
  const user = {
    name: "John Doe",
    email: "john@example.com",
  };

  useEffect(() => {
    const userCheck = localStorage.getItem("userCheck");
    if (userCheck === "loggedIn") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userCheck");
    setIsLoggedIn(false);
    setShowSidebar(false);
  };

  return (
    <>
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
                <Link className="nav-links" to="/">
                  <i className="bi bi-house-door me-1"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/BusinessDashboard">
                  <i className="bi bi-clipboard-check me-1"></i> Business
                  Registration
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/ContactPage">
                  <i className="bi bi-file-earmark-text me-1"></i> Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" to="/AboutPage">
                  <i className="bi bi-file-earmark-text me-1"></i> About
                </Link>
              </li>

              {/* Show Login/Signup if not logged in, else show User Icon */}
              {!isLoggedIn ? (
                <>
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
                </>
              ) : (
                <li className="nav-item">
                  <span
                    onClick={toggleSidebar}
                    style={{
                      cursor: "pointer",
                      color: "white",
                      fontSize: "24px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    className="nav-link"
                  >
                    <i className="bi bi-person-circle"></i>
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar Offcanvas */}
      <Offcanvas
        show={showSidebar}
        onHide={toggleSidebar}
        placement="end"
        style={{ width: "250px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>User Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-center">
          <i className="bi bi-person-circle" style={{ fontSize: "80px" }}></i>
          <h5>{user.name}</h5>
          <p className="text-muted">{user.email}</p>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;
