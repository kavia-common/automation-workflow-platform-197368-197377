import React, { useEffect, useState } from 'react';
import api from '../api/client';

// PUBLIC_INTERFACE
export default function Dashboard() {
  /** Overview dashboard with quick stats and backend health ping. */
  const [health, setHealth] = useState(null);

  useEffect(() => {
    api.get('/')
      .then(res => setHealth(res.data || { status: 'ok' }))
      .catch(() => setHealth({ status: 'unavailable' }));
  }, []);

  return (
    <div className="grid">
      <div className="card">
        <h3>Backend Health</h3>
        <p className="subtitle">Status: {health ? JSON.stringify(health) : 'Checking…'}</p>
      </div>
      <div className="space" />
      <div className="card">
        <h3>Quick Actions</h3>
        <p className="subtitle">Create workflows, manage bots, and track executions.</p>
      </div>
    </div>
  );
}
