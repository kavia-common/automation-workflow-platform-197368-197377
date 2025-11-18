import api from './client';

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
