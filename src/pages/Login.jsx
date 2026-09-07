 import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../services/api';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await loginUser(formData);

      // Save token and user details to localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(
        err.response?.data?.message || 'AUTHENTICATION FAILED: INVALID PLAYER CREDENTIALS'
      );
    } finally {
      setLoading(false);
    }
  };

  const activeStyles = isDarkMode ? darkTheme : lightTheme;

  return (
    <div style={{ ...styles.container, ...activeStyles.container }}>
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme} 
        style={{ ...styles.themeToggle, ...activeStyles.themeToggle }}
        aria-label="Toggle Theme Mode"
      >
        {isDarkMode ? '⚡ LIGHT MODE' : '🌌 SYSTEM DARK'}
      </button>

      {/* Solo Leveling System Glassmorphism Card */}
      <div style={{ ...styles.card, ...activeStyles.card }}>
        
        {/* System Header Badge */}
        <div style={{ ...styles.systemBadge, ...activeStyles.systemBadge }}>
          [ SYSTEM NOTIFICATION ]
        </div>

        <h2 style={{ ...styles.title, ...activeStyles.title }}>PLAYER ACCESS</h2>
        <p style={{ ...styles.subtitle, ...activeStyles.subtitle }}>
          ENTER YOUR CREDENTIALS TO INITIALIZE SESSION
        </p>
        
        {error && (
          <div style={{ ...styles.errorBanner, ...activeStyles.errorBanner }}>
            <span style={styles.errorIcon}>⚠️</span> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={{ ...styles.label, ...activeStyles.label }}>
              PLAYER ID / EMAIL
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="hunter@system.io"
              required
              style={{ ...styles.input, ...activeStyles.input }}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password" style={{ ...styles.label, ...activeStyles.label }}>
              SECURITY PASSCODE
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              style={{ ...styles.input, ...activeStyles.input }}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            style={{ ...styles.button, ...activeStyles.button }}
          >
            {loading ? 'INITIALIZING SYSTEM...' : 'ENTER SYSTEM'}
          </button>
        </form>

        <p style={{ ...styles.footerText, ...activeStyles.footerText }}>
          NEW PLAYER?{' '}
          <Link to="/register" style={{ ...styles.link, ...activeStyles.link }}>
            REGISTER NEW ACCOUNT
          </Link>
        </p>
      </div>
    </div>
  );
};

// Base layout styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '1.5rem',
    fontFamily: "'Courier New', Courier, monospace, sans-serif",
    transition: 'all 0.3s ease',
    position: 'relative',
  },
  themeToggle: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '0.6rem 1.2rem',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    letterSpacing: '1px',
    transition: 'all 0.2s ease',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    padding: '2.5rem 2rem',
    borderRadius: '8px',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    transition: 'all 0.3s ease',
  },
  systemBadge: {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textAlign: 'center',
    marginBottom: '0.8rem',
  },
  title: {
    marginBottom: '0.3rem',
    textAlign: 'center',
    fontSize: '1.8rem',
    fontWeight: '900',
    letterSpacing: '3px',
    textTransform: 'uppercase',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '0.75rem',
    marginBottom: '1.8rem',
    letterSpacing: '1px',
    opacity: 0.8,
  },
  errorBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1rem',
    borderRadius: '4px',
    marginBottom: '1.5rem',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
  },
  errorIcon: {
    fontSize: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.4rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
  },
  input: {
    padding: '0.9rem',
    borderRadius: '4px',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.2s ease',
    fontFamily: 'inherit',
  },
  button: {
    padding: '1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '0.5rem',
    letterSpacing: '2px',
    transition: 'all 0.2s ease',
    fontFamily: 'inherit',
  },
  footerText: {
    marginTop: '1.8rem',
    textAlign: 'center',
    fontSize: '0.8rem',
    letterSpacing: '1px',
  },
  link: {
    fontWeight: 'bold',
    textDecoration: 'none',
    letterSpacing: '1px',
  },
};

// Solo Leveling System Dark Theme (Purple Glow & Glass)
const darkTheme = {
  container: {
    backgroundColor: '#070510',
    backgroundImage: 'radial-gradient(circle at 50% 50%, #1a0b36 0%, #070510 100%)',
  },
  themeToggle: {
    backgroundColor: 'transparent',
    color: '#a855f7',
    border: '1px solid #a855f7',
    boxShadow: '0 0 10px rgba(168, 85, 247, 0.4)',
  },
  card: {
    background: 'rgba(15, 10, 30, 0.65)',
    border: '1px solid #9333ea',
    boxShadow: '0 0 25px rgba(147, 51, 234, 0.35), inset 0 0 15px rgba(147, 51, 234, 0.15)',
  },
  systemBadge: {
    color: '#c084fc',
    textShadow: '0 0 8px rgba(192, 132, 252, 0.8)',
  },
  title: {
    color: '#ffffff',
    textShadow: '0 0 12px rgba(168, 85, 247, 0.8)',
  },
  subtitle: {
    color: '#c084fc',
  },
  errorBanner: {
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    color: '#fca5a5',
    border: '1px solid #ef4444',
    boxShadow: '0 0 10px rgba(239, 68, 68, 0.3)',
  },
  label: {
    color: '#e9d5ff',
  },
  input: {
    backgroundColor: 'rgba(10, 5, 20, 0.7)',
    color: '#ffffff',
    border: '1px solid #7e22ce',
    boxShadow: 'inset 0 0 8px rgba(126, 34, 206, 0.3)',
  },
  button: {
    backgroundColor: '#9333ea',
    color: '#ffffff',
    boxShadow: '0 0 15px rgba(147, 51, 234, 0.6)',
  },
  footerText: {
    color: '#a855f7',
  },
  link: {
    color: '#c084fc',
    textShadow: '0 0 6px rgba(192, 132, 252, 0.6)',
  },
};

// High-Contrast Accessible Light Theme
const lightTheme = {
  container: {
    backgroundColor: '#f8fafc',
  },
  themeToggle: {
    backgroundColor: '#ffffff',
    color: '#6b21a8',
    border: '2px solid #6b21a8',
  },
  card: {
    background: '#ffffff',
    border: '2px solid #6b21a8',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  },
  systemBadge: {
    color: '#6b21a8',
  },
  title: {
    color: '#0f172a',
  },
  subtitle: {
    color: '#475569',
  },
  errorBanner: {
    backgroundColor: '#fef2f2',
    color: '#991b1b',
    border: '2px solid #dc2626',
  },
  label: {
    color: '#0f172a',
  },
  input: {
    backgroundColor: '#f1f5f9',
    color: '#0f172a',
    border: '2px solid #94a3b8',
  },
  button: {
    backgroundColor: '#6b21a8',
    color: '#ffffff',
  },
  footerText: {
    color: '#334155',
  },
  link: {
    color: '#6b21a8',
  },
};

export default Login;

          