import React from 'react';
import './UserNavbar.css';

const UserNavbar = ({ toggleSidebar }) => {
  return (
    <nav className="user-navbar">
      <div className="navbar-left">
        <div className="navbar-item" onClick={toggleSidebar}>
          <span className="three-dots">&#x22EE;</span>
        </div>
      </div>
      <div className="navbar-center">
        <div className="navbar-item">Home</div>
        <div className="navbar-item">Profile</div>
        <div className="navbar-item">Logout</div>
      </div>
    </nav>
  );
};

export default UserNavbar;
