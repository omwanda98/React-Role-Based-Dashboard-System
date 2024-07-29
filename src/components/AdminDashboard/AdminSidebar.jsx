import React, { useState } from 'react';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        &#x22EE; {/* Unicode for three dots */}
      </button>
      <div className={`admin-sidebar ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          <li><a href="/admin">Dashboard</a></li>
          <li><a href="/admin/users">Manage Users</a></li>
          <li><a href="/admin/subordinates">Subordinate Availability</a></li>
          <li><a href="/admin/tasks">Assigned Tasks</a></li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
