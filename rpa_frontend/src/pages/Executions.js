import React, { useEffect, useState } from 'react';
import api from '../api/client';

// PUBLIC_INTERFACE
export default function Executions() {
  /** Lists executions from backend. */
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/executions/').then(res => setItems(res.data || [])).catch(() => setItems([]));
  }, []);

  return (
    <div className="card">
      <h3>Executions</h3>
      {items.length === 0 && <p className="subtitle">No executions yet.</p>}
      {items.map(x => (
        <div key={x.id} style={{ padding: '8px 0', borderBottom: '1px solid var(--ocean-border)' }}>
          <strong>Execution #{x.id}</strong> <span className="subtitle">Workflow #{x.workflow_id} • {x.status}</span>
        </div>
      ))}
    </div>
  );
}
