import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="/dashboard">Dashboard</a>
      <a href="/users">Users</a>
      <a href="/tasks">Tasks</a>
      <a href="/settings">Settings</a>
      <a href="/profile">Profile</a>
    </div>
  );
};

export default Sidebar;
