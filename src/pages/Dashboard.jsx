import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1>Good day! Welcome back.</h1>
      <p>Select a feature to get started:</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        <Link to="/games" style={cardStyle}>
          <h2>Cognitive Games</h2>
          <p>Play memory and focus exercises.</p>
        </Link>
        <Link to="/memory" style={cardStyle}>
          <h2>Memory Assistant</h2>
          <p>View daily tasks and reminders.</p>
        </Link>
        <Link to="/progress" style={cardStyle}>
          <h2>My Progress</h2>
          <p>Track your health records.</p>
        </Link>
      </div>
    </div>
  );
}

const cardStyle = {
  padding: '1.5rem',
  border: '2px solid #0056b3',
  borderRadius: '8px',
  textDecoration: 'none',
  color: '#333'
};