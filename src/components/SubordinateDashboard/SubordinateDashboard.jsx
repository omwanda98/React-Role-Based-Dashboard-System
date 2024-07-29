/*import React from 'react';
import SubordinateNavbar from './SubordinateNavbar';
import SubordinateSidebar from './SubordinateSidebar';
import './SubordinateDashboard.css';

const SubordinateDashboard = () => {
  return (
    <div className="subordinate-dashboard">
      <SubordinateNavbar />
      <div className="dashboard-container">
        <SubordinateSidebar />
        <div className="main-content">
          <h1>Subordinate Dashboard</h1>
          <div className="table-container">
            <h2>Assigned Users</h2>
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
                  <td>john.doe@example.com</td>
                  <td>Verified</td>
                  <td><button>Verify</button></td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>jane.smith@example.com</td>
                  <td>Not Verified</td>
                  <td><button>Verify</button></td>
                </tr>
               
              </tbody>
            </table>
            <h2>Task List</h2>
            <table>
              <thead>
                <tr>
                  <th>Task Description</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Complete project report</td>
                  <td>2024-07-15</td>
                  <td>In Progress</td>
                  <td><button>Complete</button></td>
                </tr>
                <tr>
                  <td>Update client information</td>
                  <td>2024-07-20</td>
                  <td>Not Started</td>
                  <td><button>Start</button></td>
                </tr>
               
              </tbody>
            </table>
          </div>
          <div className="task-summary">
            <h2>Task Summary</h2>
            <div className="task-table">
              <h3>Pending Tasks</h3>
              <ul>
                <li>Task 1: Due 2024-07-15</li>
                <li>Task 2: Due 2024-07-20</li>
               
              </ul>
              <h3>Completed Tasks</h3>
              <ul>
                <li>Task 3: Completed on 2024-07-10</li>
                <li>Task 4: Completed on 2024-07-12</li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubordinateDashboard;
*/
// src/components/SubordinateDashboard/SubordinateDashboard.jsx
// src/components/SubordinateDashboard/SubordinateDashboard.jsx
// src/components/SubordinateDashboard/SubordinateDashboard.jsx
import React, { useState } from 'react';
import SubordinateNavbar from './SubordinateNavbar';
import SubordinateSidebar from './SubordinateSidebar';
import Modal from '../Modal/Modal';
import './SubordinateDashboard.css';

const SubordinateDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');

  const assignedUsers = [
    { name: 'John Doe', email: 'john.doe@example.com', status: 'Verified' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Not Verified' },
  ];

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVerificationMessage('');
  };

  const handleVerify = () => {
    const user = assignedUsers.find(user => user.email === email);
    if (user) {
      setVerificationMessage(`User ${user.name} has been successfully verified.`);
    } else {
      setVerificationMessage('No user found with this email.');
    }
  };

  return (
    <div className="subordinate-dashboard">
      <SubordinateNavbar />
      <div className="dashboard-container">
        <SubordinateSidebar />
        <div className="main-content">
          <h1>Subordinate Dashboard</h1>
          <div className="table-container">
            <h2>Assigned Users</h2>
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
                {assignedUsers.map(user => (
                  <tr key={user.email}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <td><button onClick={handleOpenModal}>Verify</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2>Task List</h2>
            <table>
              <thead>
                <tr>
                  <th>Task Description</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Complete project report</td>
                  <td>2024-07-15</td>
                  <td>In Progress</td>
                  <td><button>Complete</button></td>
                </tr>
                <tr>
                  <td>Update client information</td>
                  <td>2024-07-20</td>
                  <td>Not Started</td>
                  <td><button>Start</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="task-summary">
            <h2>Task Summary</h2>
            <div className="task-table">
              <h3>Pending Tasks</h3>
              <ul>
                <li>Task 1: Due 2024-07-15</li>
                <li>Task 2: Due 2024-07-20</li>
              </ul>
              <h3>Completed Tasks</h3>
              <ul>
                <li>Task 3: Completed on 2024-07-10</li>
                <li>Task 4: Completed on 2024-07-12</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <h2>Enter User Email for Verification</h2>
        <input
          type="email"
          placeholder="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" onClick={handleVerify}>
          Verify
        </button>
        {verificationMessage && <p>{verificationMessage}</p>}
      </Modal>
    </div>
  );
};

export default SubordinateDashboard;
