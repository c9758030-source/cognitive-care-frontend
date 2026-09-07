import React from 'react';

export default function CaregiverDashboard() {
  const patientStats = {
    name: 'Eleanor Vance',
    lastActive: 'Today, 10:30 AM',
    gamesPlayedThisWeek: 12,
    avgScore: '85%',
    remindersCompleted: '4/5'
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>Caregiver Dashboard</h1>
      <p style={{ fontSize: '1.1rem', color: '#555' }}>
        Monitoring activity and progress for: <strong>{patientStats.name}</strong>
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
        <div style={cardStyle}>
          <h3>Last Active</h3>
          <p>{patientStats.lastActive}</p>
        </div>
        <div style={cardStyle}>
          <h3>Games Played</h3>
          <p>{patientStats.gamesPlayedThisWeek} sessions</p>
        </div>
        <div style={cardStyle}>
          <h3>Avg Score</h3>
          <p>{patientStats.avgScore}</p>
        </div>
        <div style={cardStyle}>
          <h3>Daily Tasks</h3>
          <p>{patientStats.remindersCompleted} completed</p>
        </div>
      </div>

      <h2>Recent Activity Log</h2>
      <ul style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
        <li>Completed <strong>Memory Card Game</strong> with a score of 90% (10:15 AM)</li>
        <li>Took morning medication: <strong>Done</strong> (08:05 AM)</li>
        <li>Logged in to platform (08:00 AM)</li>
      </ul>
    </div>
  );
}

const cardStyle = {
  padding: '1rem',
  border: '1px solid #28a745',
  borderRadius: '8px',
  backgroundColor: '#f8f9fa',
  textAlign: 'center'
};