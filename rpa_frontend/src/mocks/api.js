import { delay } from './utils';
import { workflows } from './workflows';
import { bots } from './bots';
import { schedules } from './schedules';
import { executions } from './executions';
import { users } from './users';
import { settings } from './system';

// Simulated pagination utility (client-side)
function paginate(list, { page = 1, pageSize = 10 } = {}) {
  const total = list.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const items = list.slice(start, end);
  return {
    items,
    page,
    pageSize,
    total,
    totalPages: Math.ceil(total / pageSize),
  };
}

// PUBLIC_INTERFACE
export async function health() {
  /** Mock health root endpoint returning a static ok payload after delay. */
  await delay();
  return { status: 'ok', service: 'mock-backend', ts: new Date().toISOString() };
}

// PUBLIC_INTERFACE
export async function listWorkflows(params = {}) {
  /** Mock list of workflows with pagination. */
  await delay();
  return paginate(workflows, params);
}

// PUBLIC_INTERFACE
export async function getWorkflow(id) {
  /** Mock get workflow by id. */
  await delay();
  return workflows.find(w => String(w.id) === String(id)) || null;
}

// PUBLIC_INTERFACE
export async function createWorkflow(payload) {
  /** Mock create workflow; pushes into local in-memory array for the session. */
  await delay();
  const nextId = workflows.length ? Math.max(...workflows.map(w => w.id)) + 1 : 1;
  const record = { id: nextId, name: payload.name, description: payload.description ?? null };
  workflows.unshift(record);
  return record;
}

// PUBLIC_INTERFACE
export async function listBots(params = {}) {
  /** Mock list of bots with pagination. */
  await delay();
  return paginate(bots, params);
}

// PUBLIC_INTERFACE
export async function listSchedules(params = {}) {
  /** Mock list of schedules with pagination. */
  await delay();
  return paginate(schedules, params);
}

// PUBLIC_INTERFACE
export async function listExecutions(params = {}) {
  /** Mock list of executions with pagination. */
  await delay();
  return paginate(executions, params);
}

// PUBLIC_INTERFACE
export async function listUsers() {
  /** Mock list of users for user management placeholder. */
  await delay();
  return users;
}

// PUBLIC_INTERFACE
export async function getSettings() {
  /** Mock settings object for settings placeholder. */
  await delay();
  return settings;
}
