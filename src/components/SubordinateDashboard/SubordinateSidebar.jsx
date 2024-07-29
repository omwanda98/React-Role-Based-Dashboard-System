import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SubordinateSidebar.css';

const SubordinateSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <div className="three-dots">&#x2022;&#x2022;&#x2022;</div>
      </div>
      <h2>Panel</h2>
      <ul>
        <li><Link to="/subordinate/profile">Profile</Link></li>
        <li><Link to="/subordinate/settings">Settings</Link></li>
        <li><Link to="/subordinate/assigned-users">Assigned Users</Link></li>
        <li><Link to="/subordinate/task-list">Task List</Link></li>
        {/* Add more sidebar links as needed */}
      </ul>
    </div>
  );
};

export default SubordinateSidebar;
