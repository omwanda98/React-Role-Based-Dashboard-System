import React, { useState } from 'react';
import UserNavbar from './UserNavbar';
import UserSidebar from './UserSidebar';
import './UserDashboard.css';

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submittedData, setSubmittedData] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="user-dashboard">
      <UserNavbar toggleSidebar={toggleSidebar} />
      <div className={`dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <UserSidebar />
        <div className="main-content">
          <h1>User Dashboard</h1>
          <form onSubmit={handleSubmit} className="user-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              required
            />
            <button type="submit">Submit</button>
          </form>
          {submittedData && (
            <div className="submitted-data">
              <h2>Submitted Data:</h2>
              <p>Name: {submittedData.name}</p>
              <p>Email: {submittedData.email}</p>
              <p>Phone: {submittedData.phone}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
