export const schedules = [
  // Cron-based
  { id: 1, workflow_id: 1, cron: '0 2 * * *', is_active: true, type: 'cron', next_run_at: '2025-02-19T02:00:00Z', timezone: 'UTC' },
  { id: 2, workflow_id: 3, cron: '*/30 * * * *', is_active: true, type: 'cron', next_run_at: '2025-02-18T10:30:00Z', timezone: 'UTC' },
  { id: 3, workflow_id: 4, cron: '15 1 * * 1', is_active: false, type: 'cron', next_run_at: '2025-02-24T01:15:00Z', timezone: 'UTC' },
  { id: 4, workflow_id: 5, cron: '0 6 * * *', is_active: true, type: 'cron', next_run_at: '2025-02-19T06:00:00Z', timezone: 'UTC' },
  { id: 5, workflow_id: 6, cron: '0 */6 * * *', is_active: true, type: 'cron', next_run_at: '2025-02-18T12:00:00Z', timezone: 'UTC' },
  { id: 6, workflow_id: 7, cron: '45 23 * * 5', is_active: false, type: 'cron', next_run_at: '2025-02-21T23:45:00Z', timezone: 'UTC' },
  { id: 7, workflow_id: 8, cron: '0 3 * * *', is_active: true, type: 'cron', next_run_at: '2025-02-19T03:00:00Z', timezone: 'UTC' },
  { id: 8, workflow_id: 10, cron: '*/10 * * * *', is_active: true, type: 'cron', next_run_at: '2025-02-18T10:10:00Z', timezone: 'UTC' },
  { id: 9, workflow_id: 11, cron: '0 0 * * 0', is_active: true, type: 'cron', next_run_at: '2025-02-23T00:00:00Z', timezone: 'UTC' },
  { id: 10, workflow_id: 12, cron: '30 4 * * *', is_active: false, type: 'cron', next_run_at: '2025-02-19T04:30:00Z', timezone: 'UTC' },
  { id: 11, workflow_id: 2, cron: '0 9 * * 1-5', is_active: true, type: 'cron', next_run_at: '2025-02-19T09:00:00Z', timezone: 'UTC' },
  { id: 12, workflow_id: 9, cron: '*/5 * * * *', is_active: true, type: 'cron', next_run_at: '2025-02-18T10:10:00Z', timezone: 'UTC' },
  // Interval-based (keep cron null for UI that expects the field to exist)
  { id: 13, workflow_id: 14, cron: null, is_active: true, type: 'interval', every_seconds: 3600, next_run_at: '2025-02-18T11:00:00Z', timezone: 'UTC' },
  { id: 14, workflow_id: 15, cron: null, is_active: true, type: 'interval', every_seconds: 900, next_run_at: '2025-02-18T10:15:00Z', timezone: 'UTC' },
  { id: 15, workflow_id: 21, cron: null, is_active: false, type: 'interval', every_seconds: 86400, next_run_at: '2025-02-19T00:00:00Z', timezone: 'UTC' },
];
