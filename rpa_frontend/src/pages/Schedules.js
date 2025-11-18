import React, { useEffect, useState } from 'react';
import api from '../api/client';

// PUBLIC_INTERFACE
export default function Schedules() {
  /** Lists schedules from backend. */
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/schedules/').then(res => setItems(res.data || [])).catch(() => setItems([]));
  }, []);

  return (
    <div className="card">
      <h3>Schedules</h3>
      {items.length === 0 && <p className="subtitle">No schedules found.</p>}
      {items.map(s => (
        <div key={s.id} style={{ padding: '8px 0', borderBottom: '1px solid var(--ocean-border)' }}>
          <strong>Workflow #{s.workflow_id}</strong> <span className="subtitle">{s.cron} • {s.is_active ? 'Active' : 'Inactive'}</span>
        </div>
      ))}
    </div>
  );
}
