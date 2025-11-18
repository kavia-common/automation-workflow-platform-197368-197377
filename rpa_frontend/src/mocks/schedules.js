export const schedules = [
  { id: 1, workflow_id: 1, cron: '0 2 * * *', is_active: true },
  { id: 2, workflow_id: 3, cron: '*/30 * * * *', is_active: true },
  { id: 3, workflow_id: 4, cron: '15 1 * * 1', is_active: false },
  { id: 4, workflow_id: 5, cron: '0 6 * * *', is_active: true },
  { id: 5, workflow_id: 6, cron: '0 */6 * * *', is_active: true },
  { id: 6, workflow_id: 7, cron: '45 23 * * 5', is_active: false },
  { id: 7, workflow_id: 8, cron: '0 3 * * *', is_active: true },
  { id: 8, workflow_id: 10, cron: '*/10 * * * *', is_active: true },
  { id: 9, workflow_id: 11, cron: '0 0 * * 0', is_active: true },
  { id: 10, workflow_id: 12, cron: '30 4 * * *', is_active: false },
  { id: 11, workflow_id: 2, cron: '0 9 * * 1-5', is_active: true },
  { id: 12, workflow_id: 9, cron: '*/5 * * * *', is_active: true },
];
