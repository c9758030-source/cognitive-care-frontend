import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Games from './pages/Games';
import MemoryGame from './pages/MemoryGame';
import NumberGame from './pages/NumberGame';
import PatternGame from './pages/PatternGame';
import AttentionGame from './pages/AttentionGame';
import MemoryAssistant from './pages/MemoryAssistant';
import Progress from './pages/Progress';
import Profile from './pages/Profile';
import CaregiverDashboard from './pages/CaregiverDashboard';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/memory" element={<MemoryGame />} />
          <Route path="/games/numbers" element={<NumberGame />} />
          <Route path="/games/pattern" element={<PatternGame />} />
          <Route path="/games/attention" element={<AttentionGame />} />
          <Route path="/memory" element={<MemoryAssistant />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/caregiver" element={<CaregiverDashboard />} />
        </Routes>
      </main>
    </Router>
  );
}