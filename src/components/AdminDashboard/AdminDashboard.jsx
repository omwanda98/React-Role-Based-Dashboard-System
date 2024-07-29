import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './AdminDashboard.css';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';

const AdminDashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <AdminSidebar />
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h2>Admin Dashboard</h2>
        </div>
        <div className="dashboard-content">
          <h3>Manage Users</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Document Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>Verified</td>
                <td><button className="action-btn">View/Edit</button></td>
              </tr>
              <tr>
                <td>Alice Johnson</td>
                <td>alice@example.com</td>
                <td>Pending</td>
                <td><button className="action-btn">View/Edit</button></td>
              </tr>
            </tbody>
          </table>
          <h3>Subordinate Availability</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>Available</td>
                <td><button className="action-btn">View/Edit</button></td>
              </tr>
              <tr>
                <td>Bob Brown</td>
                <td>bob@example.com</td>
                <td>Busy</td>
                <td><button className="action-btn">View/Edit</button></td>
              </tr>
            </tbody>
          </table>
          <div className="assigned-tasks">
            <h3>Assigned Tasks</h3>
            <p>New users: 3</p>
            <p>Pending documents: 5</p>
            <p>Completed tasks: 2</p>
          </div>
          <div className="notifications">
            <h3>Notifications</h3>
            <p>Elizabeth has uploaded documents</p>
            <p>Michael has verified documents</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
