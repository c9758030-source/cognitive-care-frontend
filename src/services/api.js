const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const getProfile = async () => {
  const response = await fetch(`${API_URL}/api/profile`);
  if (!response.ok) throw new Error('Failed to fetch profile');
  return response.json();
};

export const submitGameScore = async (game, score, moves) => {
  const response = await fetch(`${API_URL}/api/games/score`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ game, score, moves })
  });
  if (!response.ok) throw new Error('Failed to submit game score');
  return response.json();
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Login failed');
  }
  return response.json();
};
