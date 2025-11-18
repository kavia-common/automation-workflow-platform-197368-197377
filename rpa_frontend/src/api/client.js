import axios from 'axios';

/**
 * Axios API client configured with base URL and JWT auth.
 * Base URL is read from REACT_APP_API_BASE_URL at build time.
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001',
});

// Attach token if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
