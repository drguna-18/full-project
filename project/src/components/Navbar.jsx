import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setCurrentUser(user);
        localStorage.setItem("userCheck", "loggedIn");
      } else {
        setIsLoggedIn(false);
        setCurrentUser(null);
      }
    });

    return () => unsubscribe(); // Clean up
  }, []);

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
    navigate("/");
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
            onClick={() => setMenuOpen(!menuOpen)}
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarNav"
          >
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
                      fontSize: "25px",
                      paddingLeft: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                    className="nav-icon"
                  >
                    <i className="bi bi-person-circle nav-icon"></i>
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
          <h5>{currentUser?.displayName || "No Name"}</h5>
          <p className="text-muted">{currentUser?.email || "No Email"}</p>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;
