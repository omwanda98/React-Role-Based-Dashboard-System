import React from 'react';
import './UserSidebar.css';

const UserSidebar = () => {
  return (
    <div className="user-sidebar">
      <h2>User Dashboard</h2>
      <ul>
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Notifications</li>
      </ul>
    </div>
  );
};

export default UserSidebar;
