import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-light vh-100 p-3" style={{ width: '250px' }}>
      <h3 className="mb-4">MyApp</h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a className="nav-link active" href="#dashboard">
            Dashboard
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="#profile">
            Profile
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="#approvals">
            Approvals
          </a>
        </li>
        <li className="nav-item mt-auto">
          <a className="nav-link text-danger" href="#logout">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
