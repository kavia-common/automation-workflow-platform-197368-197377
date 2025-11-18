import axios from 'axios';

/**
 * Axios API client configured with base URL.
 * No authentication headers are attached in this public build.
 * Base URL is read from REACT_APP_API_BASE_URL at build time or defaults to localhost:3001.
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001',
});

export default api;
