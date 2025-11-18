import React, { useEffect, useState } from 'react';
import api from '../api/client';

// PUBLIC_INTERFACE
export default function Workflows() {
  /** Displays list of workflows fetched from backend. */
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWorkflows = async () => {
    setLoading(true);
    try {
      const res = await api.get('/workflows/');
      setItems(res.data || []);
    } catch (e) {
      // keep simple MVP
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkflows();
  }, []);

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h3 style={{ margin: 0 }}>Workflows</h3>
        <button className="btn" onClick={fetchWorkflows} disabled={loading}>
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
      <div className="space" />
      {items.length === 0 && <p className="subtitle">No workflows found.</p>}
      {items.map(w => (
        <div key={w.id} className="row" style={{ justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--ocean-border)' }}>
          <div>
            <strong>{w.name}</strong>
            <div className="subtitle">{w.description || '—'}</div>
          </div>
          <div className="row">
            <button className="btn secondary">Open</button>
          </div>
        </div>
      ))}
    </div>
  );
}
