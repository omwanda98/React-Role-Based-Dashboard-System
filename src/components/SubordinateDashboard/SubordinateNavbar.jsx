import React from 'react';
import { Link } from 'react-router-dom';
import './SubordinateNavbar.css';

const SubordinateNavbar = () => {
  return (
    <nav className="subordinate-navbar">
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default SubordinateNavbar;
