// Dashboard.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const { pin } = location.state || { pin: '' };

  return (
    <div className="dashboard">
      <h1>{pin}'s Drawer</h1>
      <button>Create New Order</button>
      <button>Start Drawer</button>
      <button>End Drawer</button>
      <button>Employee Data</button>
    </div>
  );
};

export default Dashboard;

