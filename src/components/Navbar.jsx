import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Cognitive Care</h2>
      <div style={styles.links}>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/games" style={styles.link}>Games</Link>
        <Link to="/memory" style={styles.link}>Memory Assistant</Link>
        <Link to="/progress" style={styles.link}>Progress</Link>
        <Link to="/caregiver" style={styles.link}>Caregiver</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#0056b3', color: '#fff' },
  logo: { margin: 0, fontSize: '1.5rem' },
  links: { display: 'flex', gap: '1.2rem' },
  link: { color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }
};
