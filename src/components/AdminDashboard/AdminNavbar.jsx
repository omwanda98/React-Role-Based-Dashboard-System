import React from 'react';
import './AdminNavbar.css';

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="logo">Admin Panel</div>
      <ul className="nav-links">
        <li><a href="/admin">Home</a></li>
        <li><a href="/admin/settings">Settings</a></li>
        <li><a href="/admin/profile">Profile</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
