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