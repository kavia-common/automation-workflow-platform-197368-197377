import api from './client';

/**
 * Note: These direct axios helpers are kept for compatibility with real backend usage.
 * The app primarily consumes API via src/api/index.js which switches between mocks and real client.
 */

// PUBLIC_INTERFACE
export async function listWorkflows() {
  /** Fetch list of workflows from backend. */
  const res = await api.get('/workflows/');
  return res.data || [];
}

// PUBLIC_INTERFACE
export async function createWorkflow(payload) {
  /** Create a new workflow on backend. */
  const res = await api.post('/workflows/', payload);
  return res.data;
}
