import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Admin Dashboard</h1>
      <div className="navbar-links">
        <a href="/home">Home</a>
        <a href="/profile">Profile</a>
      </div>
    </div>
  );
};

export default Navbar;
