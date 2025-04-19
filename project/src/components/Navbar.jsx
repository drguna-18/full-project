import { Link } from "react-router-dom";

function Navbar() {
  return (
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
            {/* <li className="nav-item">
              <Link className="nav-link" to="/apply">
                <i className="bi bi-file-earmark-text me-1"></i> Apply
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/status">
                <i className="bi bi-clipboard-check me-1"></i> Status
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                <i className="bi bi-file-earmark-text me-1"></i> Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Faq">
                <i className="bi bi-file-earmark-text me-1"></i> FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/BusinessDashboard">
                <i className="bi bi-clipboard-check me-1"></i> BusinessDashboard
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link1" to="/login">
                <i className="bi bi-box-arrow-in-right me-1"></i> Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link2" to="/Register">
                <i className="bi bi-person-plus me-1"></i> Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
