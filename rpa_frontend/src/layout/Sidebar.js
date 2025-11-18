import React from 'react';
import { NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function Sidebar() {
  /** Sidebar containing app navigation links. */
  const linkClass = ({ isActive }) => (isActive ? 'active' : undefined);
  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      <div className="brand">RPA Studio</div>
      <nav className="nav">
        <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
        <NavLink to="/workflows" className={linkClass}>Workflows</NavLink>
        <NavLink to="/workflows/builder" className={linkClass}>Workflow Builder</NavLink>
        <NavLink to="/bots" className={linkClass}>Bots</NavLink>
        <NavLink to="/schedules" className={linkClass}>Schedules</NavLink>
        <NavLink to="/executions" className={linkClass}>Executions</NavLink>
        <NavLink to="/users" className={linkClass}>Users</NavLink>
        <NavLink to="/settings" className={linkClass}>Settings</NavLink>
      </nav>
    </aside>
  );
}
