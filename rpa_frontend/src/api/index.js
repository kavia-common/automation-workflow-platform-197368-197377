import api from './client';
import * as mock from '../mocks/api';

// PUBLIC_INTERFACE
export function useApi() {
  /**
   * Returns an API surface that switches between mock data providers and real axios client
   * based on REACT_APP_USE_MOCKS environment variable.
   * When mocks are enabled, functions return promises with simulated latency.
   */
  const useMocks = String(process.env.REACT_APP_USE_MOCKS).toLowerCase() === 'true';

  if (useMocks) {
    return mock;
  }

  // Real API adapter
  return {
    // Health/root
    async health() {
      const res = await api.get('/');
      return res.data;
    },

    // Workflows
    async listWorkflows(params) {
      const res = await api.get('/workflows/', { params });
      return res.data || [];
    },
    async getWorkflow(id) {
      const res = await api.get(`/workflows/${id}`);
      return res.data;
    },
    async createWorkflow(payload) {
      const res = await api.post('/workflows/', payload);
      return res.data;
    },

    // Bots
    async listBots(params) {
      const res = await api.get('/bots/', { params });
      return res.data || [];
    },

    // Schedules
    async listSchedules(params) {
      const res = await api.get('/schedules/', { params });
      return res.data || [];
    },

    // Executions
    async listExecutions(params) {
      const res = await api.get('/executions/', { params });
      return res.data || [];
    },

    // Users/Settings placeholders
    async listUsers() {
      return [];
    },
    async getSettings() {
      return { theme: 'ocean', notifications: true };
    },
  };
}
